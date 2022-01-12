import React, { Component } from 'react'
import  './styles.css'

import Google from '../../images/google.svg'
import Apple from '../../images/apple.svg'
import Email from '../../images/email.svg'

export default class MainLogin extends Component {
    render() {
        return (
            <div className='login-container'>
                <div className="nav-logo"></div>
                <h1>Log in to Sri Lanka <br /> Software Valley</h1>

                <div className='login-button-container'>   

                    <div className='login-email-container'>
                        <img src={Email} alt="email" className='login-email' /> 
                        <input placeholder='Login with Emial Address' />
                    </div>

                    <button className='login-with-email-button'>Login With Email Address</button>

                    <div className='seperation-line'>
                        
                        <div style={{float:"left", width: "44%"}}><hr/></div>
                        <div style={{float:"right" ,width: "44%"}}><hr/></div>
                        <h4 style={{float:"center",textAlign:'center'}}>OR</h4>
                    </div>

                    <button className='other-login-button'>
                        <img src={Google} alt="google" />
                        Continue with Google
                    </button>

                    <button className='other-login-button'>
                        <img src={Apple} alt="apple" />
                        Continue with Apple
                    </button>

                    <div className='swicth-to-signup'>
                        <p>Dont't have an Account ?</p>
                        <button>Sign Up</button>
                    </div>


                </div>

                

            </div>
        )
    }
}
