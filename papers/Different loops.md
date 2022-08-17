## for
For loop creates a loop with three conditions: initialization, condition and increament/ decreament.
```
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```
## forEach
forEach is a JavaScript Array method. It is used to execute a function on each item in an array. Lists, sets support the forEach method.
```
const items = [1, 29, 47];
const copy = [];

items.forEach(function(item) {
    copy.push(item * item);
});
console.log(copy);
```

## for ..in
for..in loop in JavaScript allows us to iterate over all property keys of an object.
```
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}
for (let key in student) {
    console.log(`${key} => ${student[key]}`);
}
```

## for ..of
The for...of creates a loop iterating over iterable object, including: built-in String, Array, array-like objects.
```
const array = ['a', 'b', 'c'];

for (const element of array) {
    console.log(element);
}
```

## while
While creates a loop that is executed while a condition is true. The loop runs while the condition is true.
```
let i = 1,
    n = 5;

while (i <= n) {
    console.log(i);
    i += 1;
}
```
