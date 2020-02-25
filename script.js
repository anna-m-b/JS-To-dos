const button = document.getElementsByClassName('enter');
const input = document.getElementsByClassName('userinput');
const ul = document.querySelectorAll('.list-wrap');
const li = document.getElementsByTagName('li');
const list = document.querySelectorAll('ul > li');
const listLength = list.length

// click event listeners (solution instead of using loops)

document.addEventListener('click', function(event) {

    if (event.target.matches('.l-item')) {
        event.target.classList.toggle('done');

    }

    if (event.target.matches('.delete')) {
        event.target.parentNode.remove();
    }

    if (event.target.matches('.enter')) {
        const day = event.target.id;
        
        const list = selectList(day);

        const newListItem = createListElement();

        newListItem.appendChild(document.createTextNode(list.whichInput.value));
        list.whichList.appendChild(newListItem);

        const addButton = createDoneButton();

        newListItem.appendChild(addButton);

        list.whichInput.value = '';

        
    }

     
});

document.addEventListener('keypress', function(event) {
    if (event.target.matches('.enter')){
        addListAfterKeypress();
    }
});

function selectList(day) {
    let whichList;
    let whichInput;
    switch(day) {
        case "mon":
            whichList = document.getElementById('monList');
            whichInput = document.getElementById('monIn');
            break;
        case "tues":
            whichList = document.getElementById('tuesList');
            whichInput = document.getElementById('tuesIn');
            break;
        case "weds":
            whichList = document.getElementById('wedsList');
            whichInput = document.getElementById('wedsIn');
            break;
        case "thurs":
            whichList = document.getElementById('thursList');
            whichInput = document.getElementById('thursIn');
            break;
        case "fri":
            whichList = document.getElementById('friList');
            whichInput = document.getElementById('friIn');
            break;
        default: console.log('error');
    }
    
    return { 
        whichInput, whichList
    };

    console.log(whichInput, whichList);
    
    
}   


function createListElement(){
    const li = document.createElement('li');
    li.className = 'l-item list';

    return li;
}


function createDoneButton() {

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('done!'));

    return deleteBtn;
}



// function createListElement() {

//     selectList();

//      {

//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(whichInput.value));
//         li.classList.add('l-item');
//         li.classList.add('list');

//         var deleteButton = document.createElement('button');
//         deleteButton.appendChild(document.createTextNode('done!'));
//         li.appendChild(deleteButton);
//         deleteButton.classList.add('delete');

//         whichList.appendChild(li);


//         whichInput.value = '';
//     }
// }

// function addListAfterClick() {
     
//         if (inputLength() > 0) {
//             createListElement();

//         }
//     }


function addListAfterKeypress(event) {
     {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();

        }
    }
}

// button[i].addEventListener('click', addListAfterClick);

// input[i].addEventListener('keypress', addListAfterKeypress);


// // // inputLengths for each day

// // function inputLength0() {

// //     return input[0].value.length;
// // }

// // function inputLength1() {

// //     return input[1].value.length;
// // }

// // function inputLength2() {

// //     return input[2].value.length;
// // }

// // function inputLength3() {

// //     return input[3].value.length;
// // }

// // function inputLength4() {

// //     return input[4].value.length;
// // }

// // with loop




// function createListElement0() {

//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input[0].value));
//     li.classList.add('l-item');
//     li.classList.add('list');
//     // why did the style stop working?

//     // add delete buttons to new li
//     var deleteButton = document.createElement('button');
//     deleteButton.appendChild(document.createTextNode('done!'));
//     li.appendChild(deleteButton);
//     deleteButton.classList.add('delete');

//     list0.appendChild(li);


//     input[0].value = '';
// }


// function addListAfterClick0() {
//     if (inputLength0() > 0) {
//         createListElement0();

//     }
// }


// function addListAfterKeypress0(event) {
//     if (inputLength0() > 0 && event.keyCode === 13) {
//         createListElement();

//     }

// }

// function createListElement1() {

//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input[1].value));
//     li.classList.add('l-item');
//     li.classList.add('list');
//     // why did the style stop working?

//     // add delete buttons to new li
//     var deleteButton = document.createElement('button');
//     deleteButton.appendChild(document.createTextNode('done!'));
//     li.appendChild(deleteButton);
//     deleteButton.classList.add('delete');

//     list1.appendChild(li);


//     input[1].value = '';
// }


// function addListAfterClick1() {
//     if (inputLength1() > 0) {
//         createListElement1();

//     }
// }


// function addListAfterKeypress1(event) {
//     if (inputLength1() > 0 && event.keyCode === 13) {
//         createListElement1();

//     }

// }


//callback functions



// button[1].addEventListener('click', addListAfterClick1);

// input[1].addEventListener('keypress', addListAfterKeypress1);


// add delete buttons to existing li 

for (var i = 0; i < list.length; i++) {
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('done!'));
    list[i].appendChild(deleteButton);
    deleteButton.classList.add('delete');

}
