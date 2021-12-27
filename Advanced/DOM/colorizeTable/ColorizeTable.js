function colorize() {
    let table = document.getElementsByTagName('table')[0];
    let lists = table.children[0].children;


    for (let i = 1; i < Array.from(lists).length; i += 2) {
        let element = Array.from(lists)[i];
        element.style.backgroundColor = 'Teal';

    }


}