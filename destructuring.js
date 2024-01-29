// 8 
//1846

//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Your name is Alejandro and you like purple.
//Your name is Melissa and you like green.
//Your name is undefined and you like green.

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); //["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]


// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10,30,20]


const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };


//let {numbers:{a,b}} = obj;

const {a,b} = obj.numbers;


let arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0],arr[1]] = [arr[1],arr[0]];



// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ({first,second,third,rest});
