
function LoadSignUp() {
    document.location='./SignUp.html';
}

function  LoadLogIn(){
    document.location='./LogIn.html';
}

function logIn(){
    var User = document.getElementById("userName");

    document.location='./MainPage.html';
}

function signUp(){
    window.alert("Sign Up Under Construction");
}

window.onload = displayMessages();

function displayMessages(){
    /*
    id="U1"
    id="U2"
    */
}

function newMessage(){
    var newMessage = document.getElementById("NewMessage");

    const para = document.createElement("p");
    para.setAttribute("id", "U1");

    const node = document.createTextNode(newMessage );
    para.appendChild(node);

    const element = document.getElementById("Messages");
    element.appendChild(para);
}