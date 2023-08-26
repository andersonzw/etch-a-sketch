
const container = document.querySelector(".cell-container")
const slider = document.querySelector(".slider")
const sliderOutput = document.querySelector('.output')


const drawBtn = document.querySelector("#on-off")
const rainbowBtn = document.querySelector("#rainbow")

// create grid function
function createGrid(n) {
    container.innerHTML = ''
    for (let i = 1; i<=n*n; i++){
        let cell = document.createElement("div")
        cell.classList = "cell"
        cell.setAttribute("id",i)
        container.appendChild(cell);
    }
}


// sets the default value to 16
sliderOutput.textContent = `${slider.value} x ${slider.value}`;

// update slider value
slider.oninput = () => {
    sliderOutput.textContent = `${slider.value} x ${slider.value}`
    createGrid(slider.value)
    container.style.gridTemplateColumns = `repeat(${slider.value},1fr)`
    container.style.gridTemplateRows = `repeat(${slider.value},1fr)`

    colourCell()

    
    
    
}


// colourcell function
let colourCell = () => {
    document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("mouseover", e => {
        let colour = "green"

        if (drawBtn.getAttribute("class").includes("clicked")){
            if (rainbowBtn.getAttribute("class").includes("clicked")) {
                colour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            }
         
            e.target.style.backgroundColor = colour
        }

        
    })





})
}

//clickable button
document.querySelectorAll(".clickable").forEach(button => {
    button.addEventListener("click", e =>{
        if (e.target.getAttribute("class").includes('clicked')) {
            e.target.classList.remove("clicked")
            console.log("removed");
        }
        else{
            e.target.classList.add("clicked")
            console.log("added");
        }
})

    
})
//reset
const reset = document.querySelector("#reset")

reset.addEventListener("click", () =>{
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "rgb(167, 137, 137)"
    })
})


const colour = "#37af45"
/*on load*/
createGrid(16)
colourCell()
