"use strcit";

let btnSubmit = document.getElementById("btnSubmit");
let text = document.getElementById("text");
let ul = document.getElementById("ul");

console.log(btnSubmit);
console.log(text);

btnSubmit.addEventListener("click", addItem);

function addItem() {
  let textValue = text.value;
  if (textValue !== "") {
    let li = document.createElement("li");
    li.textContent = textValue;
    ul.appendChild(li);
  }
}
