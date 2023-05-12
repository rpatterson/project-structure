<!--
SPDX-FileCopyrightText: 2023 Ross Patterson <me@rpatterson.net>

SPDX-License-Identifier: MIT
-->

---

layout: page.11ty.cjs
title: <project-structure-app> ⌲ Home

---

# &lt;project-structure-app>

`<project-structure-app>` is an awesome element. It's a great introduction to
building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<project-structure-app>` is just an HTML element. You can it anywhere you can use
HTML!

```html
<project-structure-app></project-structure-app>
```

  </div>
  <div>

<project-structure-app></project-structure-app>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<project-structure-app>` can be configured with attributed in plain HTML.

```html
<project-structure-app name="HTML"></project-structure-app>
```

  </div>
  <div>

<project-structure-app name="HTML"></project-structure-app>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<project-structure-app>` can be used with declarative rendering libraries like
Angular, React, Vue, and lit-html

```js
import { html, render } from "lit-html";

const name = "lit-html";

render(
  html`
    <h2>This is a &lt;project-structure-app&gt;</h2>
    <project-structure-app .name=${name}></project-structure-app>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;project-structure-app&gt;</h2>
<project-structure-app name="lit-html"></project-structure-app>

  </div>
</section>
