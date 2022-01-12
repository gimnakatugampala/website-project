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
                    <h1 className='update-title'>Update Your Password</h1>

                    <p>Enter your username or email address and select Send Email.</p>
                    <p>User name or Email.</p>

                    <div className='update-email-container'>
                        <img src={EmailImage} alt="Email-One" />
                        <input placeholder='Login With Email Address' />
                    </div>

                    <div className='update-email-button-container'>
                        <button>Cancel</button>
                        <button>Send Email</button>
                    </div>

                </div>
                
            </div>
        )
    }
}
