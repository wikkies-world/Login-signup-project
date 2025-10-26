
let users = JSON.parse(localStorage.getItem("users")) || {};

const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const signupUserVerifier = document.getElementById('signupUserVerifier');
const signupBtn = document.getElementById('signupBtn');

signupBtn.addEventListener("click", () => {
  const username = signupUsername.value;
  const password = signupPassword.value;
  const verifier = signupUserVerifier.value;

  if (username === "" || password === "" || verifier === "") {
    alert("Please enter username, password & verification answer!");
    return;
  }

  const newUser = {
    username: username,
    password: password,
    verifier: verifier
  };

  users[username] = newUser;

  localStorage.setItem("users", JSON.stringify(users));

  alert("User signed up successfully!");

  signupUsername.value = "";
  signupPassword.value = "";
  signupUserVerifier.value = "";

});

const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener("click", () => {
    const username = loginUsername.value;
    const password = loginPassword.value;

    if (username === "" || password === "") {
        alert("Please enter username & password!");
        return;
    }
    const existingUser = users[username];

    if (!existingUser) {
        alert("User does not exist!");
        return;
    } else if (existingUser.password !== password) {
        alert("Incorrect password!");
        return;
    }

    alert("Login successful!");

    loginUsername.value = "";
    loginPassword.value = "";
})

const signupPageContainer = document.getElementById('signupPageContainer');
const loginPageContainer = document.getElementById('loginPageContainer');
const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
const loginBtn2 = document.getElementById('loginBtn2');
const signupBtn2 = document.getElementById('signupBtn2');

const loadSignupPage = () => {
    signupPageContainer.style.display = 'flex'
    loginPageContainer.style.display = 'none'
    forgotPasswordContainer.style.display = 'none'
}

const loadLoginPage = () => {
    signupPageContainer.style.display = 'none'
    loginPageContainer.style.display = 'flex'
    forgotPasswordContainer.style.display = 'none'
}

const loadForgotPasswordPage = () => {
    signupPageContainer.style.display = 'none'
    loginPageContainer.style.display = 'none'
    forgotPasswordContainer.style.display = 'flex'
}
