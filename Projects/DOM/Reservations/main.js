const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
let firstName = ""
const sub = document.getElementById("submit")
let input = document.getElementById("input") 
const onSubmit = function(){
    firstName = input.value
    if (firstName in reservations){
      let hello = document.getElementById('greeting');
      hello.innerHTML = 'Welcome' + firstName;  
    } 
    else {
      let rejection = document.getElementById('greeting')
      rejection.innerHTML = 'You are not on the list'
    }
}
