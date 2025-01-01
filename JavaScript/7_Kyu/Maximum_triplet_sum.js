/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
*/




function maxTriSum(numbers) {
   /*
    - is triplet meaning , 3 numbers next to each other.
    - i have to find sum of it. so i want to use looop for it. in which I will do the summation of next to each other number/elements to say, and then put it into elment in array, and then do the same until ....
    - Here, there is edge case. like what if the given arrays' elements are not table of 3. What I mean is that if doing summation there reamins a case in which only 2 elements are there but in the problem statment it says that triplet right? so what should I in this cases, there is also nothing given about it. so I have to come up with that.
    - they have clearly stated without duplications. Now, this does imply that there will be a case in where multiple elements are going to be same. so in such cases, what I will do is to remove it and then move onto to next element. ( this will be in loop part.) GIVE ME FEEDBACK ON THIS ABOVE PART AS RECRUITER. YEAH? What do you think, did i do right on understanding a problem?

    -- well let's moving on to the next part on how can I solve it.

    - let see initialize a variable to store result.
    - Then take a loop in which 2 parts...
    1. for loop for summation.
    2. in summation, will check if-else condition to check next element is same or not. ( here i'm confused at how can I do in loop. let see one thing came to mind is like definite series. so I was sure i will do i(0) + i(n) + 1...)
    - after that just return the result.
   */
    
    // remove duplicates...
    let uniqueNumbers = [...new Set(numbers)];

    // Sort the array in descending order...
    uniqueNumbers.sort((a, b) => b - a);

    // check if there are at least 3 nums.
    if (uniqueNumbers.length < 3) {
        throw new Error('Array must contain at least 3 nums.')
    }

    // Sum the top three nums.
    return uniqueNumbers[0] + uniqueNumbers[1] + uniqueNumbers[2];
}

// other methods....
const maxTriSum = numbers => {
    const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a)
    return a + b + c
}