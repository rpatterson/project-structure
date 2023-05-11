/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import { fixture, assert } from "@open-wc/testing";
/* eslint import/extensions: off */
import { html } from "lit/static-html.js";
import AppElement from "../src/ui/app";

suite("app-element", () => {
  test("is defined", () => {
    const element = document.createElement("app-element");
    assert.instanceOf(element, AppElement);
  });

  test("renders with default values", async () => {
    const element = await fixture(html`<app-element></app-element>`);
    assert.shadowDom.equal(
      element,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test("renders with a set name", async () => {
    const element = await fixture(
      html`<app-element name="Test"></app-element>`
    );
    assert.shadowDom.equal(
      element,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test("handles a click", async () => {
    const element = await fixture(html`<app-element></app-element>`);
    const button = element.shadowRoot.querySelector("button");
    button.click();
    await element.updateComplete;
    assert.shadowDom.equal(
      element,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test("styling applied", async () => {
    const element = await fixture(html`<app-element></app-element>`);
    await element.updateComplete;
    assert.equal(getComputedStyle(element).paddingTop, "16px");
  });
});
