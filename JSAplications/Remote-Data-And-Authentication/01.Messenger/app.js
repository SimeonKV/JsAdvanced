function attachEvents() {
    const refreshBttn = document.querySelector('input#refresh');
    refreshBttn.addEventListener('click',loadMesseges);

    const submitBttn = document.querySelector('input#submit');
    submitBttn.addEventListener('click',onSubmit);
    loadMesseges();
}

const author = document.querySelector('input[name=author]');
const content = document.querySelector('input[name=content]');
const textArea = document.querySelector('textarea');

async function loadMesseges(){
    const url = 'http://localhost:3030/jsonstore/messenger';
    

    const response = await fetch(url);
    const dataJson = await response.json();
    textArea.value = '';

  

 
    Object.values(dataJson)
    .map(entry => `${entry.author}: ${entry.content}\n`)
    .forEach(entry => textArea.value += entry);
}

async function onSubmit(){
   const url = 'http://localhost:3030/jsonstore/messenger';
    


   const postObj = {
       method: 'post',
       headers: {
           'Content-Type' : 'application/json'
       },
       body : JSON.stringify( {
           author : author.value,
           content : content.value
       }
       )
   }

   const response = await fetch(url,postObj);

   loadMesseges();
   author.value = '';
   content.value = '';
}


attachEvents();