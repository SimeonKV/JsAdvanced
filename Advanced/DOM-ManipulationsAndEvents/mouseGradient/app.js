function attachGradientEvents(){
    let gradientBox = document.querySelector('div#gradient-box');
   
    gradientBox.addEventListener('mousemove',mouseMove);

    function mouseMove(event){
        

        let currentPostion = Number(event.offsetX);
        let elementWidth = Number(event.target.clientWidth);
        let inPercent = Math.floor((currentPostion / elementWidth) * 100);

        document.querySelector('div#result').textContent = `${inPercent}%`;
    }


}