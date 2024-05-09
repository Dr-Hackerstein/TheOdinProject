// Function to create the grid of squares
function createGrid() {
  const container = document.querySelector(".container");

  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

// Call the function to create the grid when the page loads
window.onload = createGrid;
