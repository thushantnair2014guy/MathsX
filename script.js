function toggleDark() {
    document.body.classList.toggle("dark");
}

function checkRatio() {
    let ans = document.getElementById("ratioAns").value;
    document.getElementById("ratioOut").textContent =
        ans === "1:3" ? "Correct!" : "Try again!";
}

function checkProp() {
    let ans = document.getElementById("propAns").value;
    document.getElementById("propOut").textContent =
        ans === "10" ? "Correct!" : "Try again!";
}

function checkArea() {
    let ans = document.getElementById("areaAns").value;
    document.getElementById("areaOut").textContent =
        ans === "24" ? "Correct!" : "Try again!";
}

function checkVol() {
    let ans = document.getElementById("volAns").value;
    document.getElementById("volOut").textContent =
        ans === "64" ? "Correct!" : "Try again!";
}
