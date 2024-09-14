let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML; // Get the innerHTML of the clicked button
        
        if (buttonText === '=') {
            try {
                string = eval(string);  // Safely evaluate the string
                input.value = string;
            } catch {
                input.value = "Error";  // Handle errors
                string = '';
            }
        } else if (buttonText === 'AC') {  // Clear input on 'AC'
            string = '';
            input.value = string;
        } else if (buttonText === 'Del') {  // Delete the last character on 'Del'
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonText;  // Append button text to the string
            input.value = string;
        }
    });
});