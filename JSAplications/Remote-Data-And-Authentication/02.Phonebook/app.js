const loadButton = document.querySelector('#btnLoad');
const createButton = document.querySelector('#btnCreate');
const ulPhoneBook = document.querySelector('#phonebook');

loadButton.addEventListener('click', onLoad);
createButton.addEventListener('click', onCreate);


async function onLoad(e) {
	e.preventDefault();

	const url = 'http://localhost:3030/jsonstore/phonebook';
	const getResponse = await fetch(url);
	const getResult = await getResponse.json();

	ulPhoneBook.replaceChildren('');
	Object.values(getResult).forEach(row => {
		ulPhoneBook.appendChild(createHTMLOuput(row));
	});
}

async function onCreate(e) {
	e.preventDefault();

	const name = document.querySelector('#person');
	const phone = document.querySelector('#phone');


	const url = 'http://localhost:3030/jsonstore/phonebook';
	const postResponse = await fetch(url, {
		method: 'Post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			person: name.value.trim(),
			phone: phone.value.trim()
		})
	});
	const postResult = await postResponse.json();
	ulPhoneBook.appendChild(createHTMLOuput(postResult));

	name.value = '';
	phone.value = '';
}

async function onDelete(e) {
	e.preventDefault();
	const parentElement = e.currentTarget.closest('.person');
	const id = parentElement.dataset.id;

	const url = `http://localhost:3030/jsonstore/phonebook/${id}`

	try {

		const deleteResponse = await fetch(url, {
			method: 'delete'
		});

		if (deleteResponse.status !== 200) {
			const error = await deleteResponse.json();
			throw new Error(error.message);
		} else {
			parentElement.remove();
		}

	} catch (error) {
		alert(error.message);
	}


}


function createHTMLOuput(data) {
	const deleteButton = createElement('button', {
		class: 'delete'
	}, 'Delete');
	deleteButton.addEventListener('click', onDelete);

	const liElement = createElement('li', {
		class: 'person'
	}, `${data.person} : ${data.phone}		`, deleteButton);
	liElement.dataset.id = data._id;

	return liElement;
}


function createElement(elementTag, attributes, text, ...params) {
	const element = document.createElement(elementTag);
	const arguments = [...params];

	if (text) {
		if (elementTag === 'input' || elementTag === 'textarea') {
			element.value = text;
		} else {
			element.textContent = text;
		}
	}

	if (arguments.length > 0) {
		element.append(...arguments);
	}


	if (isObjectEmpty(attributes)) {
		Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
	}

	return element;
}

function isObjectEmpty(obj) {
	return Object.keys(obj).length;
}