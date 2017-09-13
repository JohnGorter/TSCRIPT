## Type inference

Your variable declaration determines the inferred type.

```typescript
let a = 42; // => type number
const b = 42; // => type 42 (literal type)
```

**Question:** Why the difference?

<!-- .element class="fragment" data-fragment-index="0" -->

You can still overrule it.

<!-- .element class="fragment" data-fragment-index="1" -->

```typescript
const c: number = 42;
```

<!-- .element class="fragment" data-fragment-index="1" -->

More on type inference in chapter 10

<!-- .element class="fragment" data-fragment-index="1" -->
