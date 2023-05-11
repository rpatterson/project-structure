/**
 * @license
 * SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>
 * SPDX-License-Identifier: MIT
 */

import { LitElement, html, css } from "lit";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class AppElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }

  render() {
    return html`
      <h1>${this.sayHello()}!</h1>
      <button @click=${this.onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  onClick() {
    this.count += 1;
    this.dispatchEvent(new CustomEvent("count-changed"));
  }

  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  sayHello() {
    return `Hello, ${this.name}`;
  }
}

window.customElements.define("app-element", AppElement);
