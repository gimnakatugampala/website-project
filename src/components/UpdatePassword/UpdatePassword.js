import React, { Component } from 'react'
import './styles.css'

import UpdateImage from '../../images/update.svg'
import EmailImage from '../../images/email.svg'

export default class UpdatePassword extends Component {
    render() {
        return (
            <div>
                <div className="nav-logo"></div>

                <div className='update-password-container'>
                    <img src={UpdateImage} alt='Update' />
                    <h1 className='update-title display-1'>Update Your Password</h1>

                    <p className='fs-4'>Enter your username or email address and select Send Email.</p>
                    <p className='fs-4'>User name or Email.</p>

                    <div className='update-email-container'>
                        <img src={EmailImage} alt="Email-One" />
                        <input placeholder='Login With Email Address' className='display-3 rounded-pill border border-dark' />
                    </div>

                    <div className='update-email-button-container'>
                        <button className='rounded-pill border border-dark'>Cancel</button>
                        <button className='rounded-pill border border-dark'>Send Email</button>
                    </div>

                </div>
                
            </div>
        )
    }
}
