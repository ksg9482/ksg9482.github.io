const loginForm = document.querySelector('#login_container');
const loginInput = document.querySelector('#login_container input');
const loginButton = document.querySelector('#login_container button');

const greeting = document.querySelector('#greeting');

const USERNAME_CLASSNAME = 'username'
const HIDE_CLASSNAME = 'hide';

const createGreeting = function(username){
    greeting.textContent = `Hello ${username}`;
    greeting.classList.remove(HIDE_CLASSNAME);
}

const onLoginSubmit = function(event){
    event.preventDefault();
    loginForm.classList.add(HIDE_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_CLASSNAME, username);
    createGreeting(username)
}



const savedUsername = localStorage.getItem(USERNAME_CLASSNAME);

if(savedUsername === null){
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginButton.addEventListener('click', onLoginSubmit);
} else {
    createGreeting(savedUsername)
}