// function People(name,age){
//     this.name = name,
//     this.age = age
// }

// People.prototype.talk = function (){
//     console.log(`My name is ${this.name}`)
// }

// p1 = new People("Sita",16)
// p2 = new People("Ram",26)



//////////////////////////////////////////////////////////

// class People{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }

//     talk(){
//         console.log(`My name is ${this.name}`)
//     }
// }

// p1 = new People("Sita",16)
// p2 = new People("Ram",26)

//////////////////////////////////////////////////////////


class People {
    constructor(name,age){
        console.log("Inside people constructor")
        this.name = name
        this.age = age
    }

    speak(){
        console.log(`My name is ${this.name}`)
    }
}

class Teacher extends People {
    constructor(name,age,subject){
        console.log("inside teacher constructor")
        super(name,age)
        this.subject = subject
    }

    tell(){
        console.log("I am a teacher I teach",this.subject)
    }
}

class Student extends People{
    constructor(name,age,marks){
        console.log("Inside student class")
        super(name,age)
        this.marks = marks
    }
}

// stu = new Student("siddhesh",44,90)
// tea = new Teacher("Vaishali",44,"maths")