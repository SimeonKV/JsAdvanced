const loadButton = document.querySelector('#loadBooks');
loadButton.addEventListener('click', getBooks);

const tableBody = document.querySelector('table tbody');

const bookForm = document.querySelector('form');
bookForm.addEventListener('submit',handleSubmit);


async function getBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const getBooksResponse = await fetch(url);
    const books = await getBooksResponse.json();
    console.log(books);

    tableBody.replaceChildren();
    Object.keys(books).forEach(key => {
        const htmlBook = createHtmlBook(books[key],key);
        tableBody.appendChild(htmlBook);
    });


}

function createHtmlBook(book,id){
    const titleTd = ce('td',{class: 'title'},book.title);
    const authorTd = ce('td',{class: 'author'},book.author);

    const editButton = ce('button',undefined,'Edit');
    editButton.addEventListener('click',handleEdit);

    const deleteButton = ce('button',undefined,'Delete');
    deleteButton.addEventListener('click',deleteBook);

    const buttonsTd = ce('td',undefined,editButton,deleteButton);
    const tr = ce('tr',{class:'book'},titleTd,authorTd,buttonsTd);
    tr.dataset.id = id;
    return tr; 

}

function ce(tag, attributes, ...params) {
    const element = document.createElement(tag);
    const firstValue = params[0];

    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
    }


    return element;
}

async function deleteBook(e){
    e.preventDefault();

    const currentBook = e.target.closest('.book');
    const id = currentBook.dataset.id;

    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const deleteResponse = await fetch(url,{
       method: 'delete'
    });

    if(deleteResponse.status === 200){
        currentBook.remove();
    }

}

function handleEdit(e){
    e.preventDefault();

    const formHeading = bookForm.querySelector('h3');
    formHeading.textContent = 'Edit Form';

    const currentBook = e.target.closest('.book');
    const currentAuthor = currentBook.querySelector('.author');
    const currentTitle = currentBook.querySelector('.title');

    bookForm.dataset.entryId = currentBook.dataset.id;
    bookForm.dataset.isEdit = true;

    const titleInput = document.querySelector('input[name=title]');
    const authorInput = document.querySelector('input[name=author]');

    titleInput.value = currentTitle.textContent;
    authorInput.value = currentAuthor.textContent;
    

}

async function handleSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);


    if(form.dataset.isEdit !== undefined){
        editBook(formData,form.dataset.entryId);
    }else{ 
        createBook(formData);
    }

    form.reset();
}


async function createBook(formData){
    const newBook = {
        author : formData.get('author'),
        title : formData.get('title')
    }

    const url = 'http://localhost:3030/jsonstore/collections/books';
    const createResponse = await fetch(url,{
         method: 'Post',
         headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify(newBook)
    });

    const createResult = await createResponse.json();
    const createdHtmlBook = createHtmlBook(createResult,createResult._id);
    tableBody.appendChild(createdHtmlBook);
    console.log(createdHtmlBook);

}

async function editBook(formData,id){

    const editBokk = {
        title : formData.get('title'),
        author : formData.get('author')
    }

    const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const editResponse = await fetch(url,{
      method : 'Put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(editBokk)
    });

    const editResult = await editResponse.json();

    const newEntry = createHtmlBook(editResult,id);
    console.log(tableBody);
    const currentEidtedEntry = tableBody.querySelector(`tr.book[data-id="${id}"]`);

    currentEidtedEntry.replaceWith(newEntry);
    console.log(newEntry);
    console.log(editResult);


}