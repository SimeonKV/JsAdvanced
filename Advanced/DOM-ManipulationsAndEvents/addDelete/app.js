function addItem() {
    let inputTextValue = document.querySelector('input#newItemText').value;
    let ulElement = document.querySelector('ul#items');

    let anchorTag = document.createElement('a');
    anchorTag.textContent = '[Delete]';
    anchorTag.href = '#';


    anchorTag.addEventListener('click', onClick);

    let newLi = document.createElement('li');
    newLi.textContent = inputTextValue;
    newLi.appendChild(anchorTag);


    ulElement.appendChild(newLi);

    document.querySelector('input#newItemText').value = '';

    function onClick() {

        let parentElement = document.querySelector('a').parentNode;
        parentElement.remove();


    }



}