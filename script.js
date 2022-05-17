// //Problem set 1
//  let person = {
//    name: "Marcella",
//    age: 25,
//    county: "Texas"
//  }

//  function logData() {
//    console.log(person.name + " is " + person.age + " and lives in " + person.county + ".")
//  }

// logData()

// Problem set 2
//Prob 2 Instructions:
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
// let age = 15

// if (age < 6) {
//   console.log("Free")
// } else if (age < 17) {
//   console.log("Child Discount")
// } else if(age < 26) {
//   console.log("Student Discount")
// } else if (age < 66) {
//   console.log("Full Price")
// } else if (age > 66) {
//   console.log("Senior Citizen Discount")
// }

// Problem set 3
// let bigOleMountains = ["Everest","K2","Kangchenjunga","Lhotse","Makalu"]

// function printMountains(){
//   console.log("The five largest mountains in the world: ")
  
//   for (let i = 0; i < bigOleMountains.length; i += 1) {
//     console.log( bigOleMountains[ i ] )
//   }
// }
// printMountains() //Outputs the solutions to problem 3

//Problem set 4
// let bigOleMountains = ["Hobbit Hill","K2","Kangchenjunga","Lhotse","Sandia Peak"]
// bigOleMountains.pop()
// bigOleMountains.push("Makalu")
// bigOleMountains.shift()
// bigOleMountains.unshift("Everest")

// console.log(bigOleMountains)


//Problem set 5
// let lycanthropy = true
// let fullMoon = false

// if (lycanthropy === true && fullMoon === true) {
//   wereWolves()
// } else if (lycanthropy === false && fullMoon === false) {
//   safeNight()
// }

// function wereWolves() {
//   console.log("Werewolves are on the loose!")
// }

// function safeNight() {
//   console.log("It's safe to be out at night.")
// }

//Problem set 6

function randomDinner() {
  // 0, 1, 2 ,3 ,4 ,5 
  let dinner = ["chicken curry", "pea soup", "PB&J", "Cheesy Beef on Bun", "stir fry", "dumplings"]

  // i is equal to a random number between 0 and 5
  let i = Math.floor(Math.random() * dinner.length)
 
  return dinner[i]
}

console.log(randomDinner())

