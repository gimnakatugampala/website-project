import React, { Component } from 'react'
import './styles.css'

import Google from '../../images/google.svg'
import Apple from '../../images/apple.svg'
import Email from '../../images/email.svg'
import Validate from '../../images/warning.svg'

export default class SignUp extends Component {
    render() {
        return (
            <div className='signup-container'>
                <div className="nav-logo"></div>

                <h1 className='display-1 mb-3'>Sign up now</h1>

                <div className='signup-button-container'>
                    <button className='display-3 rounded-pill border border-dark'>
                        <img src={Google} alt="google" />
                        Continue with Google
                    </button>

                    <button className='display-3 rounded-pill border border-dark'>
                        <img src={Apple} alt="apple" />
                        Continue with Apple
                    </button>

                    <div className='seperation-line'>
                        
                    <div style={{float:"left", width: "44%"}}><hr/></div>
                    <div style={{float:"right" ,width: "44%"}}><hr/></div>
                    <h4 style={{float:"center",textAlign:'center'}}>OR</h4>
                    </div>



                    <button className='display-3 rounded-pill border border-dark'>
                    <img src={Email} alt="email" />
                        ABC@email.com
                    </button>

                    {/* Validation */}

                    {/* <div className='signup-validation'>
                        <img src={Validate} alt="validate" />
                        <h1>Enter Valid Email Address</h1>
                    </div> */}

                    <button className='signup-email display-3 rounded-pill border border-dark'>
                        Sign up with email Address
                    </button>

                </div>

            </div>
        )
    }
}
