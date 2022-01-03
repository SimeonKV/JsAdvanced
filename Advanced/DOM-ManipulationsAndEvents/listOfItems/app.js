function addItem() {

    let inputValueText = document.querySelector('input#newItemText').value;

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputValueText;

    let getUlElement = document.querySelector('ul#items');
    getUlElement.appendChild(newLiElement);
    document.querySelector('input#newItemText').value = "";
}