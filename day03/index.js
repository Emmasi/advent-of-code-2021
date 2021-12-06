test = [
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0],
];
const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n")
console.log(data)
let obj = data.map(data => {

  const operation = data.split("")
 return operation.map(x => parseInt(x))
})
console.log(obj)
const all1=[]
const all2=[]
const all3=[]
const all4=[]
const all5=[]
const all6=[]
const all7=[]
const all8=[]
const all9=[]
const all10=[]
const all11=[]
const all12=[]

function add(list,num) {
  for(let i = 0; i < obj.length; i++){
  list.push(obj[i][num]);
  }
}
add (all1,0)
add (all2,1)
add (all3,2)
add (all4,3)
add (all5,4)
add (all6,5)
add (all7,6)
add (all8,7)
add (all9,8)
add (all10,9)
add (all11,10)
add (all12,11)


function sum(all) {
  return all.reduce((num,tot)=>num+tot) 
}
let total1 = sum (all1)
let total2 = sum(all2)
let total3 = sum (all3)
let total4 = sum(all4)
let total5 = sum(all5)
let total6 = sum (all6)
let total7 = sum(all7)
let total8 = sum (all8)
let total9 = sum(all9)
let total10 = sum(all10)
let total11 = sum(all11)
let total12 = sum(all12)
console.log(total1)

 function morethan(num) {
   if (num > (all1.length/2) ){
     console.log("1")
   }
   else{
     console.log("0")
   }
 }
 console.log(all1.length)
morethan(total1)
morethan(total2)
morethan(total3)
morethan(total4)
morethan(total5)
morethan(total6)
morethan(total7)
morethan(total8)
morethan(total9)
morethan(total10)
morethan(total11)
morethan(total12)



