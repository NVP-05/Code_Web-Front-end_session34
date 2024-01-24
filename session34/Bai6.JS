let btn = document.getElementById("btn");
let input = document.getElementById("input");
let ul = document.getElementById("ul-id");

input.style.borderRadius = "10px";
btn.style.backgroundColor = "green";
btn.style.borderRadius = "10px";

btn.onclick = function () {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ul.appendChild(li);
};
