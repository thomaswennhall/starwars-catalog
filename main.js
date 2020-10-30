

async function getData() {
    const data = await fetch("https://swapi.dev/api/people/")
    const peopleData = await data.json()

    return peopleData
}


getData() // vi hämtar datan från asyncfunktionen 
    .then(peopleData => {
        
        // iterera över datan och skapa list items
        peopleData.results.forEach(character => {
            const newListItem = document.createElement("li")
            newListItem.innerText = character.name

            document.querySelector(".character-list").append(newListItem)
        });

        /* for(let i = 0; i < 5; i++) {
            document.querySelector(".character-list").append(newListItem)
        } */
        
        console.log(peopleData);
    })


    /* .then(peopleData => {
        const listItems = document.querySelectorAll("li")
        
        listItems.forEach(item => {
            item.addEventListener("click", showInfo())
        });

        function showInfo() {
            listItems[2].innerText = "de funka"
        }
       
    }); */

/* 
1. ska kunna ändra mellan sidorna på charactercard
    och allt vad det innebär
2. list items ska genereras med datans antal 
*/