let total = document.getElementById("total")
let clear = document.querySelector(".clear")
let remove = document.querySelector(".remove")
let operator = document.querySelectorAll(".operator")
let number = document.querySelectorAll(".number")
let equal = document.querySelector(".equal")

for(let i = 0 ; i<number.length ; i++){
    number[i].addEventListener("click",function(){
        total.value += this.value
    })
}

for(let i = 0 ; i<operator.length ; i++){
    operator[i].addEventListener("click",function(){
        total.value += this.value
    })
}

clear.addEventListener("click",function(){
    total.value = ""
})

equal.addEventListener("click",function(){
    total.value = eval(total.value)
})

remove.addEventListener("click",function(){
    total.value = total.value.slice(0,-1)
})





