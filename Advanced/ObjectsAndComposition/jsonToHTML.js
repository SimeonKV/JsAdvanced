function solve(jsonString) {
    let arr = JSON.parse(jsonString);
    let table = []
    let hasNoHeader = true;
    


    for (let i = 0; i < arr.length; i++) {
        let objInfo = arr[i];
        let tableHeaderRow = Object.keys(objInfo);
        let tableRowInfo = Object.values(objInfo);

        
        if (hasNoHeader) {
            table.push(addHeaderRow(tableHeaderRow));
            hasNoHeader = false;
        }

       table.push(addRowInfo(tableRowInfo));

    }

  
    table.unshift('<table>');
    table.push('</table>');

    console.log(table.join('\n'));

    function addHeaderRow(tableHeaderRow){
            let name = tableHeaderRow[0];
            let score = tableHeaderRow[1];
            let grade = tableHeaderRow[2];

         return `   <tr><th>${name}</th><th>${score}</th><th>${grade}</th></tr>`   
    }

    function addRowInfo(tableRowInfo){
        let name = tableRowInfo[0];
        let score = tableRowInfo[1];
        let grade = tableRowInfo[2];

        return `    <tr><td>${name}</td><td>${score}</td><td>${grade}</td></tr>`;
    }


}


solve(`[{"Name":"Pesho","Score" : 4, "Grade" : 8},{"Name" : "Gosho","Score" : 5,"Grade" : 8},{"Name":"Angel","Score" : 50,"Grade" : 10}]`);