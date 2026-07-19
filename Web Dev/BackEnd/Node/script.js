// for(let i = 1;i<6;i++){
//     console.log(i,"Ram")
// }

// console.log("Out of the loop")



//               Process

// let args = process.argv

// for(let i = 2;i<args.length;i++){
//     console.log("Hello  to",args[i])
// }


//           module.exports and require


// let requirement = require("./demo")
// console.log(requirement)
// console.log(requirement.sum(54,22))


// 2

// let fruits = require("./fruits")

// console.log(fruits)


// 3
import {sum} from "./demo.js"

console.log(sum(5,4))