/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import { expect } from "@esm-bundle/chai";

import projectStructure from "../src/index";

it("imports a module", () => {
  expect(projectStructure).to.be.undefined;
});
