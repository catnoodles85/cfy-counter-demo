let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

console.log(incrementButton)
console.log(decrementButton)
console.log(countView)

// Coupling = core idea that guides code quality.

function onIncrement (event){
    console.log(event)
    let currentCount = parseInt(countView.textContent)
    console.log(currentCount)
    let newCount = currentCount + 1
    countView.textContent = newCount
   
}

function onDecrement (event){
    console.log(event)
    let currentCount = parseInt(countView.textContent)
    console.log(currentCount)
    let newCount = currentCount - 1
    countView.textContent = newCount
    
}


incrementButton.addEventListener("click", onIncrement) // callback function adding
decrementButton.addEventListener("click", onDecrement) // callback function subrtacting

function onKeypress(event){
    console.log(event.key);
    
}

document.addEventListener("keydown", onKeypress)