function solve(data) {
    let systems = {};

    for (let info of data) {
        let [system, comp, sub] = info.split(' \| ');

        if (!systems.hasOwnProperty(system))
            systems[system] = {};

        if (!systems[system].hasOwnProperty(comp))
            systems[system][comp] = {};

        if (!systems[system][comp].hasOwnProperty(sub))
            systems[system][comp][sub] = sub;
    }

    Object.keys(systems)
        .sort((a, b) => Object.keys(systems[b]).length - Object.keys(systems[a]).length || a.localeCompare(b))
        .forEach(sys => {
            console.log(sys);

            Object.keys(systems[sys])
                .sort((a, b) => Object.keys(systems[sys][b]).length - Object.keys(systems[sys][a]).length)
                .forEach(com => {
                    console.log(`|||${com}`);

                    Object.keys(systems[sys][com]).forEach(sub => console.log(`||||||${sub}`));
                });
        });
}