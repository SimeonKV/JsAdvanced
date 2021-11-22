function solve(arr) {
    let systems = {};


    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' | ');

        if (!systems.hasOwnProperty(tokens[0])) {
            systems[tokens[0]] = new Map();
        }

        let component = systems[tokens[0]];

        if (!component.has(tokens[1])) {
            component.set(tokens[1], []);
        }

        component.get(tokens[1]).push(tokens[2]);

    }

    Object.entries(systems)
        .sort((entryOne, entryTwo) => {
            let componentsEntryOneSize = entryOne[1].size;
            let componentsEntryTwoSize = entryTwo[1].size;

            if (componentsEntryTwoSize > componentsEntryOneSize) {
                return 1
            } else if (componentsEntryTwoSize < componentsEntryOneSize) {
                return -1;
            } else {
                return entryOne[0].localeCompare(entryTwo[0]);
            }
        })
        .forEach(entry => {
            console.log(entry[0]);
            Array.from(entry[1]).
            sort((entryOne,entryTwo) => entryTwo[1].size - entryOne[1].size)
            .forEach(entry =>{
             console.log(`|||${entry[0]}`);
             entry[1].forEach(entry => console.log(`||||||${entry}`))

            })

        });


}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);