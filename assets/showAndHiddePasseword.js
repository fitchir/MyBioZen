const eyeOn = document.querySelector('.eye-on');
const eyeOff = document.querySelector('.eye-off');
const inputPassword = document.querySelector('#inputPassword');

eyeOff.style.display ="none";

eyeOn.addEventListener('click', () => {
    eyeOn.style.display ="none";
    eyeOff.style.display = "block";
    inputPassword.type ="text";
});

eyeOffaddEventListener('click', () => {
    eyeOn.style.display ="block";
    eyeOff.style.display = "none";
    inputPassword.type ="password";
});