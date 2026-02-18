const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const factorialBtn = document.getElementById("factorial");
const clickSound = document.getElementById("clickSound");

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playSound();
        display.value += button.dataset.value;
    });
});

clearBtn.addEventListener("click", () => {
    playSound();
    display.value = "";
});

equalsBtn.addEventListener("click", () => {
    try {
        playSound();
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

factorialBtn.addEventListener("click", () => {
    try {
        playSound();
        let num = parseInt(display.value);
        if (num < 0) throw "Error";
        display.value = factorial(num);
    } catch {
        display.value = "Error";
    }
});

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

/* Keyboard Support */

document.addEventListener("keydown", (e) => {
    if ((e.key >= 0 && e.key <= 9) || "+-*/.".includes(e.key)) {
        display.value += e.key;
    }
    if (e.key === "Enter") {
        display.value = eval(display.value);
    }
    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});