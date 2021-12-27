function calc() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;


    if( !firstNumber || !secondNumber || isNaN(firstNumber) || isNaN(secondNumber)){
        return;
    }

    let result = Number(firstNumber) + Number(secondNumber);

    document.getElementById('sum').value = result;
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";

}