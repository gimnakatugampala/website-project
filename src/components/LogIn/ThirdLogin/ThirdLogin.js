import React, { Component } from 'react'
import './styles.css'

import ImageTwo from '../../../images/security.svg'
import ImageThree from '../../../images/security-3.svg'


export default class ThirdLogin extends Component {
    render() {
        return (
            <div className='main-enter-password-email'>
            <div className="nav-logo"></div>

            <div className='enter-password-email'>
                <img src={ImageThree} alt='imageone' />
                    <h1 className='title display-1'>Log in to Sri Lanka <br /> Software Valley</h1>
            </div>

            <div className="display-email">
                <p className='fs-5'>abc@gmail.com</p>
            </div>


            <div className='input-enter-password-email'>
                <img src={ImageTwo} alt='ImageTwo' />
                <input placeholder='Enter your password' type='password' className='display-3 rounded-pill border border-dark' />
            </div>

            <div className='input-checkbox-container'>
                <div>
                     <input type="checkbox" />Keep me logged in
                </div>

                 <a href='#'>Forgot your password?</a>
            </div>

            <button className='enter-password-last display-3 rounded-pill border border-dark'>
                Login With Email Address
            </button>

        </div>
        )
    }
}
