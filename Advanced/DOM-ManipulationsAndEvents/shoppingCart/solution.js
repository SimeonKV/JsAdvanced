function solve() {
   let shoppingCartDiv = document.querySelector('div.shopping-cart');
   let chekcoutElement = document.querySelector('button.checkout')


   shoppingCartDiv.addEventListener('click', addProduct);
   chekcoutElement.addEventListener('click', sumPrice);

   let productsAndPrices = new Map();

   function addProduct(event) {
      if (event.target.tagName == 'BUTTON' && event.target.classList.contains('add-product')) {
         const parentElement = event.target.parentNode.parentNode;
         const product = parentElement.querySelector('div.product-title').textContent;
         const price = Number(parentElement.querySelector('div.product-line-price').textContent);
         productsAndPrices.set(product,price);

         let textAreaElemet = document.querySelector('textarea');
         textAreaElemet.disabled = false;
         textAreaElemet.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
         textAreaElemet.disabled = true


      }

   }


function sumPrice(event){
     let products = Array.from(productsAndPrices.keys()).join(', ');
     let price = Array.from(productsAndPrices.values()).reduce((a,b) => a + b,0);


     let output = `You bought ${products} for ${price.toFixed(2)}.\n`;
     document.querySelector('textarea').textContent += output;


    const checkoutButton = event.target.disabled = true;
    const parentElement = event.target.parentNode; 

    const addButtons = Array.from(parentElement.querySelectorAll('button.add-product'));

    for(let i = 0;i < addButtons.length;i++){
       addButtons[i].disabled = true;
    }
    
     

}

}