/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAvg(marks) {
    // Calculate the sum of all marks
    const sum = marks.reduce((total, mark) => total + mark, 0);

    // Calculate the average and round down to the nearest integer
    return Math.floor(sum / marks.length);
}
