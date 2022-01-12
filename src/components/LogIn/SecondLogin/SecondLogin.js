import React, { Component } from 'react'
import './styles.css'

import ImageOne from '../../../images/frame.svg'
import ImageTwo from '../../../images/security.svg'

export default class SecondLogin extends Component {
    render() {
        return (
            <div className='main-enter-password-email'>
                <div className="nav-logo"></div>

                <div className='enter-password-email'>
                    <img src={ImageOne} alt='imageone' />
                        <h1 className='title'>Log in to Sri Lanka <br /> Software Valley</h1>
                </div>

        

                <div className='input-enter-password-email'>
                    <img src={ImageTwo} alt='ImageTwo' />
                    <input placeholder='Enter your password' type='password' />
                </div>

                <div className='input-checkbox-container'>
                    <div>
                         <input type="checkbox" />Keep me logged in
                    </div>

                     <a href='#'>Forgot your password?</a>
                </div>

                <button className='enter-password-last'>
                    Login With Email Address
                </button>

            </div>
        )
    }
}
