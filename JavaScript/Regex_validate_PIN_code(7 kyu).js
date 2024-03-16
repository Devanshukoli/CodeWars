/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// My Try code
function validatePIN(pin) {
    // first check if the entered pin length is 4 or 6.
    if (pin.length === 4 || pin.length === 6) {
        // now go through for loop for checking if the entred pin only consists of `digits`.
        for (let i = 0; i < pin.length; i++) {
            if (isNaN(parseInt(pin))) {
                return false // if not digits
            }
        }
        return true // otherwise `true`
    } else {
        return false
    }
}

// method 1 : using `regex`.
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}