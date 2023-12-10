let eye = document.getElementById("eye");
let eyeSlash = document.getElementById("eye-slash");
let pass = document.getElementById('password');

eye.onclick = function() {show()};
eyeSlash.onclick = function() {hide()};

function show(){
    pass.type = "text";
    eye.style.display = "none";
    eyeSlash.style.display = "inline-block";
}

function hide(){
    pass.type = "password";
    eye.style.display = "inline-block";
    eyeSlash.style.display = "none";
}