/*

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/


// let size = 2

// output: [[1, 2], [2, 4]]

// (0, 0) => 1 * 1 = 1
//   (0, 1) => 1 * 2 = 2
// and so on
// whcih leads to (row_index + 1) * (col_index + 1)

function multiplicationTable(size) {
  let emptyArr = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push((i + 1) * (j + 1)) // the pattern was that (rowIndex + 1) * (colIndex + 1)
    }
    emptyArr.push(row)
  }

  return emptyArr;
}

console.log(multiplicationTable(3))
