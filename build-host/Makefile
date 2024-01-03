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

DOCKER_IMAGE?=merpatterson/project-structure

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
	    --tag "$(DOCKER_IMAGE):build-host" \
	    "./"

.PHONY: release
### Publish the image to this specific CI/CD platform for future caching.
release: build
	docker push "$(DOCKER_IMAGE):build-host"
