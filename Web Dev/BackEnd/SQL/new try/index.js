const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Saps@2006',
  database: 'siddhesh'
});

connection.connect(err =>{
  if(err) throw err;
  console.log(err)

})

// connection.query("SHOW TABLES",(err,result)=>{
// if(err){
//   console.log(err);
// }
//   console.log(result)
// } 
// )

commond = CREATE TABLE(
  ID VARCHAR(50)
)

connection.end()  //end connenction

const createRandomUser = ()=>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

console.log(createRandomUser())