function solve() {
    const textToFormat = document.querySelector('#input').textContent;

    const arrOfSentances = textToFormat.split('.').filter(element => element !== '');

    let output = document.querySelector('#output');
    

    while (arrOfSentances.length > 3) {
        let firstSentance = arrOfSentances.shift();
        let secondSentance = arrOfSentances.shift();
        let thirdSentance = arrOfSentances.shift();

        let createParagraph = document.createElement('p');
        let sentancesGrouped = `${firstSentance}.${secondSentance}.${thirdSentance}.`
        createParagraph.textContent = sentancesGrouped;
        output.appendChild(createParagraph);

    }

    let remainingSentances = arrOfSentances.join('.');
    let createRemainingParagraph = document.createElement('p');
    createRemainingParagraph.textContent = remainingSentances;
    output.appendChild(createRemainingParagraph);

}