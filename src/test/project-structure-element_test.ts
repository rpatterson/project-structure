/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MyElement} from '../project-structure-element.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('project-structure-element', () => {
  test('is defined', () => {
    const el = document.createElement('project-structure-element');
    assert.instanceOf(el, MyElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(
      html`<project-structure-element></project-structure-element>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(
      html`<project-structure-element name="Test"></project-structure-element>`
    );
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(
      html`<project-structure-element></project-structure-element>`
    )) as MyElement;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(
      html`<project-structure-element></project-structure-element>`
    )) as MyElement;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
