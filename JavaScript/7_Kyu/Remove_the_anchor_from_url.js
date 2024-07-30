/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url) {
    // Here, I know for the fact that I have to return url in below format : www.name.com ... And if something is with that like `www.name.com?about` then return it as it is.

    return url.split('#')[0]
}

console.log(removeUrlAnchor("www.codewars.com#about"))

// Other methods.
function removeUrlAnchor(url) {
    // TODO: complete
    return url.replace(/#.*/gi, "");
}