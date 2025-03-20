const whiteGray = '#f1f5f9'
const blackGray = '#212529'

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('btnswitch').addEventListener('click', switchTheme)

let num1 = ""
let num2 = ""
let operator = ""
const display = document.querySelector(".display")

const calculate = (n1, n2, operator) => {
    const number1 = parseFloat(n1)
    const number2 = parseFloat(n2)
    switch (operator) {
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2
        case "*":
            return number1 * number2
        case "/":
            return number1 / number2
        default:
            return 0
    }
}

document.querySelectorAll(".key").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.value

        if ("+-*/".includes(value) && num1) {
            operator = value
            num2 = "" 
        } else if (value === "=") {
            if (num1 && num2 && operator) {
                display.innerText = calculate(num1, num2, operator)
                num1 = display.innerText
                num2 = operator = ""
            }
        } else { 
            if (operator) {
                num2 += value
            } else {
                num1 += value
            }
        }

        display.innerText = num1 + (operator ? " " + operator + " " : "") + num2
    })
})

document.querySelector(".clear").addEventListener("click", () => {
    num1 = num2 = operator = ""
    display.innerText = ""
})

document.querySelector(".copy").addEventListener("click", () => {
    const textToCopy = display.innerText
    navigator.clipboard.writeText(textToCopy)
})

document.querySelector(".delete").addEventListener("click", () => {
    if (num2) {
        num2 = num2.slice(0, -1)
    } else if (operator) {
        operator = ""
    } else if (num1) {
        num1 = num1.slice(0, -1)
    }
    
    display.innerText = num1 + (operator ? " " + operator + " " : "") + num2})
