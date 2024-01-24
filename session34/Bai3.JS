let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.onclick = function () {
  text.innerHTML = "<p>Text after change</p>";
};
