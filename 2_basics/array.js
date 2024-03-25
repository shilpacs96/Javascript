// const myArr=[0,1,2,3,4,5]
// const myArrSample=[1,2,3,'shilpa',true]
// //0 indexed 
// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2[1]) 
// //array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(0)
// console.log(myArr)
// // myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(0))
// console.log(myArr.indexOf(1))
// const newArray=myArr.join()
// console.log(newArray)
// //slice and splice
// console.log("a",myArr);
// const myn1=myArr.slice(1,3)//from 1 and 3 not included{indexes}
// console.log(myn1)
// console.log("b",myArr);
// const myn2=myArr.splice(1,3)//from 1 and 3 included{indexes}
// console.log(myn2);
// console.log("c",myArr);

//array part2

const marvel=['thor','ironman','spriderman']
const dc=['superman','flash','batman']
// marvel.push(dc)
// console.log(marvel);
// console.log(dc)
//[ 'thor', 'ironman', 'spriderman', [ 'superman', 'flash', 'batman' ] ]
// //[ 'superman', 'flash', 'batman' ]
// console.log(marvel[3][0])
const hero=marvel.concat(dc)
console.log(hero)
const heros=[...marvel,...dc]
console.log(heros)
console.log(marvel)
console.log(dc)
console.log(Array.isArray("shilpa"))
console.log(Array.from('Shilpa'));
console.log(Array.from({name:'shilpa'}));

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))