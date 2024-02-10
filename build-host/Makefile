# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
#
# SPDX-License-Identifier: MIT

## Build and publish an image in which to build, test, and release projects.

### Defensive settings for make:
#     https://tech.davis-hansson.com/p/make/
SHELL:=bash
.ONESHELL:
.SHELLFLAGS:=-xeu -o pipefail -c
.SILENT:
.DELETE_ON_ERROR:
MAKEFLAGS+=--warn-undefined-variables
MAKEFLAGS+=--no-builtin-rules
PS1?=$$

DOCKER_IMAGES=\
    registry.gitlab.com/rpatterson/project-structure \
    ghcr.io/rpatterson/project-structure \
    merpatterson/project-structure
DOCKER_IMAGE=$(firstword $(DOCKER_IMAGES))


## Top-level targets

.PHONY: all
### Default target
all: build

.PHONY: build
### Build the Docker `build-host` container image.
build: ./Dockerfile
	docker pull "$(DOCKER_IMAGE):build-host" || true
	docker buildx build --pull --load \
	    --build-arg "BUILDKIT_INLINE_CACHE=1" \
	    --build-arg "USER_SIGNINGKEY=$$(
	        git config "user.signingkey" ||
	        gpg --with-colons --keyid-format long --list-secret-keys "$$(
	            git config "user.email"
	        )" |
	        sed -En 's|^ssb:([^:]*:){3}([^:]*):([^:]*:){5}:[^:]*[sS][^:]*:.*|\2!|p'
	    )" \
	    --cache-from "$(DOCKER_IMAGE):build-host" \
	    $(DOCKER_IMAGES:%=--tag "%:build-host") \
	    "./"

.PHONY: release
### Publish the image to this specific CI/CD platform for future caching.
release: build
	echo $(DOCKER_IMAGES:%=%:build-host) | xargs -n 1 -P 0 -- docker push


## Debug targets

.PHONY: debug-github-checkout
## Reproduce the GitHub Actions shallow git checkout
debug-github-checkout:
	git init "$(CHECKOUT_DIR)"
	cd "$(CHECKOUT_DIR)"
	git remote add origin \
	    "https://github.com/$(GITHUB_REPOSITORY_OWNER)/project-structure"
	rev_hash="$$(git ls-remote -q "origin" "$(VCS_BRANCH)" | cut -f 1)"
	git -c protocol.version=2 fetch --no-tags --prune --progress \
	    --no-recurse-submodules --depth=1 "origin" "$${rev_hash}"
	git checkout --progress --detach "$${rev_hash}"
