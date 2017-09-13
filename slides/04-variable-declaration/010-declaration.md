## Variable declaration

Variable use may be before declaration

```javascript
x = 3; 	  // bad practice
var x;
```

Variable may be declared twice

```javascript
var y = 3;
var y = 5;
```

Variables are *function scoped*

```javascript
for (var i = 0; i <10; i++) {
}
console.log(i); // => 10
```

---

### Block scoped variables

![es6](resources/es6.png)<!-- .element class="emblem"  -->

Since ES 6 we can use block scoped variables with `let`

```javascript
let w = 3;
```

Use before declaration now breaks <!-- .element class="fragment" data-fragment-index="1" -->

```javascript
x = 3; // => ReferenceError: x is not defined
let x;
```
<!-- .element class="fragment" data-fragment-index="1" -->

No redeclaration<!-- .element class="fragment" data-fragment-index="2" -->

```javascript
var y = 3;
let y = 5; // => SyntaxError: Identifier 'y' has already been declared
```
<!-- .element class="fragment" data-fragment-index="2" -->

Limits scope to current block <!-- .element class="fragment" data-fragment-index="3" -->

```javascript
for (let i = 0; i <10; i++) {
}
console.log(i); // => ReferenceError: i is not defined
```
<!-- .element class="fragment" data-fragment-index="3" -->

---

### Constant declarations

![es6](resources/es6.png)<!-- .element class="emblem"  -->

Define a block scoped variable which cannot be reassigned using `const`
* Values cannot be changed once set
* Must be initialized on declaration

```javascript
console.log(pi); // => ReferenceError: pi is not defined

const pi = 3.14;
pi = pi + 1;
// TypeError: Assignment to constant variable.

const a;
// SyntaxError: Missing initializer in const declaration

const person = { name: 'Nico' };
person.age = 30;
// Allowed, reference types are still mutable
```

---

### Rule of thumb

1. Try to use a `const`
1. If needs to be mutable: use `let`
1. NEVER use `var`
