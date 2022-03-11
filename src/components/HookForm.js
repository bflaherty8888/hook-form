import React, { useState } from 'react';

const HookForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <>
            <form>
                <p>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirst(e.target.value)} />
                </p>
                <p>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLast(e.target.value)} />
                </p>
                <p>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirm(e.target.value)} />
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