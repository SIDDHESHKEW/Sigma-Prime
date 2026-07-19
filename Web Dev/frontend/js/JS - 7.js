// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Misllanious topics  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// !!!!!!!!!!!!!!!!!!!!!!!!!!!  Try and Catch

// console.log('Ram')
// console.log('Ram')
// try{
//     console.log(a)
// } catch{
//     console.log('A do not exist')
// }
// console.log('SitaRam')


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Arrow function 

// hello = () => {
//     console.log('Ram Ram Ji');
// };

// cube = (n) => {
//     return n*n*n;
// };

// square = n => {
//     return n*n;
// };

// add = (a,b,c) => {
//     return a+b+c;
// }

// add = (a,b,c) => (                       // implicit returning function(no return statement needed)
//     a+b+c
// )

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! settimeout

// console.log('Ram Ram');

// setTimeout(() => {
//     console.log('Ayodhya');
// },4000);

// console.log('welcome to');


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Set Interval

// let id = setInterval(() => {
//     console.log('Ram Ram');
// },2000)                            // Alert - write cleanInterval(id) in console to stop this


// !!!!!!!!!!!!!!!!!!!!!!!!  Problem

let square = n => (                //1
    n*n     
);


function hello(){                   //2
    let count = 0
    let id = setInterval(() => {
        console.log('hello world');
        count +=1;
        if(count == 5){
            clearInterval(id)
        }
    },2000)
    return id;
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Assingment


const arrayAverage = (arr) => {                          // 1
    let total = 0;
    for(let i = 0; i<arr.length; i++){
        total += arr[i]; 
    }
    let avg = total/arr.length;
    return avg;
}


const isEven = (n) => {                                  // 2
    return console.log(n%2 == 0);
}


let length = 4;                                          // 5

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    }
};

object.method(callback, 1, 2);


























