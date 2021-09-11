const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    body.style.backgroundColor = '#1d98d1';
    button.style.fontSize = "25px"
});


let nme = document.myForm.name;
let mail = document.myForm.email;
let phoneNo = document.myForm.telephone;
let letters = /^[A-Za-z]+$/;

function nameValidation(nme, minLen, maxLen){
    let nameLen = nme.value.length;
    if(nameLen < 0 || nameLen < minLen || nameLen > maxLen){
        alert('Check name characters and length');
        preventDefault();
        console.log('No problem with length');
        return false;

    }
    if(nme.value.match(letters)){
        alert('Use aphabetical xters only');
        console.log('Letters have been used');
         return true;
    }
    else {
        return false;
    }
    }

    

// function emailValidation(mail){
//     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(mail.value.match(mailformat)){
//         return true;
//     }else {
//         alert('You have entered an invalid email address');
//     }
// }

// function phoneNoValidation(phoneNo){
//     let digits = /^[0-9]+$/;
//     if(phoneNo.value.match(digits)){
//         return true;
//     }else {
//         alert('phone number must contain numbers only');
//         return false;
//     }
// }

function formValidation(){
    
    if(nameValidation(nme, 2, 25)){}

    // if(emailValidation(mail)){

    // }
    // if(phoneNoValidation(phoneNo)){

    // }

    
}

document.addEventListener('submit', formValidation);

