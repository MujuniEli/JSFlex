
let nme = document.myForm.name;
let nmeError = document.getElementById('nmeError');
let mail = document.myForm.email;
let mailError = document.getElementById('mailError');
let phoneNo = document.myForm.telephone;
let phoneNoError = document.getElementById('phoneNoError');
let nation = document.myForm.country;
let nationError = document.getElementById('nationError');
let sex = document.myForm.gender;
let sexError = document.getElementById('sexError');
let age = document.myForm.age;
let ageError = document.getElementById('ageError');
//let input = document.querySelectorAll('input');
//let warningMsg = document.querySelector('warning');
let error = document.getElementById('error');
let letters = /^[A-Za-z]+$/;



    function nameValidation () {
        let nameLen = nme.value.length;
        if (nameLen == "") {
            nmeError.textContent = 'Please enter a name';
          nme.style.border = "2px solid red";
          //warningMsg.display = "block";
          //warningMsg.textContent = 'Please enter a name';
          //alert("Please enter a name");
          
          return false;
        }
        if (nameLen < 2) {
          nme.style.border = "2px solid red";
          nmeError.textContent = "*Please enter a name longer than 2 characters";
          
          return false;
        }
        if (nameLen > 25) {
          nme.style.border = "2px solid red";
          //alert("Please enter a name shorter than 13");
          nmeError.textContent = "*Please enter a name shorter than 25 characters";
          return true;
        } else {
            nme.style.border = '';
            nmeError.textContent = '';
          return false;
        }
      };
    

    

function emailValidation(mail){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(mailformat)){
        mail.style.border = '';
        mailError.textContent = '';
        return true;
    }else {
        mail.style.border = "2px solid red";
        mailError.textContent = '*You have entered an invalid email address';
    }
}

function phoneNoValidation(phoneNo){
    let digits =  /^\d{10}$/;
    if(phoneNo.value.match(digits)){
        phoneNo.style.border = '';
        phoneNoError.textContent = '';
        return true;
    }else {
        phoneNo.style.border = "2px solid red";
        phoneNoError.textContent = 'phone number must contain numbers only';
        return false;
    }
}

function countryValidation(nation){
    if(nation.value == "Default"){
        nation.style.border = "2px solid red";
        nationError.textContent = 'select your nationality';
        return false;
    }else {
        nation.style.border = 'none';
        nationError.textContent = '';
        return true;
    }
}

function genderValidation(sex){
    if(sex.value == "Default"){
        sex.style.border = "2px solid red";
        sexError.textContent = 'select your gender';
        return false;
    }else {
        sex.style.border = '';
        sexError.textContent = '';
        return true;
    }
}

function ageValidation(age){
    if(age.value < 21){
        age.style.border = "2px solid red";
       ageError.textContent ='You are not of legal age!!';
        return true;
    }else {
        age.style.border = '';
        ageError.textContent = '';
        return false;
    }
}

function formValidation(e){
    e.preventDefault();
    if(nameValidation()){};

    if(emailValidation(mail)){};

    if(phoneNoValidation(phoneNo)){};

    if(countryValidation(nation)){};

    if(genderValidation(sex)){};

    if(ageValidation(age)){};

    
}

document.addEventListener('submit', formValidation);

// /^\d{10}$/ phone number regex
