// HTML variables
const cardContainer = document.querySelector('.cards-container');
const displayFormBtn = document.querySelector('.displayFormBtn');
const dialog = document.querySelector('.addBook-dialog');
const closeBtn = document.querySelector('.addBook-closeBtn');
const submitBookBtn = document.querySelector('#addBook-submit');

// Create a library object that can store book objects
const library = [];

// Create constructor function on which new books are made
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function() {
    console.log('ok');
}

// Create function that populates the page with book object cards (html)
function displayBooks() {
    library.forEach((book, index) => {

        // Create the delete button
        const delBookBtnHTML = `<button class="delBookBtn">Delete</button>`;

        // Create toggle read button
        const toggleReadHTML = `<button class="toggleRead">Toggle read</button>`;

        cardContainer.insertAdjacentHTML('beforeend', 
        `
        <div class="card" data-index="${index}">
        <h3 class="title">Title: ${book.title}</h3>
        <p class="author">Author: ${book.author}</p>
        <p class="pages">Pages: ${book.pages}</p>
        ${toggleReadHTML}
        <p class="readBook">Book read: ${book.read}</p>
        ${delBookBtnHTML}
        </div>`
        );

        // Add event listener to delete button
        const delBookBtn = document.querySelector(`.delBookBtn`);
        delBookBtn.addEventListener('click', deleteBook);

        // Add event listener to toggle read
        const toggleRead = document.querySelector('.toggleRead');
        toggleRead.addEventListener('click', toggleReadFn);
    });
}

// Deletes book from library
function deleteBook(e) {
    bookIndex = e.target.parentNode.dataset.index;
    delete library[bookIndex];
    
    //Clear HTML
    cardContainer.innerHTML = '';
    
    // Populate HTML book cards
    displayBooks();
}

// Toggles between read or unread
function toggleReadFn(e) {
    bookIndex = e.target.parentNode.dataset.index;
    // Change read status in library
    
    // Run function to alter book's read status
    changeRead();

    // Clear old HTML 
    cardContainer.innerHTML = '';

    // Populate HTML cards with updated library
    displayBooks();
    
}

// Function to change read status on book objects
function changeRead() {
    const curStatus = library[bookIndex].read;
    if (curStatus === 'yes') {
        library[bookIndex].read = 'no';
    } else {
        library[bookIndex].read = 'yes';
    }
}

// Listen for new book inputs by user
displayFormBtn.addEventListener('click', displayForm);
// Display form to add book
function displayForm() {
    dialog.style.display = 'flex';
}
// Dialog close button
closeBtn.addEventListener('click', () => dialog.style.display = 'none');

// Listen for new book input
submitBookBtn.addEventListener('click', bookSubmission);

// Receive and store inputs
function bookSubmission(e) {
    e.preventDefault();
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    const bookForm = document.querySelector('.addBook-form');
    const inputRead = bookForm.elements['read'].value;

    // Make new book object with constructor
    const newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);

    // Place newly made book in library
    library.push(newBook);

    // Clear form
    bookForm.reset();

    // Clear HTML
    cardContainer.innerHTML = ``;

    // Close dialog
    dialog.style.display = 'none';

    // Display HTML with new library[]
    displayBooks();
}

// Cards will also have a button that deletes the book object, and html card
// Delete object



// Each time a book is deleted, the library and html are updated





















































// // Library array
// const library = [];

// // Book constructor function
// function Book (title, author, pages, readBook) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readBook = readBook;
// }

// // Add book to library array
// function addBookToLibrary(book) {
//    library.push(book);
// }

// // Create HTML cards
// function createHTMLCards () {
//     const cardContainer = document.querySelector('.cards-container');


//     library.forEach((book, index) => {

//         // Create delete button with eventlistener attached
//         const delBookBtn = ` <button data-index="${index}" class="delBookBtn">Delete</button>`;

//         cardContainer.insertAdjacentHTML('beforeend', 
        // `<div data-card-index="${index}" class="card">
        // <h3 class="title">${book.title}</h3>
        // <p class="author">${book.author}</p>
        // <p class="pages">${book.pages}</p>
        // <p class="readBook">Book read: ${book.readBook}</p>
        // ${delBookBtn}
        // </div>`
//         );

//         // Add eventlistener
//         const delBook = document.querySelectorAll(`[data-index="${index}"]`);
//         // delBook is a nodelist so I have to specify the index
//         delBook[index].addEventListener('click', function(e) {
//             // Grab book index
//             const bookIndex = e.target.attributes['data-index'].value;

//             // Delete book from library
//             delete library[bookIndex];

//             // Delete HTML card
//             const bookCard = document.querySelectorAll(`[data-card-index="${index}"]`);
//             bookCard[index].remove();

//         });

//     });
// }


// // Add new book button
// const addBookBtn = document.querySelector('.addBookBtn');

// // dialog
// const dialog = document.querySelector('.addBookDialog')

// // form
// const bookForm = document.querySelector('.addBookForm');

// // form data
// const titleInput = document.querySelector('#title')
// const authorInput = document.querySelector('#author')
// const pagesInput = document.querySelector('#pages')

// // submit btn
// const submitBtn = document.querySelector('#submitNewBook');

// // Listen for click on new book button, revealing dialog on page
// addBookBtn.addEventListener('click', function() {
//     dialog.style.display = 'flex';
// });


// // Submit new book to library
// submitBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     const title = titleInput.value;
//     const author = authorInput.value;
//     const pages = pagesInput.value;
//     const readVal = bookForm.elements["readBook"].value; 

//     // Create new book object
//     const newBook = new Book(title, author, pages, readVal);

//     // Push object to library array
//     library.push(newBook);

//     // Hide dialog
//     dialog.style.display = 'none';

//     // Populate html cards on page
//     createHTMLCards();
// });

