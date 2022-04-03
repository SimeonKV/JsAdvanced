const ulPhonebook = document.querySelector('ul#phonebook');
const personInput = document.querySelector('#person');
const phoneInput = document.querySelector('#phone');


function attachEvents() {
    const loadButton = document.querySelector('button#btnLoad');
    loadButton.addEventListener('click', loadContacts);

    const createButton = document.querySelector('button#btnCreate');
    createButton.addEventListener('click',createContact);

    ulPhonebook.addEventListener('click',deleteContact);
    

    
    loadContacts();
}

const urls = {
    get : 'http://localhost:3030/jsonstore/phonebook',
    post : 'http://localhost:3030/jsonstore/phonebook',
    delete : 'http://localhost:3030/jsonstore/phonebook/'
}


async function loadContacts() {  
  const data = await loadData();
  displayContacts(data);
  console.log(data);

}

async function loadData() {
    const response = await fetch(urls.get);
    return  response.json();

}

function displayContacts(data){
ulPhonebook.replaceChildren('');

Object.values(data).forEach(entry => {
const liElement = document.createElement('li');
const buttonDelete = document.createElement('button');
buttonDelete.textContent = '[Delete]';
buttonDelete.setAttribute('data-id',entry._id);
liElement.textContent = `${entry.person}: ${entry.phone} `;
liElement.appendChild(buttonDelete);

ulPhonebook.appendChild(liElement);
});

}

async function createContact(){
   const contactInfo = {
       person: personInput.value,
       phone: phoneInput.value
   }

   const postObj = {
       method : 'post',
       headers : {'Content-Type' : 'application/json'},
       body: JSON.stringify(contactInfo)
   }

   await fetch(urls.post,postObj);
   personInput.value = '';
   phoneInput.value = '';

}

async function deleteContact(event) {
    const id = event.target.dataset.id;

    if(id === undefined){
        return;
    }

    await fetch(`${urls.delete}${id}`,{
        method : 'delete'
    });

    loadContacts();
}

attachEvents();