// console.log(document);
// console.dir(document);

// // 1. document.getElementById():

// let h1 = document.getElementById("demo-id"); // h1
// let div = document.getElementById("div-id");

// console.log(h1);
// console.log(div);

// // 2. documment.getElementsByClassName();

// document.getElementsByClassName("list-item");
// let lis = document.getElementsByClassName("list-item");

// console.log(lis);
// console.log("First li", lis[0]);
// console.log("Last li", lis[lis.length - 1]);

// for (let i = 0; i < lis.length; i++) {
//   console.log("Từng thẻ", lis[i]);
// }

// // 3. document.getElementsByTagName(tag)
// let liCollection = document.getElementsByTagName("li");

// console.log("Tập hợp thẻ li", liCollection);

// let h1 = document.getElementById("demo-id");

// console.log(h1.innerHTML); // object - đối tượng
// console.log(h1.innerText); // object - đối tượng
// console.log(h1.textContent); // object - đối tượng

// h1.innerHTML = "<i>Phanh xích lô</i>";
// h1.innerText = "HEHEHEHEHEHEHEHEHEHEHE";
// h1.textContent = "HIHIHEHEHOHO";

// // id
// console.log(h1.id);
// if (h1.id == "demo-id") {
//   alert("Kiểm tra id");
// }

// .classList
// console.log(h1.classList);
// console.log("class đầu tiên", h1.classList[0]);
// console.log("class cuối cùng", h1.classList[h1.classList.length - 1]);

// h1.classList.add("class-4");

// h1.classList.remove("class-1");

// console.log(h1.classList.contains("class-5")); // true hoặc false

// console.log(h1.style);
// h1.style.backgroundColor = "red";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";
// h1.style.fontSize = "30px";
// h1.style.fontWeight = "bold";
// h1.style.color = "white";
// h1.style.borderRadius = "50%";
// h1.style.border = "10px solid black";

// let b = document.getElementById("child-b");

// console.log(b.parentElement.parentElement.children[2].children[0]); // ul

// let input = document.getElementById("input");
// console.log("Đây là giá trị của ô input thời điểm hiện tại", input.value);

// input.value = "Hello world";

// let li = document.createElement("li"); // <li></li>
// let ul = document.getElementById("list");

// li.innerHTML = "<i>Đây là thẻ li mới</i>";
// li.classList.add("list-item");

// ul.appendChild(li);

// li.remove();
// ul.remove();

// console.log(li);

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//   alert("Hello world sau mỗi lần click");
// };
