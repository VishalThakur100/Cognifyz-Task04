document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Collect Form Data
    const formData = new FormData(this);
  
    // Basic Validations
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
  
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Phone Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Password Strength Check
    const strengthMeter = document.getElementById('passwordStrength');
    if (strengthMeter.value < 60) {
      alert('Your password is too weak. Please improve it.');
      return;
    }
  
    // Successfully Submit
    alert('Form submitted successfully!');
    this.reset();
    document.getElementById('passwordStrength').value = 0;
  });
  
  // Password Strength Validation
  document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const feedback = document.getElementById('passwordFeedback');
    const strengthMeter = document.getElementById('passwordStrength');
  
    let score = 0;
    const rules = [
      { regex: /[A-Z]/, message: 'Include at least one uppercase letter' },
      { regex: /[a-z]/, message: 'Include at least one lowercase letter' },
      { regex: /\d/, message: 'Include at least one number' },
      { regex: /[!@#$%^&*]/, message: 'Include at least one special character' },
      { regex: /.{8,}/, message: 'At least 8 characters long' }
    ];
  
    const messages = rules.filter(rule => !rule.regex.test(password)).map(rule => rule.message);
  
    if (messages.length === 0) {
      feedback.textContent = 'Strong password!';
      feedback.style.color = 'green';
      score = 100;
    } else {
      feedback.textContent = messages.join(', ');
      feedback.style.color = 'red';
      score = ((5 - messages.length) / 5) * 100;
    }
  
    strengthMeter.value = score;
  });
  