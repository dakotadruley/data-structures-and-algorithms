// Write a function called map which takes an array and a 
// function as arguments. Without utilizing any of the 
// built-in methods available to your language, return 
// an array with the function applied to each element.

// And test it with jest

const map = (array, func) => {
  for(let i = 0; i <= array.length; i++)
    newArray = func[array.length];
  return newArray;
};

module.exports = { map };