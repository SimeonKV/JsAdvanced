function attachEvents() {
    const loadButton = document.querySelector('#btnLoadPosts');
    const viewButton = document.querySelector('#btnViewPost');
    const body = document.querySelector('body');
    const urls = {
        posts: 'http://localhost:3030/jsonstore/blog/posts',
        comments: 'http://localhost:3030/jsonstore/blog/comments'
    }

    async function getResponseJson(url) {
        const getResponse = await fetch(url);
        const data = await getResponse.json();
        return data;
    }

    loadButton.addEventListener('click', loadOptions);

    const createOption = (value, textContent) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', value);
        optionElement.text = textContent;
        return optionElement;
    }

    async function loadOptions() {
        const data = await getResponseJson(urls.posts);
        const selectElement = body.querySelector('#posts');

        Object.entries(data).forEach(entry => {
            const optionValue = entry[0];
            const optionText = entry[1].title;
            const option = createOption(optionValue, optionText);
            selectElement.appendChild(option);

        });


    }

    viewButton.addEventListener('click', viewOption);

    async function viewOption() {
       const commentsData = await getResponseJson(urls.comments);
       const optionSelected = body.querySelector('#posts').value;
       const postData = await getResponseJson(`${urls.posts}/${optionSelected}`);

       displayPost(postData);
       displayComments(commentsData,optionSelected);
    }

    function displayPost(data){
      const postTitle = body.querySelector('#post-title');
      const postBody = body.querySelector('#post-body');
          
      postTitle.textContent = data.title;
      postBody.textContent = data.body;

    }

    function displayComments(data,optionSelected){
      const comments =  Object.values(data).filter(entry => entry.postId === optionSelected);
      

      if(comments){
          const ulComments = body.querySelector('#post-comments');
          ulComments.replaceChildren();
          
          comments.forEach(comment => {
             const liElement = document.createElement('li');
             liElement.textContent = comment.text;
             ulComments.appendChild(liElement);

          })


      }

    }

}

attachEvents();