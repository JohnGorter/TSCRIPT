## Type: `undefined` and `null`

* The `undefined` type only has a singleton value: `undefined`.
* The `null` type only has a singleton value: `null`.
* `undefined` and `null` are sub-types of every other type.

```typescript
let a = 3;
a = null;      // => OK
a = undefined; // => OK
```

* Disable the sub-typing using `--strictNullChecks` compiler option

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
let a = 3;
a = null;
// => error: Type 'null' is not assignable to type 'number'
a = undefined;
// => error: Type 'undefined' is not assignable to type 'number'
```

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Type: `void`

`void` is a type that has 2 values: `undefined` and `null`

```typescript
function info(message: string): void{
    console.log(message);
}

let a = info('');
a = null;      // => OK
a = undefined; // => OK
```

