const trendingColors = [
    "#FF5733", // red-orange
    "#33FF57", // green
    "#3357FF", // blue
    "#FF33A1", // pink
    "#FFC300"  // yellow
];
// Show trending
const colorList = document.getElementById("color-list");
trendingColors.forEach(col => {
    const div = document.createElement("div");
    div.className = "color-block";
    div.style.background = col;
    colorList.appendChild(div);
});
// Prediction logic (basic)
function predictColor() {
    const colors = [
        "#8E44AD", "#3498DB", "#E74C3C", "#16A085", "#F39C12"
    ];
    let random = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("prediction-box").innerText =
        "Next Trending Color: " + random;
    document.getElementById("prediction-box").style.color = random;
}
