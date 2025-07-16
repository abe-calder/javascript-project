console.log('Working')

// Function to conver kilometers to miles
// Takes km as input, and returns miles

// let val = 5
// function convertToMiles() {
//   if (val === 0) {
//     console.log("Input any number above 0")
//   } else {
//     console.log(val + " Kilometers is Equal to " + val * 0.621371 + " Miles")
//   }
// }
// convertToMiles()

// // Calculate the sum of numbers within an array
// // Example array
// let arr = [10, -6, 7, 9, 3, 4.2, -9.1]

// function sumOf() {
//   let sum = 0
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   console.log(sum)
// }
// sumOf()

// // Create a function that reverses an arrary
// let arr = [9, 17, 6, 3, 6]

// function reverseArray() {
//   arr.reverse()
//   console.log(arr)
// }
// reverseArray()

// Sort an array from lowest to highest
// let arr = [9, 17, 27, 99, 55, 32, 18, 66, 45, 832]

// function sortArrayNumerically() {
//   arr.sort((b, a) => a + b)
//   console.log(arr)
// }
// sortArrayNumerically()

// // Create a function that filters out negative numbers
// arr = [12, 96, -5, 67, -17, 26, 99]

// let positiveNumbers = arr.filter(number => number >= 0)

// console.log(positiveNumbers)

// Remove capitialisation + capitalise the first letter of each word
// let text = "IT is A LOnG EStABLiSHed facT THAt A rEadEr WIlL bE diStRaCTeD By ThE REAdABlE CONTENt Of a pAge WheN LOokING aT ITS LayOUt. ThE PoiNT OF UsinG lOREM ipsUM iS ThAt iT HAS A MoRE-oR-LESS normAl DisTRIbUTiON of lEttERs, aS OppOsEd tO USIng 'COnTEnT Here, conTENT HEre', MaKinG It lOok LiKE REaDaBLe engLIsH. maNY dESktop pubLIshiNg pAckAgEs and WEb paGe edITORs Now uSE loREM iPsUM aS theIr defAUlT MOdel text, And a SEarCh FoR 'LoREm iPSUm' will uNCoVer ManY WeB siTES STIlL In THEir Infancy. vaRIouS VERSionS hAVE evolVED over tHe yEaRS, sOMEtIMes BY ACCideNT, sOmeTimeS oN PURPoSE ( InjEcTed HumOuR And The liKe )."
// function deCapitalise() {
//   let lowered = text.toLowerCase()
//   console.log(lowered)
//   textArr = lowered.split(" ").map(words => words[0].toUpperCase() + words.slice(1)).join(' ')
//   console.log(textArr)
// }
// deCapitalise()

// // remove the spaces in a string
// let text = "IT is A LOnG EStABLiSHed facT THAt A rEadEr WIlL bE diStRaCTeD By ThE REAdABlE CONTENt Of a pAge WheN LOokING aT ITS LayOUt. ThE PoiNT OF UsinG lOREM ipsUM iS ThAt iT HAS A MoRE-oR-LESS normAl DisTRIbUTiON of lEttERs, aS OppOsEd tO USIng 'COnTEnT Here, conTENT HEre', MaKinG It lOok LiKE REaDaBLe engLIsH. maNY dESktop pubLIshiNg pAckAgEs and WEb paGe edITORs Now uSE loREM iPsUM aS theIr defAUlT MOdel text, And a SEarCh FoR 'LoREm iPSUm' will uNCoVer ManY WeB siTES STIlL In THEir Infancy. vaRIouS VERSionS hAVE evolVED over tHe yEaRS, sOMEtIMes BY ACCideNT, sOmeTimeS oN PURPoSE ( InjEcTed HumOuR And The liKe )."
// let noSpace = text.replace(/\s/g, '')
// console.log(noSpace)

// Return a Boolean if a number is divisible by 10
// function divisibleByTen(number) {
//   if (number % 10 === 0) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// divisibleByTen(20)

// Return the number of vowels in a string
// let sentance = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below."
// let vowels = ['a', 'e', 'i', 'o', 'u']

// function countVowels() {
//   sentance = sentance.toLowerCase()
//   console.log(Array.from(sentance).filter(char => vowels.includes(char)))
// }
// countVowels()

// 1. Create a function that finds the maximum number in an array
// arr = [32, 99, 12, 4, 6, 97, 43, 2, 9, 74, 17, 11]

// function getLargestNumber(val) {
//   console.log(Math.max(...val))
// }
// getLargestNumber(arr)

// Check if a string is a palindrome (spelt the same backwards as it is forwards)
// string1 = "hello"
// string2 = "level"
// string3 = "play"
// string4 = "kayak"

// function palindromeCheck(str) {
//   let stringLetters = str.split('')

//   let reversedLetters = stringLetters.reverse()

//   let reversedWord = reversedLetters.join('')

//   if (str.toLowerCase() == reversedWord.toLowerCase()) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// palindromeCheck(string2)






// Function to filter for words that contain a specific character
let words = [' spray', ' elite', ' exuberant', ' destruction', ' present']

function showWordsList() {
  let pWords = document.getElementById('words-list')
  pWords.innerHTML = words
}

function filterSpecificCharacter(char) {
  let outcome = words.filter((word) => word.includes(char))

  let displayResult = document.getElementById('result')

  console.log(outcome)

}
filterSpecificCharacter('a')
