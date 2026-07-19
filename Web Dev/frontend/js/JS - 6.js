// !!!!!!!!!!!!!!!!!!! question 1

// function printPoem(){
//     console.log("Life's a journey, a fleeting breath, with sunlit peaks and shadowed depth, a canvas painted, bold and bright, with whispered dreams in fading light, a river flowing to the sea, a constant change for you and me, with lessons learned in joy and pain, a chance to rise and try again, a fragile gift, a precious hold, a story waiting to unfold, so live it fully, day by day, before the moments slip away.")
// };


// !!!!!!!!!!!!!!!!!!!!!!!!! Question 2

// function rollDice(){
//     console.log("Rolling the dice.....");
//     console.log(Math.ceil(Math.random()*6));
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Question 3

// function avg3(a,b,c){
//     let avg = (a+b+c)/3
//     console.log(avg)
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Question 4

// function mulTable(a){
//     for(let i = 1; i<=10; i++){
//         console.log(`${a} x ${i} = ${a*i}`)
//     }
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Question 5

// function nSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n ; i++){
//         sum +=i;
//     }
//     return sum;
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Question 6

// function add(n){
//     let result ='';
//     for(let i = 0; i<=n.length; i++){
//         result += n[i];
//     }
//     return result;
// }


// >>>>>>>>>>> 

// const sum = function(a,b){
//     return a+b;
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Higher order function

// function doGreet(func,n){
//     for(let i = 0; i<= n; i++){
//         func();
//     };
// };

// let great = function(){
//     console.log('Ram Ram');
// };

// doGreet(great,10);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Higher order function(return)

// function funcFactory(request){
//     if(request == 'odd'){
//         return function(n){
//             console.log(!(n%2==0))
//         };
//     }

//     else if(request == 'even'){
//         return function(n){
//             console.log(n%2==0)
//         };
//     } 
    
//     else{
//         console.log('Request does not match')
//     };
// };


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Methods

// functions defined in an object is called method

// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     }
// };

// console.log(calculator.add(45,65));

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// };

// console.log(calculator.sub(45,32));


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 'this' keyword

let student = {
    Name : 'RAM',
    eng : 34,
    hindi : 89,
    maths : 90,
    science : 98,

    getAvg(){
        avg = (this.eng + this.hindi + this.maths + this.science)/4;
        return avg;   
    }
};



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Assignment 


function bigNumber(arr,n){                             // 1
    let newArr = [];
    for(ele of arr){
        if(ele > n){
            newArr.push(ele);
        }
    }
    return newArr;
};


function unique(x){                                  
    for(let i = 0; i<=x.length; i++){
        for(let j = 0; j<=x.length;j++){
            
            if(x[i]==x[j]){
                x = x.replace(x[i],'')
            }
        }
    };
    return x;
};


function biggest(arr){
    let str = '';

    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i].length > arr[i+1].length){
            str = arr[i]
        }
    }

    for(let i = 0; i< arr.length - 1; i++){
        if(arr[i].length > str){
            str = arr[i]
        }
    }
    return str;
};


function count_vowel(str){                                // 4
    let vowel = 'aeiou';
    let count = 0;

    for(let i = 0; i<= vowel.length-1; i++){
        for(let j = 0; j<= str.length-1; j++){
            if(vowel[i]==str[j]){
                count += 1;
            }
        }
    }
    return count;
};


function randint(start,end){
    
}
