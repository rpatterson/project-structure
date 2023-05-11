/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import { expect } from "@esm-bundle/chai";

import project_structure from '../src/index.js';

it("imports a module", () => {
  expect(project_structure).to.be.null;
});
