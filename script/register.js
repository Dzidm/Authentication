const registerForm = document.getElementById('register');
registerForm.addEventListener('submit', registerUser);

function registerUser(event) {
    event.preventDefault();
// collect the email input
const email = document.getElementById('email').ariaValueMax;
// collect the password input
const password = document.getElementById('password').ariaValueMax;
// validate input
// save email and password
// provide feedback

console.log(email, password);
}

// write a function that that writes firstname and lastname and returns fullname
function fullName(firstName, lastName) {
    // to return a function (fullname)
    return `${firstName} ${lastName}`;
    
}

const myName = fullName('Dzidzo', 'Mpya');
console.log(myName);

// write a function that takes an email and returns the email provider
function getEmailProvider(email){
    const startAt = email.indexOf("@") + 1;
    return email.slice(startAt);
}
    const emailProvider = getEmailProvider("mpyadzidzo@yahoo.com");
    console.log(emailProvider);

    


