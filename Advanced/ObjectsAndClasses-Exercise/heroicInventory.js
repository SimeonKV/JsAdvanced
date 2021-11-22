function solve(arr) {
    let arrOfHeros = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' / ');
        let [name, level, ...items] = tokens;
        let arrOfItems = items.join(',').split(', ');
        
     
        let hero = new Hero(name, +level,arrOfItems);

        if (checkIfHeroExists(hero, arrOfHeros)) {
          let alreadyExistsHero =  getHero(hero.name, arrOfHeros);
          
          alreadyExistsHero.items.push(...arrOfItems);


        } else {
            arrOfHeros.push(hero);
        }


    }

    function Hero(name, level, items) {
        this.name = name;
        this.level = level;
        this.items = items
    }

    function getHero(heroFirstName,arrOfHeros){

      for(let i = 0; i < arrOfHeros.length;i++){
        let loopedHero = arrOfHeros[i];
        let loopedHeroKeys = Object.keys(loopedHero);
        let loopedHeroName = loopedHero[loopedHeroKeys[0]];

        if(heroFirstName === loopedHeroName){
            return loopedHero;
        }

      } 



      return undefined;

    }

    function checkIfHeroExists(hero, arrOfHeros) {
        let heroName = hero.name;

        for (let i = 0; i < arrOfHeros.length; i++) {
            let loopedHero = arrOfHeros[i];
            let loopedHeroKeys = Object.keys(loopedHero);
            let loopedHeroName = loopedHero[loopedHeroKeys[0]];

            if (heroName === loopedHeroName) {
                return true;
            }

        }

        return false;
    }


    
    console.log(JSON.stringify(arrOfHeros));

}


solve(['Isacc / 25 / Apple, GravityGun',
    'Isacc / 25 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);