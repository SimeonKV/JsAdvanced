 async function solution() {
     const bodyElement = document.querySelector('body');
     bodyElement.innerHTML = '';

     function createArticleTemplete(title, content) {
         const divElement = document.createElement('div');
         divElement.classList.add('accordion');

         const accordionTemplete = `
    <div class="head">
        <span>${title}</span>
        <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    </div>
    <div class="extra">
        <p>${content}</p>
    </div>`;


         divElement.innerHTML = accordionTemplete;
         bodyElement.appendChild(divElement);

         const button = divElement.querySelector('button');
         button.addEventListener('click', function () {
               if(this.textContent.toUpperCase() === 'MORE'){
                   divElement.querySelector('.extra').style.display = 'block';  
                   this.textContent = 'Less';
               }else if(this.textContent.toUpperCase() === 'LESS'){
                divElement.querySelector('.extra').style.display = 'none';  
                this.textContent = 'More';
               }
         });

     }

     const url = `http://localhost:3030/jsonstore/advanced/articles/details/`;
     const getResponse = await fetch(url);
     const dataJSON = await getResponse.json();


     Object.values(dataJSON).forEach(({
         title,
         content
     }) => createArticleTemplete(title, content));

 }

 solution();