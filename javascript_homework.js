//========== Exercise #1 ===========//
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

const showFood = () => {
    for(let key in person3){
        //checking if each key has its own value using .hasOwnProperty()
        if (person3.hasOwnProperty(key)){
            console.log(`${key}: ${person3[key]}`)  
        }   
    }

    for(const [key, value] of Object.entries(person3)){
        console.log(`${key}: ${value}`)
    }

}


showFood()

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(fullName, age){
        this.fullName = fullName
        this.age = age
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.fullName} is ${this.age} years old.`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = (inc) => {
        this.age += inc;
    }
}

const person4 = new Person('Kasey Kalka', 25)
const person5 = new Person('John Smith', 75)
console.log(person4.printInfo())
console.log(person5.printInfo())

person4.addAge(3)
console.log(person4.printInfo())

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const ergastData = async () => {
    try {
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log('Could not find path.')
    }
}

ergastData()


// **********************CODE WARS PROBLEMS**********************
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
    let aString = num.toString()
    return aString
  }

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
    if(Number.isInteger(Math.sqrt(n))){
      return true;
    } else {
      return false;
    }
  }