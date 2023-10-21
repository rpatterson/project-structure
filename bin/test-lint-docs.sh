#!/bin/bash

# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
#
# SPDX-License-Identifier: MIT

# Run documentation linters implemented in Python.

set -eu -o pipefail
shopt -s inherit_errexit
if [ "${DEBUG:=false}" = "true" ]
then
    # Echo commands for easier debugging
    set -x
    PS4='$0:$LINENO+'
fi


main() {
    set -x

    sphinx_buildername="${1:-html}"
    shift || true

    # Verify reStructuredText syntax. Exclude `./docs/index.rst` because its use of the
    # `.. include:: ../README.rst` directive breaks `$ rstcheck`:
    # `CRITICAL:rstcheck_core.checker:An `AttributeError` error occured.`
    git ls-files -z '*.rst' ':!docs/index.rst' | xargs -r -0 -- rstcheck

    # Verify Sphinx usage:
    sphinx-build -M "${sphinx_buildername}" "./docs/" "./build/docs/"
    sphinx-build -M "linkcheck" "./docs/" "./build/docs/"
    git ls-files -z '*.rst' | xargs -r -0 -- sphinx-lint -e "all" -d "line-too-long"
}


main "$@"
