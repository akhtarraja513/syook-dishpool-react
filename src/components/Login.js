import React, { useState } from "react";
import './login.css'

import userData from '../database/users.json'
import { login } from '../store/UserSlice'

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';


const Login = props => {

    const [hasError, SetHasError] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const userName = e.target.username.value;
        const pass = e.target.pass.value;
        console.log(userData)
        const finduser = userData.filter(
            (item) => item.username === userName && item.password === pass
        );


        if (finduser.length > 0) {
            navigate("/home");
            dispatch(login(finduser));
        } else {
            SetHasError(true);
        }

    }



    return (

        <div className="outer-container">
            <div className="container">
                <h2>LOGIN</h2>
                <form className="login-form" onSubmit={loginHandler}>
                    {hasError && <p className="error">please check username and pass</p>}
                    <input type="text" id="username" name="username" placeholder="username" required />
                    <input type="password" id="pass" name="pass" placeholder="password" required />
                    <input type="submit" id="login" value="Login" />
                </form>
                <div className="note">
                    <strong>Note : </strong>username :- "amar", password :- "amar123"
                </div>
            </div>
        </div>
    )
};

export default Login;