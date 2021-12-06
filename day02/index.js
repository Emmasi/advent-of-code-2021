let test = [
  { forward: 5 },
  { down: 5 },
  { forward: 8 },
  { up: 3 },
  { down: 8 },
  { forward: 2 },
];
const fs = require('fs')
const data =fs.readFileSync('input.txt', 'utf8').split("\n")
let obj = data.map(data => {

    const operation = data.split(" ")[0]
    const count = data.split(" ")[1]

    return {
        [operation]: parseInt(count)
    }
})

let fram = obj.filter(obj => obj["forward"]);
let framSum = Object.values(fram).reduce ((num, {forward}) => num + forward,0)

let ner = obj.filter(obj => obj["down"]);
let nerSum = Object.values(ner).reduce ((num, {down}) => num + down,0)

let upp = obj.filter(obj => obj["up"]);
let uppSum = Object.values(upp).reduce ((num, {up}) => num + up,0)
console.log(fram, ner, upp)
console.log(framSum, nerSum,uppSum)
console.log(nerSum-uppSum)



