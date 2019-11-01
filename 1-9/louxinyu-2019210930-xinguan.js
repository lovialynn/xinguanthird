//作业1
a > b ? b = a:b = a - b

//作业2
for(var i=1;i<=100;i++){
  if(i%3==0){
      console.log(i)
  }
}

//作业3
var a = 1,
    b = 2;
a = [a, b];
b = a[0];
a = a[1];
console.log(a,b)

//作业4
function sumOfSquares() {
    var res1 = 0;
    for (let i in arguments) {
        res1 += arguments[i] * arguments[i];
      }
    return res1;
  }
  var res = sumOfSquares(11, 22); 
  console.log(res);

//作业5
const num = [['a', 0], ['b', 3],['c', 6],['d',9]] ,
  list = [];
var num1=num.slice(1)
for(var i=0;i<   num1.length;i++){
list[i] = num1[i]
}
console.log(list)

// 作业6 这个题好像真的不太会T T
function $(){
  a=document.getElementsByName('p')
  b=document.getElementById('myId').innerHTML
  c=document.getElementsByClassName('myClass')
  return a,b,c
}
$()
console.log(a,b,c)

// function $(){ 
//   c=document.getElementsByName('p')
// }
// var a =$()
// console.log(c)

// function $(){
//   a=document.getElementById('myId').innerHTML
// }
// $()
// console.log(a)

// function $(){
//   b=document.getElementsByClassName('myClass').innerHTML
// }
// $()
// console.log(b)
// 作业7
const arr = [1,1,1,2,2,3,4,4,5,5,5];
function unique(arr) {
   let newarr = [];
   for (let i = 0; i<arr.length; i++) {
      if (newarr.indexOf(arr[i]) === -1) {
        newarr.push(arr[i]);
      }
   }
   return newarr;
}
console.log(unique(arr));

//作业8
  function filterRange(num) {
  return num>=1&num<=4;
  }
  let arr = [5, 3, 8, 1]
  let filtered = arr.filter(filterRange)
  alert( filtered );
  alert( arr ); 
//作业9
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
function newarr(users) {let arr = [] 
    for(var i=0;i<users.length;i++){
        let obj = {} 
    obj.fullName=users[i].name+' '+users[i].surname;
    obj.id=users[i].id
    arr.push(obj) 
}return arr
}
let a=JSON.stringify(newarr(users));
let usersMapped=JSON.parse(a)
alert( usersMapped[0].id )
alert( usersMapped[0].fullName )