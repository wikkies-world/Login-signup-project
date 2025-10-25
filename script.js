
const signupPageContainer = document.getElementById('signupPageContainer')
const loginPageContainer = document.getElementById('loginPageContainer')

const loadSignupPage = () => {
    signupPageContainer.style.display = 'flex'
    loginPageContainer.style.display = 'none'
}

const loadLoginPage = () => {
    signupPageContainer.style.display = 'none'
    loginPageContainer.style.display = 'flex'
}