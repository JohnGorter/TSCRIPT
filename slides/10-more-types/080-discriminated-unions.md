## Discriminated Unions

Combine literal types, union types, type guards and type aliases.

```typescript
interface Identifier {
    type: 'Identifier';
    name: string;
}
interface Literal {
    type: 'Literal';
    value: string | boolean | number | null;
    raw: string;
}
type Node = Identifier | Literal;

const node: Node = /**/;
if (node.type === 'Literal') { // => OK, all unified types have a `type`
    node// => type: Literal
} else {
    node// => type: Identifier
}
```

A bit complicated, but extremely powerful

<!-- .element class="fragment" data-fragment-index="0" -->

---

### Discriminate using an object

You can even discriminate using a readonly object

```typescript
const syntax: {
    readonly literal: 'Literal';
    readonly identifier: 'Identifier';
}  = {
    literal: 'Literal',
    identifier: 'Identifier'
}

if (node.type === syntax.literal) {
    node// => type: Literal
    node.value // Save to use
} else {
    node// => type: Identifier
}
```
