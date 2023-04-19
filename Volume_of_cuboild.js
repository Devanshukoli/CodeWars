/** 
  Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

// my try code.
const length = Number(prompt("Enter the num1 : "))
const width = Number(prompt("Enter the num2 : "))
const height = Number(prompt("Enter the num3 : "))

const findVolume = (length, width, height) => {
  let v = length * width * height
  console.log("volume is : ", v)
}

findVolume(length, width, height)

// method 1
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    var l = parseFloat(length);
    var w = parseFloat(width);
    var h = parseFloat(height);

    if(isNaN(l) || isNaN(w) || isNaN(h)) return 0;
    if(l<=0 || w<=0 ||h <= 0)  return 0;
    
    return l*w*h;
  };

  return Kata;

})();

// method 2:
const Kata = {
  getVolumeOfCuboid : (length, width, height) => length * width * height
}

//method 3: 
const Kata = {
  getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}