function solve(arr) {

    let evenIndexElements = arr.reduce((acc,currentElement,index) =>{
       if(index % 2 === 0){
           acc.push(currentElement);
       }
       return acc;
    },[]);

    console.log(evenIndexElements.join(' '));
}


solve([20,30,40]);