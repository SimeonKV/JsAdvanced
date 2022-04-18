const loadButton = document.querySelector('button.load');
loadButton.addEventListener('click', getCatches);


const catchesContainer = document.getElementById('catches');
catchesContainer.querySelectorAll('.catch').forEach(c => c.remove());

const addButton = document.querySelector('#addForm .add');
console.log(addButton);
addButton.disabled = localStorage.getItem('token') === null;
addButton.addEventListener('click', createCatch);


async function getCatches(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/data/catches';
    const getCatchesResponse = await fetch(url);
    const catches = await getCatchesResponse.json();

    console.log(catches);

    catchesContainer.querySelectorAll('.catch').forEach(c => c.remove());
    catchesContainer.append(...catches.map(c => createHtmlCatch(c)));
}

async function createCatch(e) {
    e.preventDefault();
    console.log('clicked')

    const anglerInput = document.querySelector('#addForm .angler');
    const weightInput = document.querySelector('#addForm .weight');
    const speciesInput = document.querySelector('#addForm .species');
    const locationInput = document.querySelector('#addForm .location');
    const baitInput = document.querySelector('#addForm .bait');
    const captureTimeInput = document.querySelector('#addForm .captureTime');

    let newCatch = {
        angler: anglerInput.value,
        weight: Number(weightInput.value),
        species: speciesInput.value,
        location: locationInput.value,
        bait: baitInput.value,
        captureTime: Number(captureTimeInput.value)
    };

    try {
        const createResponse = await fetch('http://localhost:3030/data/catches', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(newCatch)
        });

        if (createResponse.status !== 200) {
            const error = await createResponse.json();
            throw new Error(error.message)
        }

        const createResult = await createResponse.json();
        const createdCatch = createHtmlCatch(createResult);
        catchesContainer.appendChild(createdCatch);
        console.log(createResult);
    } catch (error) {
        alert(error.message);
    }

}

async function updateCatch(e) {
    const currentCatch = e.target.parentElement;
    const id = currentCatch.dataset.id;

    const anglerInput = currentCatch.querySelector('.angler');
    const weightInput = currentCatch.querySelector('.weight');
    const speciesInput = currentCatch.querySelector('.species');
    const locationInput = currentCatch.querySelector('.location');
    const baitInput = currentCatch.querySelector('.bait');
    const captureTimeInput = currentCatch.querySelector('.captureTime');

    let updatedCatch = {
        angler: anglerInput.value,
        weight: Number(weightInput.value),
        species: speciesInput.value,
        location: locationInput.value,
        bait: baitInput.value,
        captureTime: Number(captureTimeInput.value)
    };

    const url = `http://localhost:3030/data/catches/${id}`;
    const updateReponse = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
        },
        method: 'Put',
        body: JSON.stringify(updatedCatch)
    });

    const updateResult = await updateReponse.json();
    console.log(updateResult);




}


async function deleteCatch(e) {
    const currentCatch = e.target.parentElement;
    const id = currentCatch.dataset.id;


    const url = `http://localhost:3030/data/catches/${id}`;
    const deleteReponse = await fetch(url, {
        headers: {
            'X-Authorization': localStorage.getItem('token')
        },
        method: 'Delete',
    });

    const deleteResult = await deleteReponse.json();
    console.log(deleteResult);

    if (deleteResult.status === 200) {
        currentCatch.remove();
    }

}

function createHtmlCatch(currentCatch) {
    const anglerLabel = ce('label', undefined, 'Angler');
    const anglerInput = ce('input', {
        type: 'text',
        class: 'angler'
    }, currentCatch.angler);
    const hr1 = ce('hr');
    const weightLabel = ce('label', undefined, 'Weight');
    const weightInput = ce('input', {
        type: 'number',
        class: 'weight'
    }, currentCatch.weight);
    const hr2 = ce('hr');
    const speciesLabel = ce('label', undefined, 'Species');
    const speciesInput = ce('input', {
        type: 'text',
        class: 'species'
    }, currentCatch.species);
    const hr3 = ce('hr');
    const locationLabel = ce('label', undefined, 'Location');
    const locationInput = ce('input', {
        type: 'text',
        class: 'location'
    }, currentCatch.location);
    const hr4 = ce('hr');
    const baitLabel = ce('label', undefined, 'Bait');
    const baitInput = ce('input', {
        type: 'text',
        class: 'bait'
    }, currentCatch.bait);
    const hr5 = ce('hr');
    const captureTimeLabel = ce('label', undefined, 'Capture Time');
    const captureTimeInput = ce('input', {
        type: 'number',
        class: 'captureTime'
    }, currentCatch.captureTime);
    const hr6 = ce('hr');
    const updateButton = ce('button', {
        disabled: true,
        class: 'update'
    }, 'Update');
    updateButton.addEventListener('click', updateCatch);
    updateButton.disabled = localStorage.getItem('userId') !== currentCatch._ownerId;

    const deleteButton = ce('button', {
        disabled: true,
        class: 'delete'
    }, 'Delete');
    deleteButton.addEventListener('click', deleteCatch);
    deleteButton.disabled = localStorage.getItem('userId') !== currentCatch._ownerId;

    const catchDiv = ce('div', {
            class: 'catch'
        },
        anglerLabel, anglerInput, hr1, weightLabel, weightInput, hr2, speciesLabel, speciesInput, hr3, locationLabel, locationInput, hr4,
        baitLabel, baitInput, hr5, captureTimeLabel, captureTimeInput, hr6, updateButton, deleteButton);

    catchDiv.dataset.id = currentCatch._id;
    catchDiv.dataset.ownerId = currentCatch._ownerId;

    return catchDiv;

}

function ce(tag, attributes, ...params) {
    const element = document.createElement(tag);
    const firstValue = params[0];

    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach((key) => {
            element.setAttribute(key, attributes[key]);
        });
    }


    return element;
}