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

    // Display the result
    document.getElementById("result").innerText = output;
}
