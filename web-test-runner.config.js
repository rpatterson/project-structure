/**
 * @license
 * Copyright 2023 Ross Patterson
 * SPDX-License-Identifier: MIT
 */

/* eslint import/no-extraneous-dependencies: off */
/* eslint import/no-unused-modules: off */
import { playwrightLauncher } from "@web/test-runner-playwright";

const mode = process.env.MODE || "dev";
if (!["dev", "prod"].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

// https://modern-web.dev/docs/test-runner/cli-and-configuration/
export default {
  files: ["./test/**/*-test.js"],
  nodeResolve: { exportConditions: mode === "dev" ? ["development"] : [] },
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
  testFramework: {
    // Use the `assert` TDD style, as opposed to the `expect` BDD style:
    //   https://www.chaijs.com/guide/styles/
    //   https://mochajs.org/#interfaces
    config: {
      ui: "tdd",
    },
  },
  coverage: true,
  coverageConfig: {
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
