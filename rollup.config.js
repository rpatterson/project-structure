/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import summary from "rollup-plugin-summary";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

/* eslint import/no-unused-modules: off */
export default {
  input: "my-element.js",
  output: {
    file: "my-element.bundled.js",
    format: "esm",
  },
  plugins: [
    replace({ "Reflect.decorate": "undefined" }),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
