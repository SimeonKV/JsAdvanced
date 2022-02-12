function solve(face, suite) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suites = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }


    const figure = {
        face: faces[faces.indexOf(face)],
        suite: suites[suite],

        toString() {
            checkForErrors(this.face,this.suite);
            return `${this.face}${this.suite}`
        }
    }

    function checkForErrors(face,suite){
        if(face === undefined || suite === undefined)  throw new Error('Error');
    
    }

    return figure.toString();
}


console.log(solve('A','D'));