/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import { assert } from "@esm-bundle/chai";

import projectStructure from "../src/index";

suite("project-structure module", () => {
  test("imports as a module", () => {
    assert.isUndefined(projectStructure, "Imported unexpected value");
  });
});
