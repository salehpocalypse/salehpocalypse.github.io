const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
let keys = {};
let panicSel = document.getElementById("panic-sel"),
panicUrl = document.getElementById("panic");

canvas.width = innerWidth;
canvas.height = innerHeight;
document.body.appendChild(canvas);

//document.body.addEventListener("load", (e) => {});

addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
  if (e[`${panicSel.selectedIndex.toString().toLowerCase()}Key`] && keys[","]) {
    let href = panicUrl.value.includes("://") ? panicUrl.value : `https://${panicUrl.value}`;
    open(href, "_top");
  }
});
addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});