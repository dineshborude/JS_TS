# JavaScript Operators and Conditional Statements

## Arithmetic Operators

| Operator | Description | Example |
| --- | --- | --- |
| `+` | Addition | `5 + 5 = 10` |
| `-` | Subtraction | `10 - 5 = 5` |
| `*` | Multiplication | `5 * 5 = 25` |
| `/` | Division | `25 / 5 = 5` |
| `%` | Modulus (Remainder) | `25 % 5 = 0` |
| `**` | Exponentiation | `5 ** 2 = 25` |

## Comparison Operators

| Operator | Description | Example |
| --- | --- | --- |
| `==` | Equal | `5 == 5 = true` |
| `!=` | Not Equal | `5 != 5 = false` |
| `===` | Strict Equal | `5 === 5 = true` |
| `!==` | Strict Not Equal | `5 !== 5 = false` |
| `<` | Less Than | `5 < 5 = false` |
| `>` | Greater Than | `5 > 5 = false` |
| `<=` | Less Than or Equal | `5 <= 5 = true` |
| `>=` | Greater Than or Equal | `5 >= 5 = true` |

## Logical Operators

| Operator | Description | Example |
| --- | --- | --- |
| `&&` | Logical And | `true && true = true` |
| `||` | Logical Or | `true || false = true` |
| `!` | Logical Not | `!true = false` |

## Assignment Operators

| Operator | Description | Example |
| --- | --- | --- |
| `=` | Assignment | `x = 5` |
| `+=` | Addition Assignment | `x += 5 = 10` |
| `-=` | Subtraction Assignment | `x -= 5 = 5` |
| `*=` | Multiplication Assignment | `x *= 5 = 25` |
| `/=` | Division Assignment | `x /= 5 = 5` |
| `%=` | Modulus Assignment | `x %= 5 = 0` |
| `**=` | Exponentiation Assignment | `x **= 2 = 25` |

## Ternary Operator (Conditional Operator)

The ternary operator is a shorthand way of writing a simple if-else statement.

Example:

```
// Ternary Operator
// Syntax: condition ? trueValue : falseValue
// Example
let num = 5;
let result = (num > 10) ? 'Greater than 10' : 'Less than or equal to 10';
console.log(result); // Less than or equal to 10

