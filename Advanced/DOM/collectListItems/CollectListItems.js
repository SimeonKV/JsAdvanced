function extractText(){
    let ul = document.getElementById('items');
    let ulChildren = ul.children;
    let collectionOfChildren = Array.from(ulChildren);

    let textArea = document.getElementById('result');

    for(let i = 0 ; i < collectionOfChildren.length;i++){
        let text = collectionOfChildren[i].textContent;
        textArea.textContent += text + '\n';

    }



}