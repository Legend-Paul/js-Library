let dialog = document.querySelector(".dialog");
let addBook = document.querySelector('.add-book');
let addDialog = document.querySelector('.add-dialog');
let closeDialog = document.querySelector('.close-dialog');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let releaseYear = document.querySelector(".release-year");
let inputCont = document.querySelector('.input-cont');
let tbody = document.querySelector("tbody");
const library = [];
let currentYear = new Date().toLocaleDateString();

addBook.addEventListener('click', function(){
    dialog.showModal();
    title.value ='';
    author.value = '';
    pages.value = '';
    releaseYear.value = '';
});
addDialog.addEventListener ('click', function(e){
    let titleValue = title.value;
    let authorValue = author.value;
    let pagesValue = pages.value;
    let releaseYearValue = releaseYear.value; 
    if (pagesValue < "1"){
        pages.title = 'Pages must be greater than 0';
    }
   
    else if (titleValue !== '' && authorValue !== '' && pagesValue !== ''){
        addToLibrary(titleValue, authorValue, pagesValue, releaseYearValue);
        tbody.innerHTML = displayLibrary();
        dialog.close();
        }    
    
});


closeDialog.addEventListener("click", ()=>{
    dialog.close();
});

function Book(Title, Author, Pages, ReleaseYear){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.ReleaseYear = ReleaseYear;
}

function addToLibrary(Title, Author, Pages, ReleaseYear){
    let book = new Book(Title, Author, Pages, ReleaseYear)
    library.push(book);
}

function displayLibrary(){
    let books = '';
    library.forEach((book, i)=>{
        if (i === 0){
            books += `
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Release Year</th>
            </tr>    
            <tr>
                <td>
                    ${book.Title}
                </td>
                <td>
                    ${book.Author}
                </td>
                <td>
                    ${book.Pages}
                </td>
                <td>
                    ${book.ReleaseYear}
                </td>
            </tr>
       `;  
        }
        else {
            books += ` 
            <tr>
                <td>
                    ${book.Title}
                </td>
                <td>
                    ${book.Author}
                </td>
                <td>
                    ${book.Pages}
                </td>
                <td>
                    ${book.ReleaseYear}
                </td>
            </tr>
       `;  
        }
       
    });
    return books; 
}




