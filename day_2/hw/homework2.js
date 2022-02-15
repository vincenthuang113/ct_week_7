//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        //console log whole list
        console.log(Object.values(person3)[i])
        //console log each item
        Object.values(person3)[i].forEach(element => console.log(element))
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = (name, age) =>{
        console.log(`Name: ${this.name}, Current age: ${this.age}`)
    this.addAge = () =>{
        this.age = this.age + 1
        console.log(`Name: ${this.name}, Age: ${this.age}`)
        return 'You\'re one year older now!'
    }
    }
}

let vince = new Person('Vincent', 24)
console.log(vince.printInfo())
console.log(vince.addAge())
console.log(vince.addAge())
console.log(vince.addAge())

let vin = new Person('Vince', 55)
console.log(vin.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const lengthCheck = a_string =>{
    return new Promise((resolve, reject) =>{
        a_string.length > 10 ? resolve(true) : reject(false)
    })
}

lengthCheck('jash')

.then((result) =>{
    console.log(`Big Word`)
})

.catch( (error) =>{
    console.log(`Small Number`)
} )

