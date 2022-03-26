let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        htmlElement.setAttribute("class", "theme-dark");
        smoothTrans();
    } else {
        htmlElement.setAttribute("class", "theme-light");
        smoothTrans();
    }
});

function smoothTrans() {
    htmlElement.classList.add("transition");

    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
    }, 10000);
};