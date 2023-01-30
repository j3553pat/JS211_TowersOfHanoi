// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

const stones = document.querySelectorAll('.stone')
const rows = document.querySelectorAll(".row")



stones.forEach(stone => {
  stone.addEventListener('dragstart', () => {
    stone.classList.add('dragging')
    console.log("You Picked up a stone!")
  })

  stone.addEventListener('dragend', () => {
    stone.classList.remove('dragging')
  })
})

const checkForLegalMove =(rows, stones) => {
  if(rows === stones) {
  console.log("Great Job!")
   return true 
  } else {
    return false
  }
}

rows.forEach(row => {
  row.addEventListener('dragover', (e) => {
    const stone = document.querySelector('.dragging')
    e.preventDefault()
    if(isLegal(stone, row)) {
      row.appendChild(stone)
      alertWinner(row, stone)
    console.log("the stone is being moved")
  }
  })
})

const isLegal = (stone, row) => {
  if (row.children.length > 0) {
  if(row.lastElementChild.dataset.size > stone.dataset.size) {
    checkForLegalMove()
    return true
  } else {
    return false
  }
} else {
  return true
}
};


const alertWinner = (row, stone) => {
  console.log(row,stone)
  console.log(row.childElementCount)
  if(document.getElementById("middle-row").childElementCount === 4 || document.getElementById("top-row").childElementCount === 4) {
    alert("You Win!!!!")
  }
   }