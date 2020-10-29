

async function getData() {
    const data = await fetch("https://swapi.dev/api/people/")
    const peopleData = await data.json()

    return peopleData
}

getData() // vi hämtar datan från asyncfunktionen 
    .then(peopleData => {
        
        let i = 0 
        listItems.forEach(listItem => {
            listItem.innerText = peopleData.results[i].name
            i++
        });
        console.log(peopleData);
    });

const listItems = document.querySelectorAll("li")

