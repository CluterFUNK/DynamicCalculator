let n1 = document.getElementById("num1").innerText = Number(prompt("N1"))
let n2 = document.getElementById("num2").innerText = Number(prompt("N2"))
let changeR = document.getElementById("result")
let sum = 0;

function add(){
sum = n1 + n2
changeR.innerText = sum
}


function sub(){
sum = n1 - n2
changeR.innerText = sum
}

function mult(){
sum = n1 * n2
changeR.innerText = sum
}

function divi(){
sum = n1 / n2
changeR.innerText = sum
}

function rest(){

sum = 0;
console.log(sum)
changeR.innerText = sum
n1 = document.getElementById("num1").innerText = Number(prompt("N1"))
n2 = document.getElementById("num2").innerText = Number(prompt("N2"))
}
