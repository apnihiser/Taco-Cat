//Control Function

//Receive Values
function getValue() {

    //Set the default state to the "alert" div to invis
    document.getElementById("alert").classList.add("invisible");

    //target userString input element and grab value after pressing btnSubmit 
    //triggering evenlistener.
    let origString = document.getElementById("userString").value;
    origString = origString.toLowerCase();

    //Validate if string is empty, if so start again and provide alert to user.
    if(origString == "") {
        
        alert("Please enter something!");

     } else {

        //Continue to validate and format text
        let validatedString = "";

        for (let i = 0; i < origString.length; i++) {

            if (isAlpha(origString[i])) {

                //Once a character has been validated as an alpha char add to new 
                //string which contains only alpha chars. This will be the string 
                //used to compare as a palindrome.
                validatedString += origString[i];

            }

        }

        //Reverse validated string and lowercase
        let reversedString = reverseString(validatedString);

        //Compare the validated string and the reversed string, if they are the same 
        //then this fulfils the condition to be considered a palindrome.
        let isPalindrome = palindromeCheck(validatedString, reversedString);

        //write to the DOM
        displayResults(isPalindrome, reversedString);

    }

}

//Logic Function used to validate if char is alpha char
function isAlpha(char) {

    //Using REGEX to check if the char is Alpha. This will only work for English chars.
    return (/[a-zA-Z]/).test(char);

}

//Logic Function Reverse String
function reverseString(stringToReverse) {

    //declare variable to store reversed characters from the validated string.
    let reversedString = "";

    for (let i = stringToReverse.length - 1; i >= 0; i--) {

        //using a for loop this will count backwards from the last index, storing each 
        //into a new string starting from the 0 index.
        reversedString += stringToReverse[i];

    }

    return reversedString;

}

//Logic Function to determine if string is a palindrome
function palindromeCheck(forwardString, reversedString) {

    //simple statement comparing the two forward, and reversed strings. If they are 
    //equal then return true.
    return forwardString == reversedString;

}

//Display Results with a bit of formatting.
function displayResults(boolResult, reverse) {

    //Status message is determined by the boolResult value.
    if (boolResult == true) {

        //write status message to HTML Heading and msg DIV elements.
        document.getElementById("heading").innerHTML = `Well Done! You entered a palindrome!`;
        document.getElementById("msg").innerHTML = `Your phrase reversed is: ${reverse}`;

        //reveal hidden div element and update the background color, nice success 
        //green for a positive palindrome result.
        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.add("alert-info");
        document.getElementById("alert").classList.remove("invisible");

    } else {

        //write status message to HTML Heading and msg DIV elements.
        document.getElementById("heading").innerHTML = `Sorry... This isn't a palindrome. `;
        document.getElementById("msg").innerHTML = `Your phrase reversed is: ${reverse}`;

        //reveal hidden div element and update the background color, dire alert 
        //red for a negative palindrome result.
        document.getElementById("alert").classList.remove("alert-info");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alert").classList.remove("invisible");

    }

}