# What is Hoisting
It is the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.


## Function Hoisting
One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
```
catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}
```
## Variable Hoisting
Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.

Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

```
console.log(num);
var num;
num = 6;
console.log(num);
```
