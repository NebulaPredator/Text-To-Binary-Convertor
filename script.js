// Function to handle the translation between text and binary
function translate() {
    const input = document.getElementById("input").value.trim();
    let output = "";
    // Check if the input is binary (0s and 1s only)
    if (/^[01\s]+$/.test(input)) {
        // Binary to Text: Parse input binary into characters
        try {
            output = input.replace(/\s+/g, "").match(/.{1,8}/g)
                .map(bin => String.fromCharCode(parseInt(bin, 2)))
                .join("");
        } catch (error) {
            output = "Invalid binary input.";
        }
    } else {
        // Text to Binary: Convert each character into its binary representation
        output = input.split("")
            .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
            .join(" ");
    }
// Convert decimal to binary and hexadecimal
function convertFromDecimal() {
  const decimalInput = document.getElementById('decimal').value;
  const binaryInput = document.getElementById('binary');
  const hexadecimalInput = document.getElementById('hexadecimal');
  if (decimalInput !== '') {
    const decimalValue = parseInt(decimalInput, 10);
    binaryInput.value = decimalValue.toString(2);
    hexadecimalInput.value = decimalValue.toString(16).toUpperCase();
  } else {
    binaryInput.value = '';
    hexadecimalInput.value = '';
  }
}
// Convert binary to decimal and hexadecimal
function convertFromBinary() {
  const binaryInput = document.getElementById('binary').value;
  const decimalInput = document.getElementById('decimal');
  const hexadecimalInput = document.getElementById('hexadecimal');
  if (/^[01]+$/.test(binaryInput)) {
    const decimalValue = parseInt(binaryInput, 2);
    decimalInput.value = decimalValue;
    hexadecimalInput.value = decimalValue.toString(16).toUpperCase();
  } else {
    decimalInput.value = '';
    hexadecimalInput.value = '';
  }
}
// Convert hexadecimal to decimal and binary
function convertFromHexadecimal() {
  const hexadecimalInput = document.getElementById('hexadecimal').value;
  const decimalInput = document.getElementById('decimal');
  const binaryInput = document.getElementById('binary');

    // Display the result in the <p id="result">
    document.getElementById("result").innerText = output;
  if (/^[0-9A-Fa-f]+$/.test(hexadecimalInput)) {
    const decimalValue = parseInt(hexadecimalInput, 16);
    decimalInput.value = decimalValue;
    binaryInput.value = decimalValue.toString(2);
  } else {
    decimalInput.value = '';
    binaryInput.value = '';
  }
}

// Add an event listener to the button to call translate when clicked
document.getElementById("translateButton").addEventListener("click", translate);
// Convert text to binary
function convertFromText() {
  const textInput = document.getElementById('text').value;
  const binaryTextInput = document.getElementById('binaryText');
  if (textInput !== '') {
    let binaryString = '';
    for (let i = 0; i < textInput.length; i++) {
      binaryString += textInput.charCodeAt(i).toString(2).padStart(8, '0') + ' ';
    }
    binaryTextInput.value = binaryString.trim();
  } else {
    binaryTextInput.value = '';
  }
}
// Convert binary text to plain text
function convertFromBinaryText() {
  const binaryTextInput = document.getElementById('binaryText').value;
  const textInput = document.getElementById('text');
  if (/^[01\s]+$/.test(binaryTextInput)) {
    const binaryArray = binaryTextInput.trim().split(' ');
    let textString = '';
    for (let i = 0; i < binaryArray.length; i++) {
      textString += String.fromCharCode(parseInt(binaryArray[i], 2));
    }
    textInput.value = textString;
  } else {
    textInput.value = '';
  }
}
