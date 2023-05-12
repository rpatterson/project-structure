/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

/* eslint unicorn/prevent-abbreviations: off */

/* eslint import/no-extraneous-dependencies: off */
import { legacyPlugin } from "@web/dev-server-legacy";

/* eslint import/no-unused-modules: off */
export default {
  nodeResolve: { exportConditions: ["development"] },
  preserveSymlinks: true,
  plugins: [
    legacyPlugin({
      polyfills: {
        // Manually imported in index.html file
        webcomponents: false,
      },
    }),
  ],
};
