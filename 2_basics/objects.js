
// const mysym=Symbol('key1')
// const jUser={
//     firstName:"shilpa",
//     "second Name":"surendran",
//     age:24,
//     [mysym]:"mykey1",
//     location:'kochi',
//     email:"shilpa@gmail.com",
//     insLoggedin:false,
//     lastLoggedDays:["monday","tuesday"]
// }
// console.log(jUser.firstName);
// console.log(jUser["age"]);
// console.log(jUser["second Name"])//when space comes in then . cannot be used to get the value
// console.log(typeof(jUser.mysym));
// console.log(jUser[mysym]);
// console.log(jUser)

// jUser.email="shilpa@google.com"
// console.log(jUser);
// // Object.freeze(jUser)
// jUser.email="shilpa@ibm.com"
// console.log(jUser);
// //object functions/methods

// jUser.greetings=function(){
//     console.log("hello")
// }
// console.log(jUser);
// console.log(jUser.greetings());

// jUser.greetings2=function(){
//     console.log(`hello ${this.firstName}`)
// }

// console.log(jUser);
// console.log(jUser.greetings2());

//Object constructor

const tinderUser= new Object()
console.log(tinderUser)
tinderUser.id="123abc"
tinderUser.name="shilpa"
tinderUser.isLoggedIn=false
console.log(tinderUser)
const regularUser={
    email:"shilpa@gmail.com",
    fullname:{
        firstname:"shilpa",
        lastname:"surendran",
    }
}
console.log(regularUser.fullname.firstname);
//adding object to another object
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'c'}
const obj3={obj1,obj2}
console.log(obj3);
const obj4=Object.assign(obj1,obj2)
console.log(obj4);
const obj5={...obj1,...obj2}
console.log(obj5);

console.log(Object.keys(tinderUser));//comes as array of keys
console.log(Object.values(tinderUser));//comes as array of values
console.log((Object.entries(tinderUser)));//array of array of key value 

//destructure- array and object 
const course={
    coursename:"js in 10",
    price:999,
    courseInstructor:"shilpa",
}
console.log(course.courseInstructor);
console.log(course["courseInstructor"]);

const{courseInstructor:instructor}=course
console.log(instructor);