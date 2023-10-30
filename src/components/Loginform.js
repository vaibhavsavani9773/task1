import React, { useState } from 'react';

function Loginform() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Example: 3 to 20 characters, letters, numbers, and underscores.
    const passwordMinLength = 6; // Example: Minimum 6 characters.

    // Validation logic for the username
    if (!formData.username.match(usernameRegex)) {
      setErrors({
        ...errors,
        username: 'Invalid username format',
      });
    } else {
      setErrors({
        ...errors,
        username: '',
      });
    }

    // Validation logic for the password
    if (formData.password.length < passwordMinLength) {
      setErrors({
        ...errors,
        password: 'Password is too short',
      });
    } else {
      setErrors({
        ...errors,
        password: '',
      });
    }

    // Check for successful login
    if (
      formData.username === 'yourUsername' &&
      formData.password === 'yourPassword'
    ) {
      console.log('Login Successful'); // Display a successful login message in the console
    } else {
      console.log('Login Failed'); // Display a failed login message in the console
    }
  };

  return (
    <div>
      <h1>Username and Password Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <p className="error">{errors.username}</p>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="error">{errors.password}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Loginform;
