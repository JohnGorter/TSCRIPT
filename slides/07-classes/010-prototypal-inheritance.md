## Prototypal inheritance

* ES5 supports something called prototypal inheritance

```javascript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return this.x + ", " + this.y;
    };
    return Point;
}());
var ColoredPoint = (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.color = color;
        return _this;
    }
    ColoredPoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " in " + this.color;
    };
    return ColoredPoint;
}(Point));
```

<!-- .element class="fragment" data-fragment-index="0" -->

Let's never do that again, please!

<!-- .element class="fragment" data-fragment-index="1" -->

---

## Classes

![es6](resources/es6.png) <!-- .element class="emblem" -->

Since ES6 we can use classes

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() { return `${this.x}, ${this.y}`; }
}
class ColoredPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${super.toString()} in ${this.color}`;
    }
}
```

---

## ES6 classes

![es6](resources/es6.png) <!-- .element class="emblem" -->

ES6 classes are a big improvement!

* Looks like classes in C# and Java
* Required to use `new` to call the constructor function
* Inheritance is as simple as `extends`
* You can have `static` members
* Support for properties (with `get` and `set`)

But still missing some functionality. <!-- .element class="fragment" data-fragment-index="0" -->

* No `abstract` classes
* Everything is `public`
* No static types (of course)

<!-- .element class="fragment" data-fragment-index="0" -->


