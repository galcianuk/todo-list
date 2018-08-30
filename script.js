var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementById("list");
var item = document.getElementsByClassName("item");
var itemsArray = Array.prototype.slice.call(ul);


function inputLength() {
	return input.value.length;
}

function listLength() {
	console.log(item.length);
	return item.length
}

function createListElement() {
	var newItem = document.createElement("li");
		newItem.appendChild(document.createTextNode(input.value));
		ul.appendChild(newItem);
		input.value = "";
		newItem.className = "item";
	var newButton = document.createElement("button");
		newButton.appendChild(document.createTextNode("Delete!"));
		newItem.appendChild(newButton);
		newButton.className = "button";
		newButton.addEventListener("click", removeParent)
}

function createButtonElement() {
	for (i = 0; i < listLength(); i++ ) {
		var newButton = document.createElement("button");
			newButton.appendChild(document.createTextNode("Delete!"));
			item[i].appendChild(newButton);
			newButton.className = "button";
			newButton.addEventListener("click", removeParent)
	}
}

function removeParent(event){
	event.target.parentNode.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(e){
	if (e.target.matches("li.item")){
		e.target.classList.toggle("done");
	}
}

function deleteItem(e){
	if (e.target.matches("button.delete")){
		itemsArray.splice(0,1);
		item = itemsArray;
		alert("delete");
	}

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", markDone);

list.addEventListener("click", deleteItem)

createButtonElement();


// for (var i = 0; i < todolist.length; i++){
// 	todolist(i).addEventListener("click", markDone);
// }