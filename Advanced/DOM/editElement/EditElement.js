function editElement(element,replacee,replacement){
    let oldText = element.textContent;
    
    while(oldText.includes(replacee)){
       oldText = oldText.replace(replacee,replacement);
    }

    const newText = oldText;
    element.textContent = newText;
}