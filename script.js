let dialog = document.querySelector(".dialog");
let addBook = document.querySelector('.add-book');
let closeDialog = document.querySelector('.close-dialog');

addBook.addEventListener('click', function(){
    dialog.showModal();
    // dialog.style = 'display: block; gap: 1rem;';
});
closeDialog.addEventListener ('click', function(){
    dialog.close();
});


const library = [];

function Book(name, author, pages){

}

function addToLibrary(){

}




