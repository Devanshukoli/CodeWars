/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
    let result = nums === null || nums === undefined ? [] : nums.sort((a, b) => a - b)
    console.log(result)
}

solution([1, 44, 8293, 24])
solution([])


// Other methods.
function solution(nums) {
    if (nums === null || nums === undefined) {
        console.log([])
    } else {
        let result = nums.sort((a, b) => (a - b))
        console.log(result)
    }
}