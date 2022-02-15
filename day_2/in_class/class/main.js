// Conitnue from yesterday with control flow
// switch case


let day = new Date().getDay()

let literal_day = new Date().toString()

console.log(day)
console.log(literal_day)

//switch case javascript
switch (day) {
    case 0 :
        console.log('Sunday is Funday.')
        break;
    case 1 :
        console.log('Write code... It\'s Monday.')
        break;
    case 2 :
        console.log("Tacos for everyone.. It's Tuesday.")
        break;
    case 3 :
        console.log("Keep Testing code... It's Wednesday.")
        break;
    case 4 :
        console.log('Write new feature for project, It\'s Thursday.')
        break;
    case 5 :
        console.log('Friday is for Flask debugging..')
        break;
    case 6 :
        console.log('Spend Saturday in the Sun...')
        break;
    default :
        console.log('We don\'t have a case for that.')
        break;
}
//Literal Day
switch (day) {
    case 0 :
        console.log('Sunday is Funday.')
        break;
    case 1 :
        console.log('Write code... It\'s Monday.')
        break;
    case 2 :
        console.log("Tacos for everyone.. It's Tuesday.")
        break;
    case 3 :
        console.log("Keep Testing code... It's Wednesday.")
        break;
    case 4 :
        console.log('Write new feature for project, It\'s Thursday.')
        break;
    case 5 :
        console.log('Friday is for Flask debugging..')
        break;
    case 6 :
        console.log('Spend Saturday in the Sun...')
        break;
    default :
        console.log('We don\'t have a case for that.')
        break;
}

// -- creation of objects in javascripy
// -- simple object in js

let person = {
    name: 'Timothy', 
    age: '25',
    fav_color: 'Purple'
}

//accessing info
console.log(['name']) // bracket notation
console.log(person.fav_color) // dot notation

// -- complex javascript object

let person2 = {
    name: 'Trini',
    age: 72,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Yellow',
    teams: [
        {
            baseball: "Chicago White Sox",
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Sky', 'Chicago Bulls'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: ['Toronto Bluejays', 'Red Sox', 'LA Dodgers', 'Atlanta Braves'],
            basketball: "The Cheetas",
            football: 'LA Rams', 
            soccer: ['Manchester United', 'Liverpool'],
            hockey: 'Colorado Avalanche',
        }
    ]
}
console.log(person2.prog_languages)
console.log(person2.teams[0].hockey)

// -- Javascript object prototype methods -- object literal
console.log(object.keys(person2))

// DONT DO THIS
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// DO THIS
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.values(person2)[i])
}

//list all values from person2 that are arrays//
for(let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        //console log whole list
        console.log(Object.values(person2)[i])
        //console log each item
        Object.values(person2)[i].forEach(element => console.log(element))
    }
}

//creaete an object protype --with es5 method syntax//
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    //a method belonging to the prototype
    this.printInfo = function(color, wheels = 4){
        console.log(`This is a ${this.year}, ${this.make}. ${this.model}
        and it has ${wheels} wheels and the color is ${color}.`)
        return 'Returned Value'
    }
}

//create instance of prototype
let my_car = new Car('Volkswagon', 'Jetta', '2013')

// clal prototype method
my_car.printInfo('Blackity Black')




// javeScript classes es6
class Human{
    constructor(name,age,gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let bobby = new Human('Bobby', 87, 'Female')
console.log(bobby.printInfo())

// Inheritence using JavaScript Classes//

class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender, walking)
        this.walking = walking
    }

    isBabyWalking(){
        if (this.walking == true){
            return `${this.name} is walking!`
        }else{
            return `${this.name} is not walking... yet`
        }
    }
}


// create isntance of baby class
let suzzie = new Baby('Susan', 1, 'Female', true)
console.log(suzzie.printInfo())
console.log(suzzie.isBabyWalking())



//basic examples of callbacks

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

//but what happns if we add a delay to the first functions???
function first_delay(){
    //simulate
    setTimeout(()=> {
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2)
}


//callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework.`)
    callback()
}

//doHomework('JavaScript', ()=>(console.log('Done with homework?')))

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

//we solve this problem above with promises

//===== creating a js promies =====//
const isEvenNumber = num =>{
    return new Promise((resolve, reject) =>{
        num % 2 == 0 ? resolve(true) : reject(false)
    })
}

//using a js promise
isEvenNumber(8)

// happy resover path
.then((result) =>{
    console.log(`Even number: ${result}.`)
})

.catch( (error) =>{
    console.log(`Odd number: ${false}.`)
} )

// write a promise based function that a string and if that string is your name resolve the promise
// if not reject it

const isMyName = myname =>{
    return new Promise((resolve, reject) =>{
        myname == 'Vincent' ? resolve(true) : reject(false)
    })
}

isMyName('Vincent')

.then((result) =>{
    console.log(`My name: ${result}`)
})

.catch((error) =>{
    console.log(`My name: ${false}`)
})


//another promise example with async/await
function increaseSalary(base, increase){
    const newSalary = base + increase;
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

//add salary slowly
function slowSalary(n1, n2){
    return new Promise( resolve => {
        setTimeout( () => resolve(n1+n2), 3000)
    })
}

// function increaseSlowSalary(base, increase){
//     const newSalary = slowSalary(base, increase);
//     console.log(`new salary: ${newSalary}.`)
//     return newSalary
// }

async function increaseSlowSalary(base, increase){
    const newSalary = await slowSalary(base, increase);
    console.log(`new salary: ${newSalary}.`)
    return newSalary
}

increaseSlowSalary(1000,500)

