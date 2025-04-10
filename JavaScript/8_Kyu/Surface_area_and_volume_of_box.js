/*
Write a function that returns the total surface area and volume of a box.

The given input will be three positive non-zero integers: width, height, and depth.

The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).

*/


function getSize(width, height, depth) {
    const totalSurfaceArea = 2 * ((depth * width) + (depth * height) + (width * height))
    const totalVolume = width * height * depth;

    return [totalSurfaceArea, totalVolume]
}