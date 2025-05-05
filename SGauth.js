document.addEventListener('DOMContentLoaded', function() {
    const authForms = document.querySelector('.auth-forms');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
  
    // Toggle between sign in and sign up
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            authForms.classList.add('right-panel-active');
        });
    }
  
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            authForms.classList.remove('right-panel-active');
        });
    }
  
    // Add mobile toggle for responsive design
    if (window.innerWidth <= 768) {
        const signInContainer = document.querySelector('.sign-in-container');
        const signUpContainer = document.querySelector('.sign-up-container');
  
        if (signInContainer && signUpContainer) {
            // Create mobile toggle for sign in
            const mobileToggleSignIn = document.createElement('div');
            mobileToggleSignIn.className = 'mobile-toggle';
            mobileToggleSignIn.innerHTML = `
                <p>Don't have an account?</p>
                <button class="btn outline-btn" id="mobileSignUp">Sign Up</button>
            `;
            signInContainer.querySelector('form').appendChild(mobileToggleSignIn);
  
            // Create mobile toggle for sign up
            const mobileToggleSignUp = document.createElement('div');
            mobileToggleSignUp.className = 'mobile-toggle';
            mobileToggleSignUp.innerHTML = `
                <p>Already have an account?</p>
                <button class="btn outline-btn" id="mobileSignIn">Sign In</button>
            `;
            signUpContainer.querySelector('form').appendChild(mobileToggleSignUp);
  
            // Add event listeners
            document.getElementById('mobileSignUp').addEventListener('click', () => {
                authForms.classList.add('right-panel-active');
            });
  
            document.getElementById('mobileSignIn').addEventListener('click', () => {
                authForms.classList.remove('right-panel-active');
            });
        }
    }
  
    // Form validation for Sign In
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const email = document.getElementById('signin-email');
            const password = document.getElementById('signin-password');
            
            // Validate email
            if (!validateEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError(email);
            }
            
            // Validate password
            if (password.value.length < 6) {
                showError(password, 'Password must be at least 6 characters');
                isValid = false;
            } else {
                clearError(password);
            }
            
            if (isValid) {
                // Here you would typically send the data to a server
                alert('Sign in successful!');
                window.location.href = 'index.html'; // Redirect to home page
            }
        });
    }
    
    // Form validation for Sign Up
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('signup-name');
            const email = document.getElementById('signup-email');
            const password = document.getElementById('signup-password');
            
            // Validate name
            if (name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                clearError(name);
            }
            
            // Validate email
            if (!validateEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                clearError(email);
            }
            
            // Validate password
            if (password.value.length < 6) {
                showError(password, 'Password must be at least 6 characters');
                isValid = false;
            } else {
                clearError(password);
            }
            
            if (isValid) {
                // Here you would typically send the data to a server
                alert('Account created successfully!');
                window.location.href = 'index.html'; // Redirect to home page
            }
        });
    }
    
    // Helper functions for validation
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.style.boxShadow = '0 0 0 2px var(--danger-color)';
    }
    
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
        input.style.boxShadow = '';
    }
  
    // Add animation to form inputs
    const inputs = document.querySelectorAll('.form-container input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
  });