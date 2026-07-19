// let n = parseInt(prompt("Enter a nuber of which you want table"))

// for(i=1;i<=10;i++){
//     console.log(`${n} x ${i} = ${n*i}`)
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!! Favorait movie

// let fav_movie = 'hanuman'
// let n = prompt("enter movie name")

// while((n.toLocaleLowerCase() != fav_movie) && (n.toLocaleLowerCase() != 'quit')){
//     n = prompt("Wrong gusse, Enter movie name or write quit")

// }


// if(n == fav_movie){
//     console.log("Congrats yo won!!!!")
// } else{
//     console.log("you quit")
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!! Nested array with nested loops

// let heroes = [['ironman','spiderman','thor'],['batman','superman','flash']]

// for(let i = 0;i<heroes.length;i++){
//     console.log("!!!!!!!!!!! Heroes !!!!!!!!!!!!!!")
//     for(j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j])
//     }
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!! For of loop

// let fruits = ['mango','cherry','grapes','orange']

// for(fruit of fruits){
//     console.log(fruit)
// }

// for(char of 'sitaram'){
//     console.log(char)
// }

// for(list of heroes){
//     for(hero of list){
//         console.log(hero)
//     }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TODO APP
 
// let todo = [];
// let req = prompt("Enter your command");

// while(true){
//     if(req.toLowerCase() == 'quit'){
//         console.log("ending session");
//         break;
//     }

//     if(req.toLowerCase() == 'delet'){
//         let del = prompt("Enter task index you want delet");
//         todo.splice(del,1);
//         console.log('Deleted successfully');
//         break;
//     }

//     if(req.toLowerCase() == 'list'){
//         console.log("_______________________________")
//         for(ele of todo){
//             console.log(ele);
//         }
//         console.log("_______________________________")
//         break;
//     }

//     if(req.toLowerCase() == 'add'){
//         let task = prompt('enter task you want to add');
//         todo.push(task);
//         console.log('Task added');

//         if(task.toLowerCase() == 'delet'){
//             let del = prompt("Enter task index you want delet");
//             todo.splice(del,1);
//             console.log('Deleted successfully');
//             break;
//         }

//         if(task.toLowerCase() == 'list'){
//             console.log("_______________________________")
//             for(ele of todo){
//                 console.log(ele);
//         }
//             console.log("_______________________________")
//             break;
//         }

//         if(task.toLowerCase() == 'quit'){
//             console.log("ending session");
//             break;
//         }
//     }
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Assingment

// let arr = [1,2,3,4,5,6,2,3];          //1

// for(i = 0; i<arr.length ;i++ ){
//     if(arr[i] == 2){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// let num = 314145;                       //2
// console.log(num.toString().length);


// let num = '4532458982'                      //3
// let total = 0

// for(digit of num){
//     total = total+parseInt(digit)
// }
// console.log(total)


// let num = prompt("enter the number");      //4
// let a = 1;

// for(let i = 1; i<=num; i++){
//     a = i*a;
// }
// console.log(a)


// let arr = [334,55,43,222,4,455,3];              //5
// let a = arr[0]

// for(i = 0;i<arr.length;i++){
//     if(arr[i] > a ){
//         a = arr[i]
//     }
// }
// console.log(a)