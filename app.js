//Selectors
const display1E1 = document.querySelector(".display-1")
const display2E2 = document.querySelector(".display-2")
const tempResultE1 = document.querySelector(".tem-result")
const numbersE1 = document.querySelectorAll(".number")
const operationE1 = document.querySelectorAll(".operation")
const equalE1 = document.querySelectorAll(".equal")
const clearAllE1=document.querySelector(".all-clear")
const clearLastE1=document.querySelector(".last-entity-clear")

let dis1Num = ""
let dis2Num = ""
let result= null
let lastOperation = ""
let haveDot = false
//event Listener
numbersE1.forEach((number)=>{
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === "." && !haveDot){
            haveDot=true
        } else if(e.target.innerText === "." && haveDot){
            return
        }
        dis2Num += e.target.innerText
        display2E2.innerText= dis2Num

    })
})