function regexChecker() {

    let firstName= document.getElementById("firstName").value;
    let lastName= document.getElementById("lastName").value;
    let nameCheck= /^[A-Z][a-z]+$/;

    if (firstName.match(nameCheck) && lastName.match(nameCheck)) {
    alert("Yay! Your inputs were all correct!");
    console.log(true);
    }

    else {
    alert("Oh no! Thats an invalid format!"); 
    console.log(false);
    }

}

// let regex1= /^A-Z(a-z)+/;
// let regex2= /^A-Z(a-z)+/;