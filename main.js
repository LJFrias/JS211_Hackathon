//Create a function to find a ramp number and exits out of function if it is not
//Creat a function to cycle through the number finding the ramp numbers
//Return the amount of ramp numbers found
//Make it work in GUI

const numOfRampNumbers = (num) => {
    let counter = 0
    for(let i=0; i<num; i++) {
        let number = i.toString().split("").map(Number)
        let isRamp = true
        for(let l=0; l <= number.length-1; l++){
            if(number[l] > number[l+1]) {
                isRamp = false
            }
        }
        if(isRamp) {
            counter++
        }
    }
    console.log(counter)
    return counter
}

let input = '';

const textInput = document.getElementById("num-input");

const button = document.getElementById("button");

const textOutput = document.getElementById("result");

textInput.addEventListener('keyup', (event) => {
  input = event.target.value

  console.log(input)
})

button.addEventListener('click', () => {

  let number = numOfRampNumbers(input)

  textOutput.innerText = `There are ${number} total ramp numbers less than ${input}.`

  console.log(numOfRampsBelow(input))
  console.log(`There are ${number} total ramp numbers less than ${input}`)
})

