function factory(library, orders) {
    const productsArr = [];

    for (let i = 0; i < orders.length; i++) {
        const finishedProduct = {};

        const templateProduct = orders[i];
        const productName = templateProduct.template.name;
        let templateParts = templateProduct.parts;

        finishedProduct.name = productName;

        templateParts.forEach(templatePart => {
            if (library.hasOwnProperty(templatePart)) {
                finishedProduct[templatePart] = library[templatePart];
            }
        });

        productsArr.push(finishedProduct);

    }

    return productsArr;

}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function () {
        console.log(`${this.name} is playing \'${track}\' by ${artist}`);
    }
}

const orders = [{
        template: {
            name: 'ACME Printer'
        },
        parts: ['print']
    },
    {
        template: {
            name: 'Initech Scanner'
        },
        parts: ['scan']
    },
    {
        template: {
            name: 'ComTron Copier'
        },
        parts: ['scan', 'print']
    },
    {
        template: {
            name: 'BoomBox Stereo'
        },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);