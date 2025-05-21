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

    // Display the result in the <p id="result">
    document.getElementById("result").innerText = output;
}

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

// Add an event listener to the button to call translate when clicked
document.getElementById("translateButton").addEventListener("click", translate);

/* ---------- Copy-to-clipboard helper ---------- */
function copyText(targetId) {
  const elem   = document.getElementById(targetId);
  const toCopy = elem.value !== undefined ? elem.value : elem.innerText;

  if (!toCopy) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(toCopy).then(() => {
    // quick visual confirmation
    const btn       = document.getElementById(`${targetId}-copy-btn`);
    const original  = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = original), 1500);
  }).catch(err => {
    console.error("Copy failed:", err);
    alert("Copy failed – see console for details.");
  });
}

