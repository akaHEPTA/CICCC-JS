// Data types
// a. primitive types (value types)
// - number
// - string
// - boolean
// - null (shows you object but actually primitive type)
// - undefined
// - (symbol)
//
// b. objects {}, arrays [], functions
const x = 42
const y = '42'
console.log(x == y)
console.log(x === y)

// == (Coercion, force), === (type, value)
// Explicit Coercion - String(X)
// Implicit Coercion - x + ''

// falsy values
// undefined, null, flase, 0, NaN, ""
//
// Truthy values
// [], {}, everything else

console.log(typeof x)
console.log(typeof null) // object
console.log(typeof undefined)