function result(arr, criteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for(let element of arr){
        [destinatinon,price,status] = element.split('|');
        price = Number(price);
        tickets.push(new Ticket(destinatinon,price,status));
    }

    const mySortFunction = {
        'destination': (a,b) => a.destination.localeCompare(b.destination),
        'price':(a,b) => a.price - b.price,
        'status': (a,b) => a.status.localeCompare(b.status)
    }

  return tickets.sort(mySortFunction[criteria]);
}