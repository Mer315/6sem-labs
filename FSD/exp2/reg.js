// Page turn functionality
document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const showLoginBtn = document.getElementById('showLogin');
    const showRegisterBtn = document.getElementById('showRegister');

    // Turn page to show login
    showLoginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        book.classList.add('page-turned');
    });

    // Turn page back to show registration
    showRegisterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        book.classList.remove('page-turned');
    });

    // Handle registration form submission
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const userid = document.getElementById('userid').value;
        const password = document.getElementById('password').value;

        console.log('Registration Data:', {
            firstname,
            lastname,
            dob,
            gender,
            userid,
            password
        });

        alert('Registration successful! Please login.');
        book.classList.add('page-turned');
        registrationForm.reset();
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userid = document.getElementById('loginUserid').value;
        const password = document.getElementById('loginPassword').value;

        console.log('Login Data:', {
            userid,
            password
        });

        alert('Login successful!');
        loginForm.reset();
    });
});