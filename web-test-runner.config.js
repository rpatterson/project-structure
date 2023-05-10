/**
 * @license
 * Copyright 2023 Ross Patterson
 * SPDX-License-Identifier: MIT
 */

import { playwrightLauncher } from "@web/test-runner-playwright";

const mode = process.env.MODE || "dev";
if (!["dev", "prod"].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

// https://modern-web.dev/docs/test-runner/cli-and-configuration/
export default {
  files: ["./test/**/*_test.js"],
  nodeResolve: { exportConditions: mode === "dev" ? ["development"] : [] },
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
};
