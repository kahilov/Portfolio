const red = function(prob){
    const no = document.createElement("div")
    document.getElementById("form").appendChild(no);
    no.innerHTML = "Please input " + prob
    no.style.color = "red"
}
function validateForm() {
    let name1 = document.forms["myForm"]["name"].value;
    if (name1.length <= 2) {
      alert("Name must be longer than two characters");
      red("name")
      return false;
    }
    let salary = document.forms["myForm"]["sal"].value;
    if (salary  > 16000 || salary < 10000) {
      alert("Money no good");
      red("salary")
      return false;
    }
    let birthday = document.forms["myForm"]["birth"].value;
    if (birthday == "" ) {
      alert("WHEN WERE YOU BORN?");
      red("birthday")
      return false;
    }
    let phone = document.forms["myForm"]["phone"].value;
    let phone1 = phone.toString()
    if (phone1.length != 10 ) {
      alert("Please input proper phone number");
      red("phone")
      return false;
    }
}

