import React, { useState } from 'react';

const HookForm = (props) => {
    const [first, setFirst] = useState("");
    const [firstError, setFirstError] = useState("");
    const [last, setLast] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const validateFirst = (e) => {
        setFirst(e.target.value);
        if(e.target.value.length < 2){
            setFirstError("First Name must be at least 2 characters.");
        } else {
            setFirstError("");
        }
    }

    const validateLast = (e) => {
        setLast(e.target.value);
        if(e.target.value.length < 2){
            setLastError("Last Name must be at least 2 characters.");
        } else {
            setLastError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    }

    const validateConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value != password){
            setConfirmError("Passwords must match.");
        } else {
            setConfirmError("");
        }
    }

    return (
        <>
            <form>
                <p>
                    <label>First Name: </label>
                    <input type="text" onChange={validateFirst} />
                    {
                        firstError ? <p style={{color: 'red'}}>{firstError}</p> : ''
                    }
                </p>
                <p>
                    <label>Last Name: </label>
                    <input type="text" onChange={validateLast} />
                    {
                        lastError ? <p style={{color: 'red'}}>{lastError}</p> : ''
                    }
                </p>
                <p>
                    <label>Email: </label>
                    <input type="text" onChange={validateEmail} />
                    {
                        emailError ? <p style={{color: 'red'}}>{emailError}</p> : ''
                    }
                </p>
                <p>
                    <label>Password: </label>
                    <input type="text" onChange={validatePassword} />
                    {
                        passwordError ? <p style={{color: 'red'}}>{passwordError}</p> : ''
                    }
                </p>
                <p>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={validateConfirm} />
                    {
                        confirmError ? <p style={{color: 'red'}}>{confirmError}</p> : ''
                    }
                </p>
            </form>
            <h3>Your Form Details:</h3>
            <p>First Name:  {first}</p>
            <p>Last Name:  {last}</p>
            <p>Email:  {email}</p>
            <p>Password:  {password}</p>
            <p>Confirm Password:  {confirm}</p>
        </>
    );
}

export default HookForm;