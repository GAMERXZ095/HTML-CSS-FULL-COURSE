console.log('program started')

/*let num = 1
while (num <= 100) {
  console.log(num)
  num++ 
}*/

const friends = ['sidhu','sahil','anand', 'aditya', 'gurav',]

let i = 0

while (i < friends.length) {
  console.log(`${i +1}. ${friends[i]}`)
  friends[i] = friends[i] + ' Sharma'
  console.log(`${i +1}. ${friends[i]}`)
  i++
}

console.log('program ended')