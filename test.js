



let words = [' spray', ' elite', ' exuberant', ' destruction', ' present', ' icecream', ' reservoir', ' formation', ' teenager', ' strike']


// Function to show the list of words
function showWordsList() {
  let pWords = document.getElementById('words-list')
  pWords.innerHTML = words
}


// Function to filter for words that contain a specific character
function filterSpecificCharacter(char) {
  let outcome = words.filter((word) => word.includes(char))

  return outcome
}



function printResult() {
  let displayResult = document.getElementById('filter-result')

  let userInput = document.getElementById('filter-input')

  let filteredCharResult = filterSpecificCharacter(userInput.value)

  displayResult.innerHTML = filteredCharResult
}











// Function to conver kilometers to miles
// Takes km as input, and returns miles


function convertToMiles(val) {
  if (val === 0) {
   return "Please enter a number above"
  } else {
    return val + " Kilometers is Equal to " + val * 0.621371 + " Miles"
  }
}
convertToMiles()


function printToMiles() {
  let convertResults = document.getElementById('convert-result')

  let convertInput = document.getElementById('convert-input')

  let convertedDistanceResults = convertToMiles(convertInput.value)

  convertResults.innerHTML = convertedDistanceResults
}






// Calculate the sum of numbers within an array
function printSumOf() {
  let sumOfOutput = document.getElementById('sum-of-output');
  let textAreaContent = document.getElementById('sum-of-input').value;


  let theTextAreaArray = textAreaContent
    .split(/[\s,]+/) // Split by one or more whitespace characters (includes newlines, spaces, tabs)
    .filter(Boolean) // Remove any empty strings that might result from extra spaces/newlines
    .map(Number)    // Convert to number
    .filter(num => !isNaN(num)) // Remove any NaN values (non-numeric entries)

  let totalSum = sumOf(theTextAreaArray);

  sumOfOutput.innerHTML = `The sum is: ${totalSum}`
}

function sumOf(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}




// Sort an array from lowest to highest
function printNumerically() {
  let numericalInput = document.getElementById('numerically-input').value
  let numericalOutput = document.getElementById('numerically-output')

  let numericallyInputArray = numericalInput.split(/[\s,]+/).filter(Boolean).map(Number).filter(num => !isNaN(num))

  let sortedArr = sortArrayNumerically(numericallyInputArray)

  numericalOutput.innerHTML =  `The numerically ordered array is: ${sortedArr}`
}

function sortArrayNumerically(input) {
  let sorted = input.sort((a, b) => a - b)
  return sorted
}




// // Return a Boolean if a number is divisible by 10
function printDivisible() {
  let num = document.getElementById('dividend').value
  let div = document.getElementById('divisor').value
  let divisorOutput = document.getElementById('divisor-output')

  let numTextAreaContent = num

  let divTextAreaContent = div

  let finalCalc = divisibleByTen(numTextAreaContent, divTextAreaContent)

  divisorOutput.innerHTML = finalCalc
}
function divisibleByTen(number, divisor) {
  if (number % divisor === 0) {
    return true
  } else {
    return false
  }
}





// Check if a string is a palindrome (spelt the same backwards as it is forwards)
function printPalindrome() {
  let palindromeInputTextArea = document.getElementById('palindrome-input').value
  let palindromeOutput = document.getElementById('palindrome-output')

  let palindromeCheckContent = palindromeInputTextArea

  let checkPalindromeDone = palindromeCheck(palindromeCheckContent)

  palindromeOutput.innerHTML = checkPalindromeDone
}

function palindromeCheck(str) {
  let stringLetters = str.split('')

  let reversedLetters = stringLetters.reverse()

  let reversedWord = reversedLetters.join('')

  if (str.toLowerCase() == reversedWord.toLowerCase()) {
    return true
  } else {
    return false
  }
}



// Return the number of vowels in a string
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function printVowels() {
  let stringIn = document.getElementById('vowel-input').value
  let vowelsOutput = document.getElementById('vowel-output')

  let vowelsContent = stringIn
  let vowelCheck = countVowels(vowelsContent)

  vowelsOutput.innerHTML = vowelCheck
}

