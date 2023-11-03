var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];











// initialise the variable `foods` to a 2-Dimensional array containing the values below: 

//              collumn [0]      collumn[1]
// Row 1        Bread           ham
// Row 2        rice            cheese
// Row 3        pasta           tomato
// Row 4        potato          lettuce
// inistiales sentece to say that says "I will be eating potato and lettuce for lunch today" using the values from the foods array. Use backticks for the sentence.
// console log out the sentence 

var foods = [
    ["Bread", "ham"],
    ["rice", "cheese"],
    ["pasta", "tomato"],
    ["potato", "lettuce"]
]; 

var sentence = `I will be eating ${foods[3][0]} and ${foods[3][1]} for lunch today`;
console.log(sentence); // I will be eating potato and lettuce for lunch today





