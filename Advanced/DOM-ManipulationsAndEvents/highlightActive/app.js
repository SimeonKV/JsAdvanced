function focused() {
   let inputFields = Array.from(document.querySelectorAll('input'));


   for(let i = 0; i < inputFields.length; i++){
       let inputField = inputFields[i];

       inputField.addEventListener('focus',onFocus);
       inputField.addEventListener('blur',onBlur);
   }


   function onFocus(event){
       event.target.parentNode.classList.add('focused');
   }

   function onBlur(event){
       event.target.parentNode.classList.remove('focused');
   }

}