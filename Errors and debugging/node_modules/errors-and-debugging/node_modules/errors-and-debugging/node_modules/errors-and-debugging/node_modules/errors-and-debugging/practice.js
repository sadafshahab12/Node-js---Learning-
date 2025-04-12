function calulcateArea(width, height) {
  return width * height; //it should be mutliply
}

let width = 10;
let height = 5;
let area = calulcateArea(width, height);
if (area > 5) {
  console.log("The area is large");
} else {
  console.log("The area is small");
}

if (width * height > 100) {
  console.log("Area is greater than or equal to 100");
}

module.exports = calulcateArea;

