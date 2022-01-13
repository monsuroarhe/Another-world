let number = document.getElementById("count")
 let buttonClick = document.getElementById("btn_1")
let count = 0
function counter(){
    let x = count += 1
    number.innerText = x
}
// next stuffs 
document.getElementById("btn_2")
function safe(){
let paragraph = document.getElementById("paragraph")
let p = paragraph.innerText = "_" + number.innerText + "_"
number.textContent = "0"
count = 0
}