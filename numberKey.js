const answer = document.getElementById("answer")
const desc = document.getElementById("desc")
const btn = document.getElementById("btn")
const h2 = document.getElementById("quest")
const bodyElemen = document.body

let keyNumber = Math.floor(Math.random() * 1000) + 1

btn.addEventListener("click", checkNumberKey)

function checkNumberKey() {
  let answerNumber = parseInt(answer.value)

  if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 1000) {
    desc.textContent = "❌ invalid input, please enter a number between 1 - 1000!"
    return;
  }

  if(answerNumber === keyNumber) {
    desc.innerHTML = "Yay! You did it! That’s so cool — you guessed it right!"
    desc.style.color = "green"
    bodyElemen.style.backgroundColor = "#a6a6a6"
  } else if(answerNumber <= keyNumber) {
    let selisih = keyNumber - answerNumber;
    desc.innerHTML = `its too low, you need ${selisih} more to reach the correct number `
    desc.style.color = "red"
    bodyElemen.style.backgroundColor = "#ff4d4d"
    h2.style.color = "white"
  } else if (answerNumber >= keyNumber) {
    let selisih = answerNumber - keyNumber
    desc.innerHTML = `its too high, you need to decrease by ${selisih} to reach the corret number `
    desc.style.color = "red"
    bodyElemen.style.backgroundColor = "#ff4d4d"
    h2.style.color = "white"
  }
}
