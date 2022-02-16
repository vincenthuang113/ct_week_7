const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers')
    console.log(response.data)
    return response.data   
}

// Create constand to hold DOM Elements
const DOM_Elements = {
    rangers: '.ranger-list',
    ranger2: '.ranger-list2'
}

// Create Ranger List HTML
const create_ranger = (id, rangerName, color, power) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}">${rangerName}</a>`
    const newHTML = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${rangerName}</h5>
        <p class="card-text">${color}</p>
        <p class="card-text">${power}</p>
    </div>
</div>`

    // 'Paste' new list item
    document.querySelector(DOM_Elements.ranger2).insertAdjacentHTML("beforeend", newHTML)
}

// Function to Load Each Ranger
const loadData = async () => {
    const rangerList = await getData();

    rangerList.forEach(ranger =>create_ranger(ranger.id, ranger.name, ranger.color, ranger['power-coin']))
}

// Function to clear data
const clearData = () =>{
    document.querySelector(DOM_Elements.ranger2).innerHTML = '';
}