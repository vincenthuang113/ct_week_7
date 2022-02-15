// Basics of Javascript

/* 
    Muiltiline Comment in JavaScript
    -- Variale Declaration in JavaScript
    Primative Type: strings, integers, boolean, floats, arrys,
    and objects {python dicitonary}
    Loops in JavaScript


*/

// String Variable 
var first_name = "Vincent"

// Display our value to the JS console
console.log(first_name)

// Integer Variable
var some_number = 31

//display our integer
console.log(some_number)

//float variable
var some_float = 3.14

//display float
console.log(some_float)

//array variable
var some_array = [1,2,3,4]
console.log(some_array)

//Object Variable 
var some_object = {'test': 'Please test me!'}

//display object
console.log(some_object)

// JAVASCRIPT HOISTING
console.log(some_randome_variable)
var some_randome_variable = 'random string'
console.log(some_randome_variable)

// use 'let' or 'const' is generally a better way to assign variables
//example with console.log()

// console.log(full_name)
let full_name = first_name + ' Smith'
console.log(full_name)

const super_hero = 'The Hulk'
console.log(super_hero)
//cannot redefine with const
// const super_hero = 'Iron Man'
// console.log(super_hero)

// Playing with let
let nba_goat = 'MJ'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)
// can reassign but not redeclare
// when reassign, dont need 'let'

/* 
    Basic Math Operations in JS
*/

//addition
let sum = 5 + 5 //let sum += 5
console.log(sum)
// subtraction
let diff = 5 - 5 //let diff -= 5
console.log(diff)
//multiplication
let product = 5 *5 //let product *=5
console.log(product)
//division
let quotient = 5/5 //let quotient /=5
console.log(quotient)
//exponential 
let squared = 5 ** 2 //let squared **= 2
console.log(squared)

//finding the floor of a decimal
let findFloor = Math.floor(30.8)
console.log(findFloor)
//return 30
let findCeil = Math.ceil(30.8)
console.log(findCeil)
//return 40

//Mind Bender some_float = 3.14
let crazy_stuff = some_float + '4'
//return 3.144

let crazy_stuff2 = some_float + parseFloat('4')
// return 7.14

/* 
    ==== JAVASCRIPT FUNCTIONS ====
*/
function addNums(){
    let num = 4
    let num2 = 5

    return num + num2
}
//calling the function
console.log(addNums())

//variable named funciton with parameters
let addNums2 = function(num, num2){
    return num + num2
}

//calling our vraible named function
console.log(addNums2(4,6))
//console.log is just to print it, you can call the function without it

//alternatively
function addNum3(num, num2){
    return num*num2
}

console.log(addNum3(4,8))

// ES5 Arrow Function in JavaScript
let multiplyNums = () => {
    let num = 4
    let num2 = 2

    return num*num2
}

console.log(multiplyNums)

let cubed = num => {
    return num **3
}

console.log(cubed(4))

let cubed2 = (num) => {
    return num**3
}

console.log(cubed2(5))

let multiplyNums2 = (a, b) => {
    return a*b
}

console.log(multiplyNums2(6,7))

//JavaScript Closure
//Self-Invoking Functions
/* 
    console.log in the below example DOES NOT have to be provided
    --- we will use this for an easier display of the output
*/

console.log((function(name){
    let hellow = 'Hello World' + name
    return hello
})('Vincent'))

// JavaScript Control Flow 
// If Statements
function determineAge(age){
    if(age<18){
        return 'minor'
    }else if(age>= 18 && age <= 65){
        return 'Adult but not yet retired :('
    }else {
        return 'Elder hopefully retired'
    }
}

console.log(detrermineAge(17))

function determineAge2(age){
    return (age <18) ? 'Minor' : (age >= 18 && age <= 65)
    ? 'Adult but not retired :(' : 'Elder, hopefully retired'
}

console.log(determineAge2(43))

function determineEvolution(level){
    return (level < 16) ? 'Charmander': (level >= 16 && level <= 40)
    ? 'Charsomething' : 'Charizard'
}

console.log(determineEvolution(8))
console.log(determineEvolution(18))
console.log(determineEvolution(70))

//for loop
// incrementing
function coutByOne(){
    for (let i = 0; i <20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

//decrementing
function decreaseByOne(){
    for (let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decrementing has ceased'
}

console.log(decreaseByOne())

//whiel loop
function countWithDoWhile(){
    let i = 0
    let text = '';

    do{
        text += 'this number is ... ${i} \n'
    }
    while (i < 10)
    return text
}

console.log(countWithDoWhile())

/* 
    destruction of an array
*/
let groupOfNames = ['Brock', 'Ash', 'Misty', 'Gary', 'Alphonso']

let brock, misty, ash
[brock, misty, ash, ...others] = groupOfNames
//block = groupOfNames[0]
//misty = groupOfNames[1]
//ash = groupOfNames [2]
console.log(brock, misty, ash, ...others)

function showAllNames(names){
    for (i = 0; i < names.length; i++){
        console.log(names[i])
    }
    return 'No more names to show'
}
showAllNames(groupOfNames)

//looping with for each
groupOfNames.forEach(element => console.log(element))

//JavaScript Array Method: Array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

/* JavaScript ARRAY METHODS: .map() .filter() .reduce() */

// .map()
let b_names = groupOfNames.map(i =>{
    if (i[0] == 'A'){
        return i
    }else{
        return false
    }
})

//return (I[o] == 'A') ? I : false

console.log(b_names)

// .reduce()
const nums = [2, 4, 6, 8, 10]
let nums_reduce = nums.reduce( (accumulator, current_num) =>{
    return accumulator + current_num
})
console.log(nums_reduce)

// .filter()
let long_names = groupOfNames.filter(element => element.length > 4)
console.log(long_names)

//array methods with string values: .join() .slice() .search() .splice() .join()
// .join()
console.log(groupOfNames.join(', '))
console.log(typeof(groupOfNames.join(', ')))

//.slice()
console.log(groupOfNames.slice(0,3))

//.splice()
let new_rival = groupOfNames.splice(3, 1, 'Ryan')
console.log(`This was removed based on our splice: ${new_rival}`)
console.log(groupOfNames)

//.search()
console.log(groupOfNames[0].search('L')) // index 0
