import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const login = (e) => {

        e.preventDefault();

        if (username.current.value === 'admin' && password.current.value === '1234') {
            navigate("/student")
        }
        else {
            alert("Wrong username or password!");
        }
    }

    return (

        <form onSubmit={login}>
            <label>Name:</label>
            <input type="text" ref={username} />

            <label>Passworrd:</label>
            <input type="text" ref={password} />

            <input type="submit" />
        </form>

    );

}

export default Login;