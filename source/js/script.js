function getRandomColor() {
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#800000', '#008000', '#000080'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function changePositionAndColor() {
    let circle = document.getElementById("circle");
    let newColor = getRandomColor();
    circle.style.backgroundColor = newColor;
    // تغییر موقعیت دایره
    let positionX = Math.floor(Math.random() * (window.innerWidth - 100)); // تولید یک عدد تصادفی برای موقعیت افقی
    let positionY = Math.floor(Math.random() * (window.innerHeight - 100)); // تولید یک عدد تصادفی برای موقعیت عمودی
    circle.style.top = positionY + "px";
    circle.style.left = positionX + "px";
}