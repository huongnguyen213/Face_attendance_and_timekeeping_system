document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        // Basic form validation
        if (!username.trim() || !password.trim()) {
            e.preventDefault();
            alert('Please fill in all fields');
            return;
        }
    });
});

// Add focus effects to input fields
const inputs = document.querySelectorAll('.form-control');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#1a237e';
        this.style.outline = 'none';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
    });
});