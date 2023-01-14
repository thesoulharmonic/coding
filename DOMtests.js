const body = document.body;
const div = document.querySelector("div");
const span = document.querySelectorAll("span");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

console.log(spanHi.id); //logs the ID fo span
console.log(spanHi.getAttribute("id")); // does same thing
spanHi.removeAttribute("title"); // removes title attribute

//div.removeChild('spanBye')
div.append(spanBye);
spanBye.remove(); // remove span

spanHi.id = "changeSpanId"; //change span name

spanHi.dataset; // get custom data string in html elements
console.log(spanHi.dataset);

spanHi.dataset.hidden = "************"; // change it to stars

spanHi.dataset.newName = "Boolean";

div.classList; // get list of classes

spanHi.classList.add("spanclassadded"); // add class to element
spanHi.classList.remove("spanclassremove"); // removes class
spanHi.classList.toggle("toggle"); // adds if not present, removes if exists
spanHi.classList.toggle("toggleFalse", false); // false removes, true adds
spanHi.style.color = "red" // access style properties

//div.innerText = "A String of Text";

// div.innerHTML = `A String of Text
// <li>Hoooooe</li>
// <li>Twooooo</li>
// <li>Peiiiii</li>
// `;
// div.textContent = 'Saaaa'
