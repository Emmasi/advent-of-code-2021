array = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n")
let lista = data.map (x => parseInt(x))
console.log(lista)

let sum=[]
for (i=0; i<lista.length-1; i++){
    if (lista[i]<lista[i+1]){
        sum +=1;
    }
}
console.log(sum.length)



