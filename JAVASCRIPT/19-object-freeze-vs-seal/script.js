let userName = 'aditya'

let user = {
  fistName: 'Aditya',
  lastName: 'Sharma',
  pata: {
    city: 'mahnar',
    pinCode: 844507,
    state: 'Bihar',
    moreDetails: {
      population: 87987979874,
      area: '787 sq km',
    },
  },
  age: 17,
  isGraduate: false,
}

//Object.seal(user)
Object.freeze(user)

console.log('isGraduate' in user)