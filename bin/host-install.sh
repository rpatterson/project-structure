#!/bin/bash

# SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
#
# SPDX-License-Identifier: MIT

#
# Install all tools required by recipes that have to be installed externally on the
# host.  Must be able to be run again on hosts that have previously run it.
#
# Host OS packages:
# - `gettext`: We need `$ envsubst` in the `expand_template` `./Makefile` function
# - `py3-pip`: We need `$ pip3` to install the project's Python build tools
# - `docker-cli-compose`: Dependencies for which we can't get current versions otherwise

set -eu -o pipefail
shopt -s inherit_errexit
if [ "${DEBUG:=true}" = "true" ]
then
    # Echo commands for easier debugging
    PS4='$0:$LINENO+'
    set -x
fi


main() {
    if which apk
    then
        sudo apk update
        sudo apk add "gettext" "py3-pip" "docker-cli-compose"
    elif which apt-get
    then
        sudo apt-get update
        sudo apt-get install -y "gettext-base" "python3-pip" "docker-compose-plugin"
    else
        set +x
        echo "ERROR: OS not supported for installing host dependencies"
        # TODO: Add OS-X/Darwin support.
        false
    fi
    pip3 install -r "./build-host/requirements.txt.in"
}


main "$@"
