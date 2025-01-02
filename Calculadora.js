const display = document.querySelector("#display");
const buttom = document.querySelectorAll("button");

buttom.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1); // Corrección aquí: 'slice' en lugar de 'slace'
        } else {
            display.value += btn.id;
        }
    });
});
