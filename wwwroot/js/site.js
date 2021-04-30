function hover(element) {
    element.classList.add("hover");
}

function unhover(element) {
    element.classList.remove("hover");
}

var $$ = function (selector, parent) {
    return (parent ? parent : document).querySelectorAll(selector);
};

document.addEventListener("DOMContentLoaded", function () {
    $$("a").forEach(x => {
        x.ontouchstart = x.onmouseenter = function () { hover(x); }
        x.onmouseleave = x.ontouchmove = x.onclick = function () { unhover(x); }
    });
});