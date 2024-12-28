// Matrix Background - Generate random "0"s and "1"s in columns
const matrixBackground = document.querySelector('.matrix-background');

function generateMatrixRain() {
  const columnCount = 100; // Number of columns of falling binary
  for (let i = 0; i < columnCount; i++) {
    let span = document.createElement('span');
    let content = Math.random() < 0.5 ? '0' : '1'; // Randomly choose between 0 and 1
    span.textContent = content;
    span.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    matrixBackground.appendChild(span);
  }
}

// Start the matrix effect
generateMatrixRain();
