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

rows.forEach(row => {
  row.addEventListener('dragover', (e) => {
    const stone = document.querySelector('.dragging')
    e.preventDefault()
    row.appendChild(stone)
    console.log("the stone is being moved")
  })
})

const isLegal = (stones) => {
  // Your code here
  if (stones.length == 0) {
    return true;
  } else if (stones.at(-1) > stones.at(-1)) {
    console.log("This is an illegal move.");
    return false
  } else {
    return true;
  }
};