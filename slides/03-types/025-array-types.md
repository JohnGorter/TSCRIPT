## Array types

Arrays work like ES arrays.

```typescript
const list = [1, 2, 3];
let numbers: Array<number>;
let numbers2: number[];
numbers = numbers2 = list
```

... but have a _generic type_. More on generics later.

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Tuples

Like an array, but with different kind of known types

```typescript
let person: [string, number];
person = ["Henk", 20]; // => OK
person = [10, "Henk"]; // => Syntax error
// Type `[number, string]` is not assignable to type `[string, number]`.
```

Very useful in combination with type inference <!-- .element class="fragment" data-fragment-index="1" -->

```typescript
console.log(person[0].substr(1)); // OK
console.log(person[1].substr(1)); // Error, `number` does not have `substr`
```
<!-- .element class="fragment" data-fragment-index="1" -->

You can even go beyond the known indices. <!-- .element class="fragment" data-fragment-index="2" -->

```typescript
const maybeNameOrAge = person[3]; // => inferred type: `string | number`
person[3] = "Frank"; // => OK `string` is a `string | number`
console.log(person[5].toString());
// => OK, `string` and `number` both have `toString`
person[6] = true; // => Syntax error, `boolean` isn't `string | number`
```
<!-- .element class="fragment" data-fragment-index="2" -->

**Question**: When would you use this?

<!-- .element class="fragment" data-fragment-index="4" -->
