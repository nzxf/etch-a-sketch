//container for the divs
const container = document.querySelector('#container')

//color: random
const randomColor = function () {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

//make 16x16 square divs
function squareDivs(number) {
    clear()
    for (let divs = 0; divs < (number ** 2); divs++) {
        const div = document.createElement('div')
        div.style.width = `${(100 / parseInt(number))}%`
        div.style.height = `${(100 / parseInt(number))}%`
        div.style.backgroundColor = '#f0ead2'
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = randomColor();
            // div.style.backgroundColor = 'black';
        });
        container.append(div)
    }
}

//input value
function askNumber() {
    number = prompt('Write any number (1-100)?')
    if (isNaN(number)) {
        return askNumber()
    }
    if (number > 100 || number < 1) {
        return askNumber()
    }
    return number
}

//tools: grid, clear, black, rainbow
const tools = document.querySelector('#tools')
function addGridButton() {
    const askGrid = document.createElement('button')
    askGrid.innerText = 'GRID'
    askGrid.classList.add('inputGrid')
    tools.append(askGrid)
    const inputGrid = document.querySelector('.inputGrid')
    inputGrid.addEventListener('click', function () {
        return squareDivs(askNumber())
    })
}
function addClearButton() {
    const clearButton = document.createElement('button')
    clearButton.innerText = 'RESET'
    clearButton.classList.add('toClearDisplay')
    tools.append(clearButton)
    const toClearDisplay = document.querySelector('.toClearDisplay')
    toClearDisplay.addEventListener('click', function () {
        return squareDivs(16)
    })
}
function addBlackButton() {
    const blackButton = document.createElement('button')
    blackButton.innerText = 'BLACK'
    tools.append(blackButton)
}
function addRandomButton() {
    const randomButton = document.createElement('button')
    randomButton.innerText = 'RANDOM'
    tools.append(randomButton)
}

// clear container
function clear() {
    container.replaceChildren()
}

//default
addGridButton()
addClearButton()
addBlackButton()
addRandomButton()
squareDivs(16)