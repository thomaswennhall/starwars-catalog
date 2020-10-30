

async function listCharacters() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()

    
    return data.results
}

function renderListItem(character) {
        const newListItem = document.createElement("li")
        newListItem.innerText = character.name
    
        
        document.querySelector(".character-list").append(newListItem)
       

           newListItem.addEventListener("click", ()=>{
                renderDetails(character)
            })
         
    }

function renderDetails(character){
    const characterName = document.querySelector(".details-character-name")
    characterName.innerHTML = character.name

    //const slicedCharacter = character.slice(2)
    //console.log(JSON.stringify(slicedCharacter)) 
    //console.log(Object.entries(character));

}

    

async function renderCharacterList(){
    const characters = await listCharacters()

    for(let character of characters){
        renderListItem(character)
    }
console.log(characters)    
}


renderCharacterList()

