const fName = document.myForm.name;
let letters = /^[A-Za-z]+$/;

const nameValidation = () => {
  let nameLen = fName.value.length;
  if (nameLen == "") {
    alert("Pleas enter a name");
    console.log("Pleas enter a name");
    return false;
  }
  if (nameLen < 3) {
    fName.style.border = "2px solid red";
    alert("Please enter a name longer than 3");
    console.log("Please enter a name longer than 3");
    return false;
  }
  if (nameLen > 13) {
    fName.style.border = "2px solid red";
    alert("Please enter a name shorter than 13");
    console.log("Please enter a name shorter than 13");
    return true;
  } else {
    return false;
  }
};

function formValidation(e) {
  e.preventDefault();
  console.log("validated");
  if (nameValidation());
}

document.myForm.addEventListener("submit", formValidation);
