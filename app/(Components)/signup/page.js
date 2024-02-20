'use client'
import { useState } from 'react';
import styles from "../../../styles/LoginPage.module.css"


const SignUp = () => {
  const [signUpCredentials,setSignUpCredentials]=useState({userName:" ",email:" ",password:" ",role:" "})

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpCredentials,"<==LoginwithsignUPcredentials==>>");
  };

  return (
    <div className={styles.container}>
      <div>i am here</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Welcome to 24 X 7</h2>
        <div className={styles.formGroup}>
          <label className={styles.labelStyle} htmlFor="userName">Enter your Username</label>
          <input
            type="text"
            id="userName"
            className={styles.inputStyle}
            value={signUpCredentials.userName}
            onChange={(e,prev) => setSignUpCredentials({userName:e.target.value})}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelStyle} htmlFor="email">Enter your Email</label>
          <input
            type="email"
            id="email"
            className={styles.inputStyle}
            value={signUpCredentials.email}
            onChange={(e,prev) => setSignUpCredentials({...prev,email:e.target.value})}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelStyle} htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            className={styles.inputStyle}
            value={signUpCredentials.password}
            onChange={(e,prev) => setSignUpCredentials({...prev,password:e.target.value})}
            required
          />
        </div>
        <button className={styles.buttonStyle}  type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
