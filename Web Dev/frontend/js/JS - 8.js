// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  More Array Methods  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!  forEach

// let arr = [3,5,3,23,45];               // !

// function printtt(el){
//     console.log(el);
// };

// let printt = (el) => {
//     console.log(el);
// };

// arr.forEach(printt);
// arr.forEach(printtt)

 
let arr1 = [{                          
    name : 'Sita',
    marks : 100
},
{
    name : 'Ram',
    marks : 99
},
{
    name : 'Lakshman',
    marks : 89
}]

// arr1.forEach( (student) => {              // !
//     console.log(student.marks)
// })


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Map 

let num = [1,3,6,3,2,57,8,54,90];

// let double = num.map((el) => {            // !
//     return el*2;
// });
// console.log(double);


// let gpa = arr1.map((el) => {             // !
//     return el.marks/10;
// });
// console.log(gpa)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Filter

// let even = num.filter((el) => {
//     return el%2 == 0;
// });
// console.log(even);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  every - works like And logical opretor

// console.log([2,4,6].every((el) => {
//     return el%2 == 0;
// }))
// console.log([2,4,6,8].every((el) => {
//     return el%2 == 0;
// }))
// console.log([2,4,6,8,1].every((el) => {
//     return el%2 == 0;
// }))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Some - works like or logical opretor

// console.log([2,4,6].some((el) => {
//     return el%2 == 0;
// }))
// console.log([1,3,9].some((el) => {
//     return el%2 == 0;
// }))


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Reduce

// let final = num.reduce((res,el) => (res+el))       //  !
// console.log(final);


// let max = num.reduce((max,el) => {                 //!
//     if(max > el){
//         return max;
//     } else {
//         return el;
//     }
// })
// console.log(max)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! problems

// console.log(num.every((el) => el%10 == 0))          // 1


// let min = num.reduce((min,el) => {                      // 2
//     if(min<el){
//         return min;
//     }else {
//         return el;
//     }
// })
// console.log(min)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  spread

// console.log(...'Ram Ram, Sita Ram');           // !
// console.log(...num);
// console.log(Math.min(...num))

newarr = [...num]                                 // !
arr2 = [...'hello']
arr3 = [...arr2,...newarr]
// console.log(newarr)
// console.log(arr2)
// console.log(arr3)


const obj = {                                     // !
    name : 'Ram',
    wife : 'sita'
}
const objCopy = {...num,...obj,id : 34}
// console.log(objCopy)


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  rest

function min(...args){
    return args.reduce((min,el) => {
        if(min<el){
            return min;
        } else {
            return el;
        }
    })
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Assignment

const arrayOpretor = (arr) => {                          // 1
    let square = arr.map((el) => el*el);
    let sum = arr.reduce((res,el) => res+el);
    let avg = sum/arr.length;

    console.log('Square of all numbers =',square);
    console.log('sum of all digits =',sum);
    console.log('Average =',avg)
}


let plusFive = num.map((el) => el+5)                       // 2


let strArr = ['prapti','papa','mummy','aai','baba','siddhesh','mamu']          // 3
let newArr = strArr.map((el) => el.toLocaleUpperCase())


const obj1 = {                                              // 5 
    name : 'siddhesh kewate',
    age : 19
}

const obj2 = {
    dob : '13.07.2006',
    address : 'new vardhman officers colony'
}

const meargeObjects = (obj1,obj2) => ({...obj1,...obj2})

aur 













