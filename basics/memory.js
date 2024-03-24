//Stack memory
//Primitive type
//storing the copy and changing it thus does not affect the original

let myName="Shilpa"
let anothername=myName
console.log(anothername)
anothername="chippu"
console.log(myName)
console.log(anothername);

//Heap memory-reference type/non primitive type
//storing the reference of the original thus make changes reflect in original

let user1={
    name:"scs",
    age:20
}
let user2=user1
user2.name="dcs"
console.log(user1)
console.log(user2);

