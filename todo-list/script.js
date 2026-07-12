const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", function() {
	let task = todoInput.value;

	if (task === "") {
		return;
	}

	let li = document.createElement("li");
	li.textContent = task;

	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "delete";
	deleteBtn.addEventListener("click", function() {
		li.remove();
	});

	li.appendChild(deleteBtn);
	todoList.appendChild(li);

	todoInput.value = ""; 

});
