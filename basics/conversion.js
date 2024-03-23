//conversion
//conert to number- Number(number coersion)
let a="3"
let b=Number(a)
let c=typeof(b)
console.log(b);
console.log(c);
let num1=null;
let num2=undefined;
let num3="str"
let num4=true;
let num5="";
let connum1=Number(num1)
let connum2=Number(num2)
let connum3=Number(num3)
let connum4=Number(num4)
let connum5=Number(num5)
console.log(connum1);
console.log(connum2);
console.log(connum3);
console.log(connum4);
console.log(connum5);
//String conversion
let str=3
console.log(typeof(str))
let constr=String(str)
console.log(typeof(constr))
let bval=""
let conbval=Boolean(bval);
console.log(conbval);
console.log(typeof(conbval));


//String conversion

console.log("1"+2+3);
console.log(2+4+"10")
console.log("hello"+"world")
console.log("str"-"st")

//increment(++)
//postfix-a++   >>returns value before increment
//prefix - ++a >>returns value after increment

let x=3
let y=x++
console.log("x:"+x+"y:"+y)
let incnuma=3
let incnumb=++incnuma
console.log("a:"+incnuma+"b:"+incnumb)