function countVowels(sent) {
  sent = sent.toLowerCase()
  let result = (Array.from(sent).filter(char => vowels.includes(char)))
  let resultNum = result.length

  let resultStr = String(resultNum)
  return resultStr
}



let willjumRust = {
  name: 'Willjum',
  profession: 'Youtuber',
  rust_hours: 9782,
  base: '3 triangle squares',
  vehicle: 'Horse'
}
console.log('** No changes: ')
console.log('willjum', willjumRust)

willjumRust.name = 'Willy'
console.log('** Name change: ')
console.log(willjumRust)

let willyJVehicle = willjumRust.vehicle;
console.log('** Just vehicle: ')
console.log(willyJVehicle)

willjumRust['starter'] = willjumRust['base']
delete willjumRust['base']
console.log('** Rename base to starter')
console.log(willjumRust)

// Create a function that reverses an arrary
let arr = [9, 17, 6, 3, 6]

function reverseArray() {
  arr.reverse()
  console.log(arr)
}
reverseArray()


// Create a function that filters out negative numbers
arr = [12, 96, -5, 67, -17, 26, 99]

let positiveNumbers = arr.filter(number => number >= 0)

console.log(positiveNumbers)

// Remove capitialisation + capitalise the first letter of each word
let text = "IT is A LOnG EStABLiSHed facT THAt A rEadEr WIlL bE diStRaCTeD By ThE REAdABlE CONTENt Of a pAge WheN LOokING aT ITS LayOUt. ThE PoiNT OF UsinG lOREM ipsUM iS ThAt iT HAS A MoRE-oR-LESS normAl DisTRIbUTiON of lEttERs, aS OppOsEd tO USIng 'COnTEnT Here, conTENT HEre', MaKinG It lOok LiKE REaDaBLe engLIsH. maNY dESktop pubLIshiNg pAckAgEs and WEb paGe edITORs Now uSE loREM iPsUM aS theIr defAUlT MOdel text, And a SEarCh FoR 'LoREm iPSUm' will uNCoVer ManY WeB siTES STIlL In THEir Infancy. vaRIouS VERSionS hAVE evolVED over tHe yEaRS, sOMEtIMes BY ACCideNT, sOmeTimeS oN PURPoSE ( InjEcTed HumOuR And The liKe )."
function deCapitalise() {
  let lowered = text.toLowerCase()
  console.log(lowered)
  textArr = lowered.split(" ").map(words => words[0].toUpperCase() + words.slice(1)).join(' ')
  console.log(textArr)
}
deCapitalise()

// remove the spaces in a string
let text = "IT is A LOnG EStABLiSHed facT THAt A rEadEr WIlL bE diStRaCTeD By ThE REAdABlE CONTENt Of a pAge WheN LOokING aT ITS LayOUt. ThE PoiNT OF UsinG lOREM ipsUM iS ThAt iT HAS A MoRE-oR-LESS normAl DisTRIbUTiON of lEttERs, aS OppOsEd tO USIng 'COnTEnT Here, conTENT HEre', MaKinG It lOok LiKE REaDaBLe engLIsH. maNY dESktop pubLIshiNg pAckAgEs and WEb paGe edITORs Now uSE loREM iPsUM aS theIr defAUlT MOdel text, And a SEarCh FoR 'LoREm iPSUm' will uNCoVer ManY WeB siTES STIlL In THEir Infancy. vaRIouS VERSionS hAVE evolVED over tHe yEaRS, sOMEtIMes BY ACCideNT, sOmeTimeS oN PURPoSE ( InjEcTed HumOuR And The liKe )."
let noSpace = text.replace(/\s/g, '')
console.log(noSpace)



// 1. Create a function that finds the maximum number in an array
arr = [32, 99, 12, 4, 6, 97, 43, 2, 9, 74, 17, 11]

function getLargestNumber(val) {
  console.log(Math.max(...val))
}
getLargestNumber(arr)



