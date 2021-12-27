function createArticle(){
    let titleInput = document.querySelector('#createTitle');
    let textAreaInput = document.querySelector('#createContent');

    if(!titleInput.value || !textAreaInput.value){
        return;
    }

    let h3Element = document.createElement('h3');
    h3Element.textContent = titleInput.value;

    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = textAreaInput.value;

    let newArticle = document.createElement('article');
    newArticle.appendChild(h3Element);
    newArticle.appendChild(paragraphElement);

    let articles = document.querySelector('#articles');
    articles.appendChild(newArticle);

    titleInput.value = '';
    textAreaInput.value = ''
}