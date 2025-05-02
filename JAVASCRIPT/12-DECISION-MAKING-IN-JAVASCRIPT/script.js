let userName = prompt('Enter Your Name.')
let userAge = parseInt(prompt('Enter Your Age.'))

if (!userName) {
  userName = 'procoder'
}

if (!userAge) {
  userAge = 20
}

/*let gender = prompt('Enter Your Age')
if (userName === null) {
  userName = 'procoder'
}

if (userAge === 0) {
  userAge = 20
}
*/
console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)

if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is collage student.`)
}

if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} Is a working professional.`)
}