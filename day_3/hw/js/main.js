

// form
const form = document.querySelector('#racerDataForm')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let season = document.querySelector('#season')
    let round = document.querySelector('#round')
    let seasonInput = event.path[0][0].value
    let roundInput = event.path[0][1].value
    console.log(seasonInput, roundInput)

    loadData(seasonInput, roundInput)
})

// table
const getData = async (seasonInput, roundInput) =>{
    let response = await axios.get(`https://ergast.com/api/f1/${seasonInput}/${roundInput}/driverStandings.json`)
    return response.data
}

const DOM_Elements = {
    racers: '.racer-list'
}

function capitalize(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

const create_racer = (pos, givenName, nationality, sponsor, points) =>{
    const html = `
        <tr>
            <th scope="row">${pos}</th>
            <td>${givenName}</td>
            <td>${nationality}</td>
            <td>${capitalize(sponsor)}</td>
            <td>${points}</td>
        </tr>`


    document.querySelector(DOM_Elements.racers).insertAdjacentHTML("beforeend", html)
}

const loadData = async (seasonInput, roundInput) =>{
    clearData()
    const racerList = await getData(seasonInput, roundInput);
    const path = racerList.MRData.StandingsTable.StandingsLists[0].DriverStandings
    for (i=0; i < path.length; i++){
            create_racer(path[i].position,
                        (path[i].Driver.givenName + ' ' + path[i].Driver.familyName).link(path[i].Driver.url), 
                        path[i].Driver.nationality, 
                        path[i].Constructors[0].constructorId, 
                        path[i].points)
            console.log(path[i].position)
    }

}

const clearData = () =>{
    document.querySelector(DOM_Elements.racers).innerHTML = '';
}
