document.addEventListener("DOMContentLoaded", function() {
    const nyash = document.getElementById("chto");
    document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    nyash.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    if (x > 500 || y > 500) {
        nyash.style.color = "red";
    } else {
        nyash.style.color = "blueviolet";
    }
    });
});
