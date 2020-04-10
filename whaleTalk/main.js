// Step 1:
// Step 13:
const input = 'turpentine and turtles';

// Step 2:
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3:
let resultArray = [];

// Step 4:
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // Step 5:
  // console.log ('inputIndex = ' + inputIndex);
  // Step 6:
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    // Step 7:
    // console.log('vowel =' + vowel);
    // Step 8:
    if (input[inputIndex] === vowels[vowel]) {
      // Step 9:
      if (input[inputIndex] === 'e') {  resultArray.push('ee');
      }
      else {
        resultArray.push(input[inputIndex]);
      }
      
      // Step 10:
      if (input[inputIndex] === 'u') {  resultArray.push('uu');
      }
      else {
        resultArray.push(input[inputIndex]);
      }
      
    }
    
  }
}

// Step 11:
// Step 12:
console.log(resultArray.join('').toUpperCase());