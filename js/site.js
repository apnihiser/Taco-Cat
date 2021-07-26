//Control Function

//Receive Values
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    document.getElementById("alert").classList.remove("alert-danger");
    document.getElementById("alert").classList.remove("alert-info");

    //target userString input element and grab value after pressing btnSubmit triggering evenlistener.
    let origString = document.getElementById("userString").value;
    origString = origString.toLowerCase();

    let validateString = "";

    //Validate and format text
    for (let i = 0; i < origString.length; i++) {

        if (isAlpha(origString[i])) {

            validateString += origString[i];

        }

    }

    //Reverse String and lowercase
    let reversedString = reverseString(validateString);

    //Is Palindrom true or false
    let isPalindrome = palindromeCheck(validateString, reversedString);

    //write to the DOM
    displayResults(isPalindrome, reversedString);

}

//validate if char is alpha char
function isAlpha(char) {

    return (/[a-zA-Z]/).test(char);

}

//Logic Function Reverse String
function reverseString(stringToReverse) {

    let reversedString = "";

    for (let i = stringToReverse.length - 1; i >= 0; i--) {

        reversedString += stringToReverse[i];

    }

    return reversedString;

}


//Logic Function to determine if string is a palindrome
function palindromeCheck(forwardString, reversedString) {

    return forwardString == reversedString;

}

//Display Results

function displayResults(boolResult, reverse) {

    if (boolResult == true) {

        //write results to msg div element

        document.getElementById("heading").innerHTML = `Well Done! You entered a palindrome!`
        document.getElementById("msg").innerHTML = `Your phrase reversed is: ${reverse}`

        //reveal hidden div element
        document.getElementById("alert").classList.add("alert-info");
        document.getElementById("alert").classList.remove("invisible");

    } else {

        //write results to msg div element
        document.getElementById("heading").innerHTML = `Sorry... This isn't a palindrome. `
        document.getElementById("msg").innerHTML = `Your phrase reversed is: ${reverse}`;

        //reveal hidden div element
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alert").classList.remove("invisible");

    }
}