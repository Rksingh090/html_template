
const onAddBtn = document.getElementById("onAddBtn")
const todoList = document.getElementById("todoItems")
const input = document.getElementById("itemInput")

onAddBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = input.value;
    console.log(value);


    const newLi = document.createElement("li");
    newLi.innerText = value;

    todoList.appendChild(newLi)
    input.value =""

})