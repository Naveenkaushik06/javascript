# Basics

## Array.pop
The pop() method removes(pops) the last element of an array.
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();
console.log(fruits);
```
## Array.push
 The push() method adds new items to the end of an array.
```
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit);
fruit.push("Kiwi");
console.log(fruit);
```
## Array.concat
The concat() method concatenates two or more arrays and returns a new array.
```
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);
```
## Array.slice
The slice() method returns selected elements in an array, as a new array.
```
const Fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = Fruits.slice(1, 3);
console.log(citrus);
```

## Array.splice
The splice() method adds and/or removes array elements i.e overwrite the array.
```
const FRUITS = ["Banana", "Orange", "Apple", "Mango"];
FRUITS.splice(2, 0, "Lemon", "Kiwi");
console.log(FRUITS);
```
## Array.join
The join() method returns an array as a string, it does not change the original array.
```
const phal = ["Banana", "Orange", "Apple", "Mango"];
let text = phal.join();
console.log(phal);
```
## Array.flat
It is process of reducing the number of dimensions of an array to a lower number.
```
const array1 = [0, 1, 2, [3, 4]];
console.log(array1.flat());

console.log(array2.flat(2));
```
# Finding:
## Array.find
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array elements.
```
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}
```

## Array.indexOf
The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.
```
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
```
## Array.includes
The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Banana", 3);
```
## Array.findIndex
The findIndex() method executes a function for each array element.

The findIndex() method returns the index of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.
```
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
```
# Higher Order Function
## Array.forEach
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.
```
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
```
## Array.filter
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
```
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```
## Array.map
map() creates a new array from calling a function for every array element.

map() calls a function once for each element in an array.

map() does not execute the function for empty elements.

map() does not change the original array.
```
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
```
## Array.reduce
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
```
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
```
## Array.sort
The sort() sorts the elements of an array.

The sort() overwrites the original array.

The sort() sorts the elements as strings in alphabetical and ascending order.
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

# Advance:
## Array methods chaining
```
const vehicles = [
  { type: 'car', brand: 'Tesla', color: 'red', price: 50000 },
  { type: 'car', brand: 'Toyota', color: 'blue', price: 20000 },
  { type: 'truck', brand: 'Ford', color: 'green', price: 40000 },
  { type: 'SUV', brand: 'Nissan', color: 'beige', price: 35000 },
  { type: 'car', brand: 'Tesla', color: 'gray', price: 80000 }
]
```
1. Filter vehicles by type car
2. Filter cars by prices higher than $20,000
3. Sort cars from least to greatest
4. Print out each car and its corresponding price
```
vehicles
  .filter(vehicle => vehicle.type === 'car' && vehicle.price > 20000)
  .sort((vehicle1, vehicle2) => vehicle1.price - vehicle2.price)
  .map(vehicle =>
    console.log(
      `${vehicle.color} ${vehicle.brand} ${
        vehicle.type
      } is $${vehicle.price.toFixed(2)}`
    )
  )
```
