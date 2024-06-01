const form = document.getElementById('form');
const errorText = document.getElementById('error-text');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genders = document.getElementById('gender');
    const checkbox = document.getElementById('checkbox');

    if(!validateName(name)){
        return;
    }

    if(!validateEmail(email)){
        return;
    }

    if(!validateGender(genders)){
        return
    }

    if(!checkbox.checked){
        return;
    }

    alert("Registration Success!");
    const user = {
        name: name,
        email: email,
        message: message,
    }
    console.log(user)
})

function validateName(name){
    if(name == ""){
        errorText.innerHTML = "Name can not be empty!";
        return false;
    }

    if(name.length <= 5){
        alert("Name must be more than 5 characters");
        return false;
    }

    return true;
}

function validateEmail(email){
    if(email == ""){
        alert("Email can not be empty!");
        return false;
    }

    if(!email.endsWith('.com')){
        alert("Email must ends with .com");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email must contain at least 1 '@'");
        return false;
    }

    return true;
}

function validateGender(genders){
    for(gender of genders){
        if(gender.checked == true){
            return true;
        }
    }

    alert("Gender must be chosen!");
    return false;
}