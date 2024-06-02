#!/bin/bash
#
# Install the CodeCov coverage uploader into the user's `${HOME}/`.

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
    if ! which codecov
    then
	mkdir -pv ~/.local/bin/
	# https://docs.codecov.com/docs/codecov-uploader#using-the-uploader-with-codecovio-cloud
	if which brew
	then
	    # macOS:
	    curl --output-dir ~/.local/bin/ -Os \
	         "https://uploader.codecov.io/latest/macos/codecov"
	elif which apk
	then
	    # Alpine:
	    wget --directory-prefix ~/.local/bin/ \
	         "https://uploader.codecov.io/latest/alpine/codecov"
	else
	    # Other Linux distributions:
	    curl --output-dir ~/.local/bin/ -Os \
	         "https://uploader.codecov.io/latest/linux/codecov"
	fi
	chmod +x ~/.local/bin/codecov
    fi
}


main "$@"
