function solve(arr) {

    arr.sort(sortFunc).forEach((element) => console.log(element));


    function sortFunc(stringOne, stringTwo) {
        const stringOneLen = stringOne.length;
        const stringTwoLen = stringTwo.length;

        if (stringOneLen > stringTwoLen) {
            return 1;
        } else if (stringOneLen < stringTwoLen) {
            return -1;
        } else {
            if (stringOne.toLowerCase() > stringTwo.toLowerCase()) {
                return 1;
            } else if (stringOne.toLowerCase() < stringTwo.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        }
    }


}

solve(['alpha', 
'beta', 
'gamma']
)