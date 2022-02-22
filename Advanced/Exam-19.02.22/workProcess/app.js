function solve() {

    const userInputs = {
        firstName: document.querySelectorAll('input')[0],
        lastName: document.querySelectorAll('input')[1],
        email: document.querySelectorAll('input')[2],
        birthDate: document.querySelectorAll('input')[3],
        position: document.querySelectorAll('input')[4],
        salary: document.querySelectorAll('input')[5],
        totalSalary: document.querySelector('span#sum')
    }

    const hireWorker = document.querySelector('button#add-worker');

    const output = {
        table: document.querySelector('table tbody')
    }

    const newRow = (fName, lName, email, birthDate, position, salary) => {
        const row = document.createElement('tr');

        row.innerHTML = `<td>${fName}</td><td>${lName}</td><td>${email}</td><td>${birthDate}</td><td>${position}</td><td>${salary}</td><td><button class = 'fired'>Fired</button><button class = 'edit'>Edit</button></td>`;

        return row;
    }



    const validInput = (fName, lName, email, birthDate, position, salary) => fName.length !== 0 && lName.length !== 0 && email.length !== 0 && birthDate.length !== 0 && position.length !== 0 && salary.length !== 0;

    const addToTotalSalary = (oldSalary, newValue) => oldSalary += newValue;
    const subtractFromSalary = (oldSalary, currentSalary) => oldSalary -= currentSalary;
    const clearInput = () => {
        userInputs.firstName.value = '';
        userInputs.lastName.value = '';
        userInputs.birthDate.value = '';
        userInputs.position.value = '';
        userInputs.email.value = '';
        userInputs.salary.value = '';
    }

    hireWorker.addEventListener('click', (event) => {
        event.preventDefault();

        const [firstName, lastName, email, birthDate, position, salary] = [userInputs.firstName.value, userInputs.lastName.value, userInputs.email.value, userInputs.birthDate.value, userInputs.position.value, userInputs.salary.value];

        if (validInput(firstName, lastName, email, birthDate, position, salary)) {

            const row = newRow(firstName, lastName, email, birthDate, position, salary);
            output.table.appendChild(row);
            userInputs.totalSalary.textContent = addToTotalSalary(Number(userInputs.totalSalary.textContent), Number(salary)).toFixed(2);

            const editButton = row.children[6].children[1];
            editButton.addEventListener('click',onEdit)

            const fireButton = row.children[6].children[0];
            fireButton.addEventListener('click',onFire);

        }

        clearInput();

    });

    function onEdit(event){
        const currentSalary = Number(Array.from(event.target.parentNode.parentNode.children)[5].textContent);
        const totalSalary = Number(userInputs.totalSalary.textContent);
        userInputs.totalSalary.textContent = subtractFromSalary(totalSalary, currentSalary).toFixed(2);

        const childrenElements = Array.from(event.target.parentNode.parentNode.children);
        userInputs.firstName.value =  childrenElements[0].textContent;
        userInputs.lastName.value = childrenElements[1].textContent;
        userInputs.email.value = childrenElements[2].textContent;
        userInputs.birthDate.value = childrenElements[3].textContent;
        userInputs.position.value = childrenElements[4].textContent;
        userInputs.salary.value = childrenElements[5].textContent;


        event.target.parentNode.parentNode.remove();
        this.removeEventListener('click',onEdit);
    }

    function onFire(event){
        const currentSalary = Number(Array.from(event.target.parentNode.parentNode.children)[5].textContent);
        const totalSalary = Number(userInputs.totalSalary.textContent);
        userInputs.totalSalary.textContent = subtractFromSalary(totalSalary, currentSalary).toFixed(2);

        event.target.parentNode.parentNode.remove();
        this.removeEventListener('click',onFire);

    }


}
solve();