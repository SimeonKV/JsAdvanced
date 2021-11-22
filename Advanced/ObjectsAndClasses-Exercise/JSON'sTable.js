function solve(arr) {
let result = ['<table>\n']

    for (let i = 0; i < arr.length; i++) {
        

        let objPerson = JSON.parse(arr[i]);
        let name = objPerson.name;
        let position = objPerson.position;
        let salary = +objPerson.salary;
        
        result.push(`\t<tr>\n\t\t<td>${name}<\/td>\n\t\t<td>${position}<\/td>\n\t\t<td>${salary}<\/td>\n\t</tr>\n`);
        


    }

    result.push('<\/table>')


    console.log(result.join(""));
}


solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);