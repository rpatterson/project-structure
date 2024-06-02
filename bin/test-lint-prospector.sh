#!/bin/bash
#
# Run the Python kitchen sink linter as fast as possible.

# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
#
# SPDX-License-Identifier: MIT

set -eu -o pipefail
shopt -s inherit_errexit
export PS4='+$(basename "${0}"):${LINENO}+'
if test "${DEBUG:=false}" = "true"
then
    # Echo commands for easier debugging
    set -x
fi


main() {
    git ls-files -co --exclude-standard -z '*.py' | xargs -0 -- prospector "${@}"
}


main "${@}"
