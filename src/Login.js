import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return ( 
    <div className="login">
        <img src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png"
        alt="Spotify Logo"
        />
        <a href={loginUrl}>Login With Spotify</a>
    </div>
    );
}

export default Login;