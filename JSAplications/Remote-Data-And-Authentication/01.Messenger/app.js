const refreshButton = document.querySelector('#refresh');
const submitButton = document.querySelector('#submit');
const textArea = document.querySelector('textarea');


refreshButton.addEventListener('click',onRefresh);
submitButton.addEventListener('click',onSubmit);

async function onRefresh(e){
     e.preventDefault();

     const url = 'http://localhost:3030/jsonstore/messenger';
     const getResponse = await fetch(url);
     const getResult = await getResponse.json();

     textArea.value = '';
     Object.values(getResult).forEach(row =>{
         textArea.value += createStringOutput(row)
     });

}

async function onSubmit(e){
     e.preventDefault();
     let author =  document.querySelector(`input[name='author']`);
     let content = document.querySelector(`input[name='content']`);


     const url = 'http://localhost:3030/jsonstore/messenger';
     const postReponse = await fetch(url,{
          method: 'Post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            author : author.value,
            content : content.value
          })
     });

     const postResult = await postReponse.json();
     textArea.value += createStringOutput(postResult);

     author.value = '';
     content.value = '';
}

function createStringOutput(data){
    const author = data.author;
    const content = data.content;

    return `${author}: ${content}\n`;
}