function textToBinary(text) {
  if (!text) {
    return '';
  }

  let binaryString = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binaryChar = charCode.toString(2).padStart(8, '0');
    binaryString += binaryChar + ' ';
  }

  return binaryString.trim();
}

// Example usage:
const inputText = "Hello, world!";
const binaryOutput = textToBinary(inputText);
console.log(binaryOutput);
