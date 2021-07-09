# Alpine Lorem

Add easy lorem ipsum text creation to your Alpine 3.x components with a custom directive.

> This package only supports Alpine v3.x.

## About

This plugin adds a new `x-lorem` to Alpine that allows to easliy create lorem ipsum text.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script
    src="https://cdn.jsdelivr.net/npm/@lefrancois/alpine-lorem@1/dist/cdn.min.js"
    defer
></script>
```

### NPM

```bash
npm install @lefrancois/alpine-lorem
```

Add the `x-lorem` directive to your project by registering the plugin with Alpine.

```js
import Alpine from "alpinejs";
import Lorem from "@lefrancois/alpine-lorem";

Alpine.plugin(Lorem);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

To create random lorem ipsum text, just use the `x-lorem` directive on an element.

```html
<div x-data>
    <div x-lorem></div>
</div>
```

Optionally you can set the number of paragraphs and words per paragraph.

```html
<div x-data>
    <div x-lorem="2,160"></div>
</div>
```

## License

Copyright (c) 2021 Michael Lefrancois

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
