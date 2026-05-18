const menuBtn =
document.getElementById("menuToggle");

const menu =
document.getElementById("menu");

const content =
document.getElementById("content");

const overlay =
document.querySelector(".overlay");

menuBtn?.addEventListener("click", () => {

    menu.classList.toggle("active");
    content.classList.toggle("shift");
    overlay?.classList.toggle("show");

    const expanded =
    menu.classList.contains("active");

    menuBtn.setAttribute(
        "aria-expanded",
        expanded
    );
});

overlay?.addEventListener("click", () => {

    menu.classList.remove("active");
    content.classList.remove("shift");
    overlay?.classList.remove("show");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );
});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        menu.classList.remove("active");
        content.classList.remove("shift");
        overlay?.classList.remove("show");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.focus();
    }

});