let dialog = document.querySelector(".dialog");
let addBook = document.querySelector('.add-book');
let closeDialog = document.querySelector('.close-dialog');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
const library = [];

addBook.addEventListener('click', function(){
    dialog.showModal();
    title.value ='';
    author.value = '';
    pages.value = '';
});
closeDialog.addEventListener ('click', function(){
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    addToLibrary(titleValue, authorValue, pagesValue);
    console.log(library);
    dialog.close();
});




function Book(Title, Author, Pages){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
}

function addToLibrary(Title, Author, Pages){
    library.push(new Book(Title, Author, Pages));
}






