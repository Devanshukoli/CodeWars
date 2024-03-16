/** 
  Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

// My try code:
const promp1 = prompt("Enter n : ")
const promp2 = prompt("Enter m : ")

// function countBlankPage(promp1, promp2) {
//   if(promp1 > 0 && promp2 > 0) {
//     console.log("the blank pages are : " + promp1*promp2)
//   } else {
//     console.log('0')
//   }
// }

// countBlankPage(promp1, promp2)

// method 1
// const countBlankPage = (promp1, promp2) => console.log((promp1>0 && promp2>0)? promp1*promp2 : 0);

// method 2
// const countBlankPage = (promp1, promp2) => console.log((promp1<0 || promp2<0)? 0 : promp1*promp2);


// method 3
const countBlankPage = (n, m) => console.log(Math.max(0, n) * Math.max(0, m));
countBlankPage(promp1, promp2)