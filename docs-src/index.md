---
layout: page.11ty.cjs
title: <project-structure-element> ⌲ Home
---

# &lt;project-structure-element>

`<project-structure-element>` is an awesome element. It's a great introduction to
building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<project-structure-element>` is just an HTML element. You can it anywhere you can use
HTML!

```html
<project-structure-element></project-structure-element>
```

  </div>
  <div>

<project-structure-element></project-structure-element>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<project-structure-element>` can be configured with attributed in plain HTML.

```html
<project-structure-element name="HTML"></project-structure-element>
```

  </div>
  <div>

<project-structure-element name="HTML"></project-structure-element>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<project-structure-element>` can be used with declarative rendering libraries like
Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;project-structure-element&gt;</h2>
    <project-structure-element .name=${name}></project-structure-element>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;project-structure-element&gt;</h2>
<project-structure-element name="lit-html"></project-structure-element>

  </div>
</section>
