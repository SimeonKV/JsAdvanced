function extract(content) {
    let idOfElement = '#' + content;
    let targetText = document.querySelector(idOfElement).textContent;
    let text = "";


    while (true) {
        let indexOfOpeningParenthesis = targetText.indexOf('(');
        let indexOfClosingParenthesis = targetText.indexOf(')');

        if (indexOfClosingParenthesis === -1 || indexOfClosingParenthesis === -1) {

            return text;
        }

        let extractedPhrase = targetText.substring(indexOfOpeningParenthesis + 1, indexOfClosingParenthesis);
        text += extractedPhrase + "; ";

        let wholePhrase = targetText.substring(indexOfOpeningParenthesis, indexOfClosingParenthesis + 1);
        targetText = targetText.replace(wholePhrase, "");
    }

}