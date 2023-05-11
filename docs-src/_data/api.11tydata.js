/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import fs from "node:fs";

/* eslint import/no-unused-modules: off */
export default JSON.parse(fs.readFileSync("custom-elements.json"));
