/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

const mode = process.env.MODE || "dev";
if (!["dev", "prod"].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

// https://modern-web.dev/docs/test-runner/cli-and-configuration/
export default {
  files: ["./test/**/*_test.js"],
  nodeResolve: { exportConditions: mode === "dev" ? ["development"] : [] },
};
