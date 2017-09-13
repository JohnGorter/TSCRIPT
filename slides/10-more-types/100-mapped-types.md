## Mapped types

Let's say your building a library

```typescript
interface Config {
    concurrency: number;
    path: string;
}

class MyLib {
    constructor(private config: Config) { }
}
```

... but all config options are optional

<!-- .element class="fragment" data-fragment-index="0" -->

```typescript
interface OptionalConfig {
    concurrency?: number;
    path?: string;
}
```

<!-- .element class="fragment" data-fragment-index="0" -->

... can't we do better?

<!-- .element class="fragment" data-fragment-index="1" -->

---

### Map optional types

We can use a mapped type

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};

interface Config {
    concurrency: number;
    path: string;
}

class MyLib {
    constructor(private config: Partial<Config>) { }
}
```

`Partial<T>` is one of the [mapped types coming with TypeScript](https://github.com/Microsoft/TypeScript/blob/0a535f0bf7193741e6b4acf5b7dfea88e2d4beca/lib/lib.d.ts#L1379-L1405) <!-- .element target="_blank" -->

More on mapped types: [https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types](https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types) <!-- .element target="_blank" -->


