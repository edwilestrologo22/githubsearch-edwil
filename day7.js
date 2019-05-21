
// ---------------------- DAY 7 WEDNESDAY ------------------------- 

// Book Constructor

function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){

}

// Add book to List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete fa fa-times-circle"></td>

    `;
    list.appendChild(row);
}
// show alert
UI.prototype.showAlert = function(message, className){
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `Alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);
    // Timeout function after 3 sec. - depende samin
    setTimeout(function(){
        document.querySelector('.Alert').remove();
    }, 5000);

} 

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete fa fa-times-circle'){
        console.log('delete');
        // para burahin 
        target.parentElement.parentElement.remove();
    }
}


// clear field
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // get form values
    const title = document.getElementById('title').value, 
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instaniate UI
    const ui = new UI();
    // validate
    if(title === '' || author === '' || isbn === ''){
        // error alert
        ui.showAlert('🚫Please Fill Up all', 'error');
    } else {
        // 
        
   
    // Add book to list 
    ui.addBookToList(book);
    // clear Fields
    ui.clearFields(book);

    ui.showAlert('✅Book Added', 'success');

    e.preventDefault();
} 
});

// event listeners for delete

  

document.getElementById('book-list').addEventListener('click', function(e){
    // Instatiate
    const ui = new UI();

    // delete Book
    ui.deleteBook(e.target);
    // show message
    ui.showAlert('❎Book Removed', 'success');
    e.preventDefault();
});