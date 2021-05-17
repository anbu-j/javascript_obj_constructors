// classes always start with capital letters
/*
class Person{
    // constructor is a function
    constructor(name,age,eyeColor){
        //keyword 'this'
        this.name= name
        this.age = age 
        this.eyeColor= eyeColor

    }
}
//creating an object
var anbu = new Person("Anbu","31","brown")
var batman =new Person("giant","34","brown")
console.log(anbu)
console.log(batman)
console.log(Person)
Person={name:"Anbu",age:"31",eyecolor:"brown"}
    

// person has name,age,eyecolor */

//create a facebookprofile
class Profile{
    constructor(name,email,password){
        this.name =name
        this.email=email
        this.password =password
         }
         // creating a method inside a constructors
         //method is a function that lives inside an object,here the content of constructor is the object
         //no need to create a variable, as its already inside the object
sayHello(age){
    console.log("Hello my name is " + this.name + "My age is " + age)
}
}
var createProfile = ()=>{
    //var anbu = new Profile("Anbu","anbu@yahoo.com","***")
    //console.log(anbu)
    
    var nathan = new Profile("Nathan","nathan@gamil.com","***")
    console.log(nathan)
    nathan.sayHello(23)
}
createProfile()
// inheritance
// it allows me to inherit the properties from class
//extends helps to create blueprint of class profile
class Member extends Profile {
    //constructor takes all arguments from class profile
    constructor(name,email,password,memberPackage){
        // super allows us to grab all information from prior class
        super(name,email,password)
        this.package = memberPackage
    }
    
}
let mike = new Member("Mike","mikesgr@gmail.com","****","Standard")
// no need to create all other information for mike as it gets inherited from first cnstructor
console.log(mike)