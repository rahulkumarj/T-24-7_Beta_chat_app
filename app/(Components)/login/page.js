'use client'
import { useState } from 'react';
import styles from "../../../styles/LoginPage.module.css"


const Login = () => {
  // State for storing input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className={styles.container}>
      <div>i am here</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Welcome to 24 X 7</h2>
        <div className={styles.formGroup}>
          <label className={styles.labelStyle} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className={styles.inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelStyle} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className={styles.inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.buttonStyle}  type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
