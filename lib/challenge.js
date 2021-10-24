/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number.
 */
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
/*
 * Prompt 2:
 *
 * Create a loop that prints every even number between 0 and 100.
 */
for (a=0; a<=100; a++){
  if(a % 2 == 0) {
    console.log(`${a} is an even number`)
  }
}
/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number.
 */
for (b=-5; b<=5; b++){
  console.log(b)
}
/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number.
 */
for (c=10; c>=0; c--){
  console.log(c)
}
/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number.
 */
for (d=5; d>=-5; d--){
  console.log(d)
}
/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 in multiples of 2 (instead of 1),
 * printing each number.
 */
for (e=0; e<=50; e++){
  console.log(e*2)
}
/*
 * Prompt 7:
 *
 * For the numbers 0 - 100, print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
for (f=0; f<=100; f++){
  if (f%5 === 0) {
    console.log(`I found a ${f} . High five!`)
  }
}
/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100.
 *
 * Create a conditional that matches these requirments:
 *   - if someNumber is less than 30, print "that's a small number"
 *   - if someNumber is between 30 and 60, print "the number is medium sized"
 *   - if someNumber is greater than 60, print "We got a big one!"
 */
let someNumber = Math.floor(Math.random()*100)

  if (someNumber>60){
    console.log(`${someNumber} We got a big one!`)
  } else if (someNumber>30 && someNumber<60){
    console.log(`${someNumber} the number is medium sized`)
  } else if(someNumber<30){
    console.log(`${someNumber} that's a small number`)
  }
 
/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e. 0. Han, 1. C3PO, 2. R2D2
 */

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (j=0; j< StarWars.length; j++){
  console.log((j) + ". " + StarWars[j])
}
/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */

var arraysk = []

for (k=0; k<=100; k++) {
  if (k % 2 === 0) {
    arraysk.push(k)
  } 
}
console.log(arraysk)

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number.
 *
 * Hint: What does Math.floor() do?
 */

let nums = [
  14,
  11,
  16,
  15,
  13,
  16,
  15,
  17,
  19,
  11,
  12,
  14,
  19,
  11,
  15,
  17,
  11,
  18,
  12,
  17,
  12,
  71,
  18,
  15,-
  12
];

var m = nums[Math.floor(nums.length / 2)]
console.log(m)
/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i). You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print "i: ${i} / j: ${j}"
 */
for (o=1; o<=10; o++){
  for (iN=11; iN <= 20; iN++){
    console.log(`o: ${o} / iN: ${iN}`)
  }
}
/*
 * Prompt 13:
 *
 * Using nested loops, print the values inside the nested arrays.
 */

let nestedArrays = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

for (let l=0; l<nestedArrays.length; l++){
  for (let n=0; n<nestedArrays[l].length; n++){
    console.log(nestedArrays[l][n])
  }
}