````markdown
# JavaScript Foundations Notes

---

## 📘 Data Types in JavaScript (with Examples)

JavaScript has two broad categories of data types:

### Primitive Data Types
> Immutable and stored by value

- `String`
- `Number`
- `Boolean`
- `null`
- `undefined`
- `BigInt`
- `Symbol`

```js
let name = "Dinesh";     // String
let age = 27;            // Number
let isQA = true;         // Boolean
let nothing = null;      // null
let notDefined;          // undefined
let big = 123n;          // BigInt
let uniqueId = Symbol(); // Symbol
````

---

###  Non-Primitive Data Types

> Mutable and stored by reference

* `Object`
* `Array`
* `Function`

```js
let obj = { name: "Seema", role: "Tester" };  // Object
let arr = [1, 2, 3];                          // Array
let greet = function() { return "Hi!"; };    // Function
```

---

## Primitive vs Non-Primitive

| Feature     | Primitive           | Non-Primitive    |
| ----------- | ------------------- | ---------------- |
| Stored by   | Value               | Reference        |
| Mutable     | No                  | Yes              |
| Type of     | string, number etc. | object, function |
| Comparisons | By value            | By reference     |

```js
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

let obj1 = { lang: "JS" };
let obj2 = obj1;
obj2.lang = "JavaScript";
console.log(obj1.lang); // JavaScript (shared reference)
```

---

##  When to Use: `let` vs `var` vs `const`

| Keyword | Scope    | Reassign? | Redeclare? | Hoisted?      |
| ------- | -------- | --------- | ---------- | ------------- |
| `var`   | Function | ✅         | ✅          | ✅ (undefined) |
| `let`   | Block    | ✅         | ❌          | ✅ (TDZ\*)     |
| `const` | Block    | ❌         | ❌          | ✅ (TDZ\*)     |

> Best Practice:

* Use `const` by default
* Use `let` if the variable needs to be reassigned
* Avoid `var` unless dealing with legacy code

---

##  What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of the current scope (before code execution).

```js
console.log(a); // undefined
var a = 10;

// With let/const (gives ReferenceError)
console.log(b); // ❌ ReferenceError
let b = 20;
```

> ❗ Only declarations are hoisted, not initializations.

---

## Scope in JavaScript

### Global Scope

* Accessible anywhere in the script

```js
let globalVar = "I’m global";
```

### Block Scope

* Variables declared with `let` and `const` are only accessible inside the block `{}`

```js
{
  let blockVar = "Inside block";
  console.log(blockVar); // 
}
console.log(blockVar); //  ReferenceError
```

### Function Scope

* `var` is scoped to the entire function

```js
function test() {
  var funVar = "Inside function";
  console.log(funVar); // ✅
}
console.log(funVar); //  ReferenceError
```

---

## Summary: Types of Scope

1. **Global Scope**
2. **Function Scope** (via `var`)
3. **Block Scope** (via `let` / `const`)
4. **Lexical Scope** — Inner functions have access to outer function's variables

```js
function outer() {
  let outerVar = "visible";
  function inner() {
    console.log(outerVar); // ✅accessible due to lexical scope
  }
  inner();
}
```

---


