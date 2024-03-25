
const mysym=Symbol('key1')
const jUser={
    firstName:"shilpa",
    "second Name":"surendran",
    age:24,
    [mysym]:"mykey1",
    location:'kochi',
    email:"shilpa@gmail.com",
    insLoggedin:false,
    lastLoggedDays:["monday","tuesday"]
}
console.log(jUser.firstName);
console.log(jUser["age"]);
console.log(jUser["second Name"])//when space comes in then . cannot be used to get the value
console.log(typeof(jUser.mysym));
console.log(jUser[mysym]);
console.log(jUser)

jUser.email="shilpa@google.com"
console.log(jUser);
// Object.freeze(jUser)
jUser.email="shilpa@ibm.com"
console.log(jUser);
//object functions/methods

jUser.greetings=function(){
    console.log("hello")
}
console.log(jUser);
console.log(jUser.greetings());

jUser.greetings2=function(){
    console.log(`hello ${this.firstName}`)
}

console.log(jUser);
console.log(jUser.greetings2());

