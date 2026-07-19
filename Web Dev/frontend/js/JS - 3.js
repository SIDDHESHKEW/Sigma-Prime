// strings are immutable in nature, once created no changes could be done in it, if changed then new sting is created

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  string methods  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let str = "   hey!   ";
// let namee = "Siddhesh Kewate";

// console.log(str.trim());

// console.log(namee.toUpperCase());
// console.log(namee.toLowerCase());

// console.log(namee.indexOf("Kewate"));
// console.log(namee.indexOf("dd"));
// console.log(namee.indexOf("a"));  // only works for first occurence 

// console.log(str.trim().toUpperCase())  // method chaining

// console.log(namee.slice(1,8)) //slicing
// console.log(namee.slice(9))
// console.log(namee.slice(-2))

// console.log(namee.replace('Siddhesh','Vaishnavi'));
// console.log(namee.repeat(5));

// !!!!!!!!!!!!! Question Practice !!!!!!!!!!!!!!!!!

// let msg = 'help!';   // 1 
// console.log(msg.trim().toUpperCase());

// let Name = 'ApnaCollege';   // 3
// console.log("Old sting",Name);
// let newname = Name.slice(4);
// newname = newname.replace('l','t').replace('l','t');
// console.log('new string',newname);



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Arrays  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let fruits = ['apple','banana','berry'];
// console.log(fruits)
// fruits[0] = 'alfanso'
// console.log("modified array",fruits)

// fruits.pop();  // removes last element
// fruits.push('lichi'); //add element in end
// fruits.unshift('watermelon');  // adds element in start
// fruits.shift(); //removes first element
// console.log(fruits);


// !!!!!!!!!!!!!! practice que. 
// let arr = ['january','july','march','august'];
// console.log("array",arr)
// 9
// arr.shift();
// arr[0] = 'june';
// arr.unshift('july');
// console.log("newarray",arr);

// console.log(fruits.indexOf('apple'));
// console.log(fruits.indexOf('Apple')); 
// console.log(fruits.includes('banana'));

// console.log(fruits.concat(arr));
// console.log(fruits.reverse());

// console.log(fruits.slice(-2));

// !!!!!!!!!! arr.splice(starting index, deletecount, item0...item n)

// arr.splice(2,1,"hey!","bye!");
// console.log(arr);

// !!!!!!!!!!!!!!!!! practice que.

// arr.splice(0,2,"july","june");
// console.log(arr);

// let arr = [['x',' ','o'], [' ','x',' '], ['o',' ','x']];
// arr[0][1] = 'o';
// console.log(arr);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Assignment 

let listt = [12,341,12,5,67,4]

// console.log(listt.slice(0,5));  //1

// console.log(listt.slice(-4));  //2

// let str = ""                   //3

// if(str.trim().slice(0,str.length) == ""){
//     console.log("yes sting is empty")
// } else (
//     console.log('no string is not empty')
// )

// let char = 'Hey Ram!'              //4
// let index = 0

// if(char[index] == char[index].toLocaleLowerCase()){
//     console.log('yes its lowercase')
// } else{
//     console.log('No its uppercase')
// }

// let item = 89;                       //6
// if(listt.includes(item)){
//     console.log("yes",item,"exist in array")
// } else{
//      console.log("No",item,"do not exist in array")
// }
