# Pass by Value and Pass by Reference
In pass by value, the value of a
function parameter is copied to another location
of the memory.When accessing or modifying the variable within the
function,
it accesses only the copy.Thus, there is no effect on the original value.
while the memory address is passed to that
function is pass by reference.


## Pass by Value
```
function passByValue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value
        function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value
        Function -> a = ${a} b = ${b}`);

passByValue(a, b);

console.log(`After calling Pass by value
       Function -> a =${a} b = ${b}`);
```
## Pass by Reference
```
function PassByReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;

    console.log(`Inside Pass By Reference
        Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
    a: 10,
    b: 20

}
console.log(`Before calling Pass By Reference
    Function -> a = ${obj.a} b = ${obj.b}`);

PassByReference(obj)

console.log(`After calling Pass By Reference
    Function -> a = ${obj.a} b = ${obj.b}`);
```
