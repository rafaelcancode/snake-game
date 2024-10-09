document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  let scoreCount = 0;
  const gameContainer = document.querySelector(".game-container");

  const layout = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const squares = [];
  const gameBorderIndices = [];
  let gameRunning = true;
  
  let snake = []; // New array to store snake body positions
  let direction = "ArrowRight"; // Initial direction
  let moveInterval;

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      square.id = i;
      gameContainer.appendChild(square);
      squares.push(square);

      if (layout[i] === 0) {
        squares[i].classList.add("game-border");
        gameBorderIndices.push(i);
      } else {
        square.classList.add("empty-space");
      }
    }
  }

  function startGame() {
    // Start the snake in the middle of the board
    const startIndex = validIndices[Math.floor(Math.random() * validIndices.length)]; // You can adjust this value as needed
    snake = [startIndex, startIndex - 1, startIndex - 2];
    
    // Add snake class to initial snake body
    snake.forEach(index => squares[index].classList.add("snake"));
    
    createFood();
    moveInterval = setInterval(moveSnakeAutomatically, 100); // Move every 100ms
  }

  function gameOver() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('visible'); // Show overlay
    clearInterval(moveInterval)
    // overlay.textContent = `Game over! your score: ${scoreCount}`
  }

  let currentDirection ="ArrowRight";
  let nextDirection ="ArrowRight";


  function moveSnakeAutomatically() {
    if (!gameRunning) return; // Add a return to exit if the game is not running
  
    // Remove the snake class from the tail
    squares[snake[snake.length - 1]].classList.remove("snake");
  
    // Shift the snake's body
    for (let i = snake.length - 1; i > 0; i--) {
      snake[i] = snake[i - 1];
    }
  
    currentDirection = nextDirection;
    let newHead;
  
    // Update head based on direction
    switch (currentDirection) {
      case "ArrowLeft":
        if (!squares[snake[0] - 1].classList.contains("game-border") && snake[0] % 28 !== 0) {
          newHead = snake[0] - 1;
        } else {
          gameOver();
          gameRunning = false;
        }
        break;
      case "ArrowRight":
        if (!squares[snake[0] + 1].classList.contains("game-border") && snake[0] % 28 !== 27) {
          newHead = snake[0] + 1;
        } else {
          gameOver();
          gameRunning = false;
        }
        break;
      case "ArrowUp":
        if (!squares[snake[0] - 28].classList.contains("game-border") && snake[0] - 28 > 27) {
          newHead = snake[0] - 28;
        } else {
          gameOver();
          gameRunning = false;
        }
        break;
      case "ArrowDown":
        if (!squares[snake[0] + 28].classList.contains("game-border") && snake[0] + 28 < 784) {
          newHead = snake[0] + 28;
        } else {
          gameOver();
          gameRunning = false;
        }
        break;
    }
  
    // Check for collision with the body
    if (newHead !== undefined && snake.includes(newHead)) {
      gameOver();
      gameRunning = false;
      return; // Exit if there's a collision
    }
  
    // Update the head position
    if (newHead !== undefined) {
      snake[0] = newHead;
      squares[snake[0]].classList.add("snake"); // Add snake class to new head position
    }
  
    // Check for food
    foodEaten();
  }
  
  

  function handleKeyPress(e) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      if (
        (e.key === "ArrowLeft" && currentDirection !== "ArrowRight") ||
        (e.key === "ArrowRight" && currentDirection !== "ArrowLeft") ||
        (e.key === "ArrowUp" && currentDirection !== "ArrowDown") ||
        (e.key === "ArrowDown" && currentDirection !== "ArrowUp")
      ) {
        nextDirection = e.key
      }
    }
  }

  function createFood() {
    let foodCurrentIndex;
    do {
      foodCurrentIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
    } while (squares[foodCurrentIndex].classList.contains("snake"));
    
    squares[foodCurrentIndex].classList.add("snake-food");
    squares[foodCurrentIndex].classList.remove("empty-space");
  }

  function foodEaten() {
    if (squares[snake[0]].classList.contains("snake-food")) {
      squares[snake[0]].classList.remove("snake-food");
      // Grow snake
      snake.push(snake[snake.length - 1]);
      scoreCount++; // Increase score
      scoreDisplay.textContent = `score: ${scoreCount}`;
      createFood();
    }
  }

  // Create the board
  createBoard();
  
  // Valid indices for the food
  const validIndices = squares.map((_, index) => index).filter(index => !gameBorderIndices.includes(index));

  // Add event listener for key presses
  document.addEventListener("keydown", handleKeyPress);

  // Start the game
  startGame();

});