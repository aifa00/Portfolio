var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');

function validateName(){
    var name =document.getElementById('contact-name').value;
    if(name.length ==0){
        nameError.innerHTML ='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='Write fullname';
        return false;
    }
    nameError.innerHTML ='<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateEmail(){
    var email =document.getElementById('contact-email').value;
    if(email.length ==0){
        emailError.innerHTML ='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML ='Invalid Email';
        return false;
    }
    emailError.innerHTML ='<i class="bi bi-check-circle-fill"></i>';
    return true;
}


function validateMsg(){
    var msg =document.getElementById('contact-msg').value;
    var required=15;
    var left=required-msg.length;

    if(left>0){
        msgError.innerHTML ='More characters required';
        return false;
    }
   
    msgError.innerHTML ='<i class="bi bi-check-circle-fill"></i>';
    return true;
}