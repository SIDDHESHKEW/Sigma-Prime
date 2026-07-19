// const express = require("express");
// const app = express();
// const { faker } = require("@faker-js/faker");
// const mysql = require("mysql2")

// function getRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }

// console.log(getRandomUser())

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// // Create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'app1',
//   password: 'Saps@2006'
// });


// q = "SHOW DATABASES"

//   connection.query(q,(err,results) =>{
//     try{
//       if(err) throw "An error occured "
//       console.log(results)
//     }catch{
//       console.log("Error -",err)
//     }
//   })

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express")
const app = express()
const { faker } = require("@faker-js/faker")
const mysql = require("mysql2")

connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  database: "app1",
  password: "Saps@2006"
}
)

// q = "INSERT INTO USER (id,username,email,password) VALUES (?,?,?,?)"               A
// users = ["a","sidd","dsidd@gmail.com","adsd@3322"];

// connection.query(q,users,(err,results) =>{
//   try{                                                             A
//     console.log(results)
//   }catch(err){
//     console.log("Error -",err)
//   }
// })

let q = "INSERT INTO USER (id,username,email,password) VALUES ?"
users1 =[ ["a1","sidd1","dsidd@gmail.com1","adsd@33221"]
,["a12","sidd12","dsidd@gmail.com12","adsd@332212"] ];

connection.query(q,[users1],(err,results) =>{
  try{
    console.log(results)
  }catch(err){
    console.log("Error -",err)
  }
  connection.end()
})