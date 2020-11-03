

async function listCharacters() { //Hämtar char/people-datan från API:et. 
    const response = await fetch("https://swapi.dev/api/people/")
    let data = await response.json()

    let allCharacters = [];
        for(let current of data.results){
            allCharacters.push(current)
        }

        for(let i = 0; i < 8; i++){
            let newResponse = await fetch(data.next)
            data = await newResponse.json()
            for(let current of data.results){
                allCharacters.push(current)
            }
        }


    console.log(allCharacters)    
    return allCharacters
}

function renderListItem(character) { //Skapar ett li element för varje character på vänster kort. Ger elementen en lyssnare. 
        const newListItem = document.createElement("li")
        newListItem.innerText = character.name

        
        document.querySelector(".character-list").append(newListItem)
       

           newListItem.addEventListener("click", ()=>{
                renderDetails(character)
            })
         
    }

function renderDetails(character){ //Renderar character namnen i rubriken på höger kort.  
    const characterName = document.querySelector(".details-character-name")
    characterName.innerHTML = character.name

    const characterDetails = document.querySelector(".details-character-info")
    characterDetails.innerHTML = `Height: ${character.height} <br> Mass: ${character.mass} <br> Hair color: ${character.hair_color} <br> 
    Skin color: ${character.skin_color} <br> Eye color: ${character.skin_color} <br> Birth year: ${character.birth_year} <br>  Gender: ${character.gender} <br>` 

    renderPlanetDetails(character) //Kallar på en planet funktion. 
}

    

async function renderCharacterList(){ //Lägger på character namnen på varje li på vänster kort. 
    const characters = await listCharacters()

    for(let i = 0; i < 6; i++){ //Ändrade här för att få 6 resultat på vänster kort. 
        renderListItem(characters[i+6])
        console.log(characters[i])
    }
//console.log(characters)    
}


renderCharacterList()

//Här börjar planet grejerna

async function listPlanet(character) {
    const response = await fetch(character.homeworld)
    const data = await response.json()

    return data
}

async function renderPlanetDetails(character) {
    const planet = await listPlanet(character)

    const planetName = document.querySelector(".details-planet-name")
    planetName.innerHTML = planet.name 

    const planetDetails = document.querySelector(".details-planet-info")
    planetDetails.innerHTML = `Rotation period: ${planet.rotation_period} <br> Orbital period: ${planet.orbital_period} <br>
    Diameter: ${planet.diameter} <br> Climate: ${planet.climate} <br> Gravity: ${planet.gravity} <br> Terrain: ${planet.terrain}`

}

//Sid-grejjor

const buttonRight = document.querySelector(".button-right")
buttonRight.addEventListener("click", nextPage)



