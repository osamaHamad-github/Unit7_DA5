document.getElementById('check').addEventListener('click', function () {
  // storing age and day values
  let age = document.getElementById('age').value
  let day = document.getElementById('day').value

  // storing the p element in a variable
  const answer = document.getElementById('answer')

  // parsing to int
  age = parseInt(age)

  // making all chars in day lowercase
  day = day.toLowerCase()

  // checking is conditions are true
  if (day !== 'saturday' && day !== 'sunday') {
    if (age >= 18) {
      answer.innerText = 'time to go to work!'
    } else if (age < 18) {
      answer.innerText = 'time to go to school!'
    }
  } else {
    answer.innerHTML = 'it\'s the weekend! time to relax!'
  }
})
