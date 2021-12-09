
function newItem(){
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

// The inputValue is appended to li but list has not yet been appended
if (inputValue === ''){
  alert('You must enter something');
}
else{
  $('#list').append(li);
  // list is appended if inputValue is returned 
};

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});


let closeButtonElement = $('<crossOutButton></crossOutButton>');
  closeButtonElement.append(document.createTextNode('X'));
  li.append(closeButtonElement);

closeButtonElement.on('click', function(){
  li.hide();
})

}


