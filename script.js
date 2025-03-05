let dialog = document.querySelector(".dialog");
let addBook = document.querySelector('.add-book');
let addDialog = document.querySelector('.add-dialog');
let closeDialog = document.querySelector('.close-dialog');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let inputCont = document.querySelector('.input-cont');
const library = [];

addBook.addEventListener('click', function(){
    dialog.showModal();
    title.value ='';
    author.value = '';
    pages.value = '';
});
addDialog.addEventListener ('click', function(e){
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    if (pagesValue < "1"){
        pages.title = 'Pages must be greater than 0';
    }
    else if (titleValue !== '' && authorValue !== '' && pagesValue !== ''){
        addToLibrary(titleValue, authorValue, pagesValue);
        console.log(library);
        dialog.close();
    }    
    
});
closeDialog.addEventListener("click", ()=>{
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






