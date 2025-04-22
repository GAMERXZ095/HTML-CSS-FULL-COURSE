const userAge = 24;

const isSchoolStudent = userAge >= 5 && userAge <= 18;
const isCollageStudent = userAge >= 18 && userAge <= 24;

const isStudent = isSchoolStudent || isCollageStudent
console.log(isStudent);