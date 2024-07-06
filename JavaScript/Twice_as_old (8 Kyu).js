/*
Your function takes two arguments:

    1. current father's age (years)
    2. current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // for which z, dadYearsOld = 2*sonYearsOld.then retunr z.  if not then continue for finding. it
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

function twiceAsOld(a, b) {
    return a > 2 * b ? a - 2 * b : 2 * b - a;
}