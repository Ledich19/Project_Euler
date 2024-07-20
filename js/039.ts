// Если p - периметр прямоугольного треугольника с целочисленными длинами сторон {a,b,c},
// то существует ровно три решения для p = 120:
// {20,48,52}, {24,45,51}, {30,40,50}
// Какое значение p ≤ 1000 дает максимальное число решений?

const perimeterLimit = 1000;
let maxSolutions = 0;
let maxPerimeter = 0;

for (let perimeter = 1; perimeter <= perimeterLimit; perimeter++) {
  let solutions = 0;

  for (let hypotenuse = 1; hypotenuse <= perimeter / 2; hypotenuse++) {
    for (let cat1 = 1; cat1 < (perimeter - hypotenuse) / 2; cat1++) {
      const cat2 = perimeter - hypotenuse - cat1;
      if (Math.sqrt(cat1 * cat1 + cat2 * cat2) === hypotenuse) {
        solutions++;
      }
    }
  }

  if (solutions > maxSolutions) {
    maxPerimeter = perimeter;
    maxSolutions = solutions;
  }
  solutions = 0;
}

console.log("maxPerimeter: ", maxPerimeter);
console.log("maxSolutions: ", maxSolutions);
