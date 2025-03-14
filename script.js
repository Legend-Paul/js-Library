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
console.log();

class DialogBox {

}


class MyLibrary {
    constructor (){
       this.titleValue = null;
       this.authorValue = null;
       this.pagesValue = null;
       this.releaseYearValue = null;
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
    
}


// addDialog.addEventListener ('click', function(e){
//     let titleValue = title.value;
//     let authorValue = author.value;
//     let pagesValue = pages.value;
//     let releaseYearValue = releaseYear.value; 
//     if (pagesValue < "1"){
//         pages.title = 'Pages must be greater than 0';
//     }
   
//     else if (titleValue !== '' && authorValue !== '' && pagesValue !== ''){
//         addToLibrary(titleValue, authorValue, pagesValue, releaseYearValue);
//         tbody.innerHTML = displayLibrary();
//         dialog.close();
//         }    
// });


// closeDialog.addEventListener("click", ()=>{
//     dialog.close();
// });




// tbody.innerHTML = displayLibrary();
// function displayLibrary(){
//     let books = '';
//     if (library.length === 0){
//         let para = document.createElement("p");
//         para.style = "font-size: 2rem;";
//         return para.textContent = "Oops! Library empty"
//     }
//     library.forEach((book, i)=>{
//         if (i === 0){
//             books += `
//             <tr>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Pages</th>
//                 <th>Release Year</th>
//             </tr>    
//             <tr>
//                 <td>
//                     ${book.Title}
//                 </td>
//                 <td>
//                     ${book.Author}
//                 </td>
//                 <td>
//                     ${book.Pages}
//                 </td>
//                 <td>
//                     ${book.ReleaseYear}
//                 </td>
//                 <td>
//                     <button class='delete' onclick="removeBook()">Delete</button>
//                 </td>
                

//             </tr>
//        `;  
//         }
//         else {
//             books += ` 
//             <tr>
//                 <td>
//                     ${book.Title}
//                 </td>
//                 <td>
//                     ${book.Author}
//                 </td>
//                 <td>
//                     ${book.Pages}
//                 </td>
//                 <td>
//                     ${book.ReleaseYear}
//                 </td>
//                 <td>
//                     <button class='delete'  onclick="removeBook(${i})" data-book-id = '${i}'>Delete</button>
//                 </td>
//             </tr>
//        `;  
//         }       
//     });
    
//     return books; 
// }

// function removeBook(num){
//     if (num === undefined){
//         library.splice(0, 1);
//     }
//     else {
//         library.splice(num ,1);
//     }
//     tbody.innerHTML = displayLibrary();
    

// }



