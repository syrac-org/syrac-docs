document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelector(".left-buttons");
    if (!buttons) return;

    const btn = document.createElement("a");
    btn.classList.add("icon-button");
    btn.href = "https://app.syrac.org";
    btn.textContent = "Go to app";
    btn.style.textDecoration = "none";
    btn.style.fontWeight = "bold";

    buttons.appendChild(btn);
});
