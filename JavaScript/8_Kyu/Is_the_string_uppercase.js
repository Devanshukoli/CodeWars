/*

Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS
*/

function checkUpperCaseString(str) {
    // so my thinking is that if the given string is equal to it's answer of `str.toUpperCase()` method then it's all Caps otherwise tis' not.
    if (str === str.toUpperCase()) {
        return true
    } else {
        return false
    }
}