import React from 'react'
import './Login.css'
import { loginURL } from '../../spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://crowdsurf.net/llcoolj/wordpress/wp-content/uploads/2016/04/spotify.png" alt=""/>
            <a href={loginURL}>Login with spotify</a>
        </div>
    )
}

export default Login
