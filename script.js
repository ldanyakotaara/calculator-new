let a = "";
let b = "";
let sign = "";
let finish = false;

const digital = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

const out = document.querySelector(".screen p");

function ac () {
    a = "";
    b = "" ;
    sign = ""; 
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = ac;

document.querySelector(".buttons").onclick = (event) => {

    if (!event.target.classList.contains("btn")) return;
    if (event.target.classList.contains("ac")) return;

    out.textContent = "";
    const key = event.target.textContent;

    if (digital.includes(key)) {
        if (b === "" && sign === "") {
            a += key;
            out.textContent = a;  
        } 
        else if (a !== "" && b !== "" && finish) {
           b = key;
           finish = false;
           out.textContent = b; 
        }
        else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    if (action.includes(key)) {
        sign = key;
        return;
    }

    if (key === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === "0") {
                    out.textContent = "Дурак штоле?";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        return;
    }
};