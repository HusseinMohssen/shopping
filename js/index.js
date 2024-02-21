/// <reference types='../@types/jquery' />

let userNameInput = document.getElementById('userName');
let userEmailInput = document.getElementById('userEmail');
let userPassInput = document.getElementById('userPass');

let loginEmailInput = document.getElementById('loginEmail');
let loginPasswordInput = document.getElementById('loginPassword');

let loginMessage = document.getElementById('loginMessage')

let allUsers = [];

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))
};


function register() {
    let user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPassInput.value,
    };
    if (isImpty()) {
        allUsers.push(user);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        alert('Registered Successfully');
        window.location = 'index.html';
    } else {
        alert('Please Enter Data')
    }
};

function isImpty() {
    if (userNameInput.value == '' || userEmailInput.value == '' || userPassInput == '') {
        return false;
    } else {
        return true;
    }
};

function login() {
    if (isValid() == true) {

        window.location = 'home.html';

    } else {
        alert('Please Enter Valid Data')
    }
}

let userNameSession = JSON.parse(localStorage.getItem('userName'))

function isValid() {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == loginEmailInput.value.toLowerCase() &&
            allUsers[i].password.toLowerCase() == loginPasswordInput.value.toLowerCase()) {
            userNameSession = allUsers[i].name;
            localStorage.setItem('userName', JSON.stringify(userNameSession));
            return true
        }
    }
};

function displayWelcomeUser() {
    loginMessage.innerHTML = `hello ${userNameSession}`
}

function logOut() {
    localStorage.removeItem('userName')
}


let counter = 0;

const counterElement = document.getElementById('counter');

function addItem(){
    counter++;
    counterElement.textContent = counter;
}

