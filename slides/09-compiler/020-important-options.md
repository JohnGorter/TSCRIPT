## Important options

- `--target`
    - ECMAScript target version: `ES5`, `ES6`, `ES2016`, `ES2017`, `ESNext`
- `--watch`
    - Watch for new or edited files and compile them.
- `--moduleResolution`
    - Strategy to figure out where to find the imports.
    - Two options available `Classic` and `Node`
        - `Classic` is mainly there for backwards compatibility.
        - `Node` is what you should use this day and age.

---

### `--lib` option

- List of libraries to include with compilation.
- For example:
    ```typescript
    "lib": [
        "es5",
        "es2015.promise"
    ]
    ```
    use all `ES5` libraries, but include the ES2015 `Promise` type.

---

### `--sourceMap` option

Generate corresponding `.map.js` files. Useful for debugging in IDE or browser.

![Debugging in browser](resources/debugging-ts-browser.png) <!-- .element class="pin-height-400" -->

---

### `--module` option

Module defines what code to output for `import` and `export` statements.

`commonjs`

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
import * as express from 'express';
export let app = express();
```

<!-- .element class="fragment" data-fragment-index="0" -->

```javascript
// Generated JavaScript
"use strict";
const express = require('express');
exports.app = express();
```

<!-- .element class="fragment" data-fragment-index="1" -->

---

### `--module` option

`amd`

```typescript
//TypeScript

import * as express from 'express';
export let app = express();
```

```javascript
//Generated JavaScript

define(["require", "exports", 'express'],
        function (require, exports, express) {
    "use strict";
    exports.app = express();
});
```

---

### Type checking in JavaScript files

It's possible to use TypeScript in JavaScript files.

* `--noEmit`
    Don't emit code
* `--allowJs`
    Allow JavaScript files to be compiled

Since TS 2.3:

<!-- .element class="fragment" data-fragment-index="0" -->

Add `// @ts-check` add the top of JS files to be checked

<!-- .element class="fragment" data-fragment-index="0" -->

Or use `--checkJs` to type check all JS files

<!-- .element class="fragment" data-fragment-index="1" -->

---

### Strictness

- `--noImplicitAny`
    Raise error on expressions and declarations with an implied `any` type
- `--noImplicitThis`
    Raise an error when you use `this` outside of a class or function with `this` parameter.
- `--strictNullChecks`
    Enable strict null-check mode. `undefined` and `null` are not in the domain of very type.
- `--alwaysStrict`
    Force JavaScript's [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) on all files.

Or use: `--strict` to get all of the above (since TS 2.3)

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Quality options

Other compiler options to improve code quality:
- `--noEmitOnError`
- `--noImplicitReturns`
- `--noUnusedLocals`
- `--noUnusedParameters`
- `--forceConsistentCasingInFileNames`

<!-- .element class="no-list-style-type" -->

---

### All options

All available compiler options can be found here: https://www.typescriptlang.org/docs/handbook/compiler-options.html
