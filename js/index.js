/// <reference types="../@types/jquery" />

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPass = document.getElementById("userPass");
let signBtn = document.getElementById('signBtn');

let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let logBtn = document.getElementById('logBtn');


let allUsers = [];

if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorag.getItem("allUsers"))
}

// signBtn.addEventListener("click", () => {
//     let user = {
//         name: userName.value.trim(),
//         email: userEmail.value.trim(),
//         password: userPass.value.trim(),
//     };
//     if (isImpty() == true) {
//         allUsers.push(user);
//         localStorage.setItem("users", JSON.stringify(allUsers));
//         window.alert("Registered Successfully");
//         // window.open("index.html", "_self");
//     } else {
//         window.alert('Please Enter Data')
//     }
// });

function register(){
    let user = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
    };
    if (isImpty() == true && isExite()==false) {
        allUsers.push(user);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        window.alert("Registered Successfully");
        // window.open("index.html", "_self");
    } else {
        window.alert('Please Enter Data')
    }
}

function isExite(){
    for(var i = 0 ; i < allUsers.length ; i++){
        if(allUsers[i].name.toLowerCase() == userName.value.toLowerCase() ||
        allUsers[i].email.toLowerCase() == userEmail.value.toLowerCase()
        ){
            return true
        }
    }
    return false
}

function isImpty() {
    if (userName.value == "" || userEmail.value == "" || userPass == "") {
        return false
    } else {
        return true
    }
}

// logBtn.addEventListener('click', () => {
// if(isValid()== true){
// window.open('home.html')
// }else{
//     window.alert("Please Enter Valid Data")
// }
// })

// function isValid() {
//     if (userEmail.value == loginEmail.value && userPass.value == loginPassword) {
//         return true
//     }  {
//         return false

//     }
// }

// logBtn.addEventListener("click", () => {
//     if (!emailInput.value || !emailPass.value) {
//         alertMsg("Please fill all data");
//         return false;
//     } else if (emailRegex.test(emailInput.value) == false) {
//         {
//             alertMsg("Please enter a valid email");
//         }
//     } else {
//         if (JSON.parse(localStorage.getItem("users") == null)) {
//             alertMsg("Please register");
//         } else {
//             for (var i = 0; i < users.length; i++) {
//                 if (users[i].userEmail.includes(emailInput.value)) {
//                     if (users[i].userEmail == emailInput.value) {
//                         if (users[i].userPass == emailPass.value) {
//                             sessionStorage.setItem("userLogin", users[i].userName);
//                             window.open("Welcome.html", "_self");
//                             return true;
//                         } else {
//                             alertMsg("Wrong Password!");
//                             return false;
//                         }
//                     } else {
//                         alertMsg("Wrong Email");
//                     }
//                 } else {
//                     alertMsg("Your email is not exist!<br> Please register");
//                 }
//             }
//         }
//     }
// });