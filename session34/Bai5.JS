let ul = document.getElementById("ul");
let names = [];
let n = +prompt("Nhập số tên có trong mảng.");
for (let i = 0; i < n; i++) {
  let m = prompt("Nhập tên:");
  names.push(m);
}
for (let i = 0; i < names.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = names[i];
  ul.appendChild(li);
}
