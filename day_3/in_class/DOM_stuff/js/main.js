console.log(document.getElementsByTagName('h1')[0].innerHTML = 'Hola Mundo!')

let colorButton = document.getElementById('color-button')

function colorChange() {
    let headerText = document.getElementsByTagName('h1')[0].innerHTML
    let textClass = document.getElementsByTagName('h1')[0]
    textClass.className != 'color-changed' ? textClass.className = 'color-changed' : textClass.className = ''
}

//Set Event Listener to colorButton 
colorButton.addEventListener('click', colorChange)

// add a button to the Document
let button = document.createElement('button')
let buttonDisplay = document.createElement('h2')

button.innerHTML = 'Super Clickable'
document.body.append(button)

button.addEventListener('mouseover', () => {
    buttonDisplay.innerHTML = 'Tell me about your day...'
    document.body.append(buttonDisplay)
})

// grab a copy of text 
const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    console.log(event)
    const selection = document.getSelection()
    console.log(selection)
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault()
})

// Create a variable for the form
const form = document.querySelector('#testDataForm')
console.log(form)

// Add event listener to the form
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let first = document.querySelector('#first-name')
    let last = document.querySelector('#last-name')
    let firstName = event.path[0][0].value
    let lastName = event.path[0][1].value
    console.log(`This came from your form: ${firstName} ${lastName}`)
})