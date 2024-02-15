/// <reference types="../@types/jquery" />

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPass = document.getElementById("userPass");
let allUsers = [];
if(localStorage.getItem("allUsers")!= null){
    allUsers = JSON.parse(localStorag.getItem("allUsers"))
}

function signUp(){
    let user= {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
    }
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    console.log(allUsers);
}

function isExist(){
    
}