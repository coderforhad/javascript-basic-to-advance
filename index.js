//1. join()

// const nameArr = ["jony", "bony", "tony"]

// console.log(nameArr.join("|"));

//2. concate()

// const nameArr1 = ["jony", "bony", "tony"]
// const nameArr2 = ["poly", "rubi", "tania"]

// console.log(nameArr1.concat(nameArr2));


//3. splice() //changes original array // overwrite index with new elements
// const nameArr1 = ["jony", "bony", "tony"]

// console.log(nameArr1.splice(0, 2));
// console.log(nameArr1);


//4. slice() //not changes original array
// const nameArr1 = ["jony", "bony", "tony"]

// console.log(nameArr1.slice(0, 2));
// console.log(nameArr1.splice(0, 1, "Forhad"));

// 5. indexOf()
// console.log(nameArr1.indexOf("tony"));

//6. at()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at("2"))

//7. copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(1, 0))

//8. copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// console.log(f)

//9 forEach()

// const numbers = [45, 10, 20, 30]

// const myFunction = (value, index, array) => {
//      value > 20 && console.log(value)
// }

// numbers.forEach(myFunction)

// forEach() method return undefined. so you do anything in function and print value here but can not return anything.
// so its not return any new array, like map, filter. 


//10 map()
// const numbers = [45, 10, 20, 30]

// const myFunction = (value, index, array) => {
//     return value * 2
// }

// const newNumber = numbers.map(myFunction)

// console.log(newNumber)

//11 every() some is opposite of every
// const numbers = [45, 10, 20, 30]

// const myFunction = (value, index, array) => {
//     return value > 20
// }

// const newNumber = numbers.every(myFunction)

// console.log(newNumber)

// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// Boolean	true if all elements pass the test, otherwise false.


// console.log(Array.from("12"))

// console.log(Math.max(8, 9, 7, 2, 10))

//Reducer()

// const users = [
//     {firstName: "akshay", lastName: "saini", age: 26}, 
//     {firstName: "donald", lastName: "trump", age: 80}, 
//     {firstName: "elon", lastName: "musk", age: 50}, 
//     {firstName: "deepika", lastName: "padukon", age: 26}, 
// ]

// const output = users.reduce((a, b)=>{
//     if(b.age < 30){
//         a.push(b.firstName)
//     }
//     return a
// }, [])

// const output = users.reduce((a, b)=>{
//     if(a[b.age]){
//         ++ a[b.age]
//     }
//     else{
//         a[b.age] = 1
//     }
//     return a
// }, {})


// const arr = [10, 5, 12, 20, 55, 100]

// console.log(Math.max.apply(null, arr))

// console.log(arr.sort((a, b)=> b-a)[0])
// console.log(arr.sort((a, b)=> b-a)[1])

// const output = arr.reduce((a, b) => {
//     if(b > a.largest ){
//         a.secondLargest = a.largest;
//         a.largest = b;
//     }else if(b > a.secondLargest && b !== a.largest){
//         a.secondLargest = b
//     }
//     return a
// }, { largest: -Infinity, secondLargest: -Infinity })

// console.log(output)

// 1. Max and Min Number
// 2. Largest and Second Largest Number
// 3. Even and Odd 
// 4. Fibonacci number
// 5. Prime number
// 6. Factorial number


//Normal even odd
// function evenOdd(n) {
//     if(n > 0 ){
//     if(n % 2 === 0){
//         return "Number is even"
//     }else{
//         return "Number is Odd"
//     }}else{
//         return "Give the positive number"
//     }
// }

// console.log(evenOdd(3))

//From Array even odd

// const number = [2, 8, 7, 9, 3]

// console.log("Even", number.filter((x)=> x % 2 === 0 ? x : ''))
// console.log("Even", number.filter((x)=> x % 2 !== 0 ? x : ''))

// Fibonacci number

// function fibn(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib;
// }

// console.log(fibn(5).toString())


// Factorial number

// function fibn(n) {
//     let fib = 1;
//     for (let i = 2; i <= n; i++) {
//         fib = fib * i
//     }
//     return fib;
// }

// console.log(fibn(6))


// Prime number

// function isPrime(n) {
//     if (n < 2) return `${n} is not prime`
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return `${n} is not prime`
//     }
//     return `${n} is prime` 
// }

// console.log(isPrime(12))

// const findPrime = [2, 10, 15, 17, 11];
// console.log(findPrime.filter(x => {
//   if (x <= 1) return false;
//   if (x <= 3) return true;

//   if (x % 2 === 0 || x % 3 === 0) return false;

//   for (let i = 5; i * i <= x; i += 6) {
//     if (x % i === 0 || x % (i + 2) === 0) return false;
//   }

//   return true;
// }));

// function isPrime(n) {
//     if (n < 2) return `${n} is not prime`; 
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n % i ===0 ) return `${n} is not prime`;
//     }
//     return `${n} is prime`;
// }

// console.log(isPrime(17))

// function isPrime(n) {
//     if (n < 2) return;
//     for (let i = 2; i <= n; i++) {
//         let flag = 0;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 flag = 1
//                 break
//             };
//         }
//         if (flag == 0) console.log(i)
//     }

// }

// console.log(isPrime(50))


//Linear Search

const array = [1, 2, 52, 30, 12, 15, 22];

const team = [
    { id: 2, name: "Forhad" },
    { id: 5, name: "Asif" },
    { id: 3, name: "Rahman" },
    { id: 7, name: "Atif" },
]


// const linearSearch = (array, checkArray) => {
//     for (let i = 0; i < array.length; i++) {
//         if (checkArray(array[i])) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(team, (item)=> item.name === "Atif"))

//Binary Search

const binarySearch = (array, key) => {
    let lowest = 0;
    let height = array.length - 1;

    while (lowest <= height) {
        let mid = Math.floor((lowest + height) / 2)
        if (array[mid] === key) return mid
        if (array[mid] < key) lowest = mid + 1;
        if (array[mid] > key) height = mid - 1;
    }

    return -1
}
array.sort((a, b) => { return a - b })
console.log(array)
console.log(binarySearch(array, 22))
