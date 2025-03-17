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
let deleteBtn = document.querySelector('.delete');
let library = [];
let currentYear = new Date().toLocaleDateString();

class Book {
    constructor (Title, Author, Pages, ReleaseYear){
        this.Title = Title;
        this.Author = Author;
        this.Pages = Pages;
        this.ReleaseYear = ReleaseYear;
    }   
}

class MyLibrary {
    constructor (){
       this.titleValue = '';
       this.authorValue = '';
       this.pagesValue = null;
       this.releaseYearValue = '';
       
    }
    showInputModal(){
       addBook.addEventListener('click', function(){
           dialog.showModal();
           title.value ='';
           author.value = '';
           pages.value = '';
           releaseYear.value = '';
   });
    }
    addToLibrary(Title, Author, Pages, ReleaseYear){
        let book = new Book(Title, Author, Pages, ReleaseYear);
        library.push(book);
    }
    closeDialogInput(){
        closeDialog.addEventListener("click", ()=>{
            dialog.close();
        });
    }
    
    displayLibrary(){
        let books = '';
        if (library.length === 0){
            let para = document.createElement("p");
            para.style = "font-size: 2rem;";
            return para.textContent = "Oops! Library Is Empty"
        }
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
                    <td>
                        <button class='delete' onclick="mylib.removeBook()">Delete</button>
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
                    <td>
                        <button class='delete'  onclick="mylib.removeBook(${i})" data-book-id = '${i}'>Delete</button>
                    </td>
                </tr>
           `;  
            }       
        });
        return books; 
    }

    addDialogInput(){
        addDialog.addEventListener ('click', (e)=>{
            this.titleValue = title.value;
            this.authorValue = author.value;
            this.pagesValue = pages.value;
            this.releaseYearValue = releaseYear.value;            
            
            if (this.titleValue !== '' && this.authorValue !== '' && this.pagesValue !== '') {
                if (this.pagesValue < "1"){
                    pages.title = 'Pages must be greater than 0';
                }
                else {
                    let book = new Book(this.titleValue, this.authorValue, this.pagesValue, this.releaseYearValue);
                    library.push(book);
                    tbody.innerHTML = this.displayLibrary();  
                    dialog.close();
                }
                
            }   
        });                 
    }
    
    removeBook(num){
        library.splice(num ,1);
        tbody.innerHTML = this.displayLibrary(); 
    }

    showBooks(){
        if (library.length === 0){
            tbody.innerHTML = this.displayLibrary();
        }
        
        this.showInputModal();
        this.addDialogInput();
        this.closeDialogInput();
    }
}

let mylib = new MyLibrary();
mylib.showBooks();







