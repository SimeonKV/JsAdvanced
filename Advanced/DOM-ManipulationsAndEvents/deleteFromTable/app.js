function deleteByEmail() {
  
        let tableRows = Array.from(document.querySelector('table tbody').children);
        let inputText = document.querySelector('input[name=email]').value;
        let deletedFlag = false;

        for (let i = 0; i < tableRows.length; i++) {
            let childrenEmail = tableRows[i].children[1].textContent;


            if (inputText === childrenEmail) {
                tableRows[i].remove();
                deletedFlag = true;
            }
        }

        if (deletedFlag) {
            document.querySelector('div#result').textContent = "Deleted.";
        } else {
            document.querySelector('div#result').textContent = "Not found.";
        }
        document.querySelector('input[name=email]').value = "";

    


}