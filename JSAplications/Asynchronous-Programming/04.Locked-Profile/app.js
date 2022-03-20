async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const getResponse = await fetch(url);
    const usersData = await getResponse.json();
    console.log(usersData);
    
    const mainElement = document.querySelector('#main');
    mainElement.innerHTML = '';

    Object.values(usersData).forEach(({username,age,email}) => mainElement.appendChild(createProfile(username,age,email)));

}

function createProfile(username,age,email){
    const divElement = document.createElement('div');
    divElement.classList.add('profile');

    const profileTemplate = `
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${username}" disabled readonly />
				<div class="hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${age}" disabled readonly />
				</div>
				
				<button>Show more</button>
    `;

    divElement.innerHTML = profileTemplate;

    const buttonElement = divElement.querySelector('button');

    buttonElement.addEventListener('click',function(){
        const buttonTextContent = this.textContent;
        const hiddenFields = divElement.querySelectorAll('.hiddenInfo > *');
        
        if(isProfileLocked()) return;

        if(buttonTextContent === 'Show more'){
            Array.from(hiddenFields).forEach( childElement => childElement.style.display = 'block');
            this.textContent = 'Hide it'
        }else if(buttonTextContent === 'Hide it'){
            Array.from(hiddenFields).forEach( childElement => childElement.style.display = 'none');
            this.textContent = 'Show more';
        }

    });

    return divElement;

    function isProfileLocked(){
        return divElement.querySelector('input[type="radio"][value="lock"]').checked;
        
    }
}