// JavaScript
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

let items = [];

const updateList = (item) => {
  items.push(item);
  displayList();
};

const displayList = () => {
  itemList.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = "&#x2715;";
    span.classList.add("close");
    li.innerHTML = item;
    li.appendChild(span);
    itemList.appendChild(li);
  }
  addDeleteListeners();
};

const clearInput = () => {
  itemInput.value = "";
};

const addDeleteListeners = () => {
  const closeBtns = document.getElementsByClassName("close");
  for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", (event) => {
      const index = event.target.parentElement.dataset.index;
      deleteItem(index);
    });
  }
};

const deleteItem = (index) => {
  items.splice(index, 1);
  displayList();
};

itemInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }
});

addBtn.onclick = (event) => {
  if (itemInput.value) {
    updateList(itemInput.value);
    clearInput();
  } else {
    alert("Please enter an item.");
  }
};

itemList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});
