/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
    // so what i see in first glances
    // 1) starting from index 0, in given string every letter is extracted and then done capitalize...
    // 2) while at it, take index in account, and add lowercase letter equal to their index position like ab => A-Bb
    // 3) If I want to solve this problem then I will start with, first spliting the string, then taking indexing in matter, then doing the operation of capitalizing and adding small letter according to their index position. Then joint the splited string. And then return it.
    return s.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-')
}

console.log(accum('abcd'))
