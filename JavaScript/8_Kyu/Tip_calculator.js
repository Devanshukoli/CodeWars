/*

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.

*/

function calculateTip(amount, rating) {
  const r = rating.toLowerCase();

  let percent;
  if (r === 'terrible') percent = 0;
  else if (r === 'poor') percent = 5;
  else if (r === 'good') percent = 10;
  else if (r === 'great') percent = 15;
  else if (r === 'excellent') percent = 20;
  else return 'Rating not recognised';

  return Math.ceil((amount * percent) / 100);
}

console.log(calculateTip(20, 'EXCELLENT'))