function sumTable() {
    let tableChildren = document.querySelector('table tbody').children;
    let childrenAsArr = Array.from(tableChildren);
    let totalCost = 0;

    for (let i = 1; i < childrenAsArr.length - 1;i++){
        let element = childrenAsArr[i];
        let cost = Number(Array.from(element.children)[1].textContent);
        totalCost += cost;
    }

    document.querySelector('table tbody tr #sum').textContent = totalCost;

}