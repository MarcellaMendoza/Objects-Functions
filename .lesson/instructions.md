# Instructions  

Problem Set 1:

1. Create a person object that contains three keys: name, age, and county.
Use yourself as an example for the name, age, and country values.

2. Create a function, logData(), that uses the person object to create a
string in the following format: 

> "Sue is 35 years old and lives in Texas"

3. Call the logData() function to verify that it works.

---

Problem Set 2:

```
let age = 15
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount
```

Create a conditional statement (if/else/else if) that logs out the discount the passengers receive based their age.

---

Problem Set 3:

```
let bigOleMountains = ["Everest","K2","Kangchenjunga","Lhotse","Makalu"]

/*
Use a for loop to log the following to the console:

The five largest mountains in the world:
Everest
K2
Kangchenjunga
Lhotse
Makalu

*/
```

---

Problem Set 4:

`let bigOleMountains = ["Hobbit Hill","K2","Kangchenjunga","Lhotse","Sandia Peak"]`


 Replace "Hobbit Hill" with Everest and "Sandia Peak" with Makalu.
 Use these methods:
 push()
 pop()
 unshift()
 shift()
 It's up to you to figure out push(), unshift(), and shift().

*HINT: push() adds to the an array:*
- let animals = ["pigs", "goats", "sheep"]
- let count = animals.push("cows")
        
[Using unshift]  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

[Using shift] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

---
Problem Set 5:
```
let lycanthropy = true
let fullMoon = false
```

1. If lycanthropy is true and there's a full moon outside, log this to the console:
"Werewolves are on the loose!"
2. Otherwise, log "It's safe to be out at night."

---

Problem Set 6:

`let dinner = ["chicken curry", "pea soup", "PB&J", "Cheesy Beef on Bun", "stir fry", "dumplings"]`

Make a function that returns a random dinner meal from the array.