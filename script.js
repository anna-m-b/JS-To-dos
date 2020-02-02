var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');
var list = document.querySelectorAll('ul > li');
var listLength = list.length

// add delete buttons to existing li 
	
	for (var i = 0; i < list.length; i++) {
	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode('done!'));
	list[i].appendChild(deleteButton);
	deleteButton.classList.add('delete');  

	}

// cross out onclick, delete item on buttonclick (solution instead of using loops)

document.addEventListener('click', function(event) {

	if (event.target.matches('.impt')) {
		event.target.classList.toggle('done');

	}

	if (event.target.matches('.delete')) {
		event.target.parentNode.remove();	}

});

// functions

function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));

		li.classList.add('impt');
	
	// add delete buttons to new li
	var deleteButton = document.createElement('button');
		deleteButton.appendChild(document.createTextNode('done!'));
		li.appendChild(deleteButton);
		ul.appendChild(li);
		deleteButton.classList.add('delete');

	input.value = '';
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


//callback functions

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

	











