/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/
getSuperHero = (name,alterEgoName,isVillain,age) => {
    const superHero = {
        name,
        alterEgoName,
        isVillain,
        age
    }
    return superHero
}
console.log(getSuperHero('Batman', 'Bruce Wayne', false, 31));
console.log("---------updateSuperHero-------");


/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/
const batman = {
    name: 'Batman',
    alterEgoName: 'Bruce Wayne',
    isVillain: false,
    age: 31
}

UpdatedSuperHero = (obj, keyName, keyValue) => {
    obj[keyName] = keyValue;
    
}
UpdatedSuperHero(batman, 'likesBats', true);
console.log(batman);



/*
    @func updateSuperHeroAction
    @param {object} superHero
    @param {string} actionName
    @param {function} actionFunc 
    @returns {object}
    @desc - takes an existing superhero object
            and adds a new FUNCTION property to it 
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'saySomething', function saySomething() {
            return "I'm Batman";
        });
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            }
        }   
*/
function updateSuperHeroAction(superHero,actionName,actionFunc){
    superHero[actionName] = actionFunc
}

updateSuperHeroAction(batman, 'saySomething', function saySomething() {
    return "I'm Batman";
});

console.log(batman);

/*
    @func updateSuperHeroInBulk
    @param {object} superHero
    @param {array} properties
    @returns {object}
    @desc - takes an ARRAY of properties and values
            and applies them to the superhero object
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, [
            'saySomething', 
            function saySomething() {
                return "I'm Batman";
            },
            'likesBats',
            true,
            'isRich',
            true
        ]);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            },
            likesBats: true,
            isRich: true
        }     
*/

updateSuperHeroInBulk = (superHero,properties) =>{
    for(let i =0;i<properties.length;i+=2){
        key = properties[i]
        value = properties[i+1]
        superHero[key] = value 
    }
}

updateSuperHeroInBulk(batman, [
    'saySomething', 
    function saySomething() {
        return "I'm Batman";
    },
    'likesBats',
    true,
    'isRich',
    true
]);

console.log(batman);
