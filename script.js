const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;


function moveNoButton() {

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    growYesButton();
}


function growYesButton() {
    scale += 0.30;
    yesBtn.style.transform = `scale(${scale})`;
}


noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", moveNoButton);


yesBtn.addEventListener("click", () => {
    window.location.href = "acepto.html";
});


window.addEventListener("resize", () => {
    noBtn.style.position = "relative";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
});
