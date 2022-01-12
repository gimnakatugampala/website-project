import React, { Component } from 'react'
import './styles.css'
import Logo from '../../../images/logo.svg'
import Youtube from '../../../images/youtube.svg'
import Instagram from '../../../images/instagram.svg'
import LinkedIn from '../../../images/linkedin.svg'
import Pinterest from '../../../images/pinterest.svg'
import Globe from '../../../images/globe.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className='main-footer'>
                <div className='footer-logo-container'>
                    <img src={Logo} alt='logo' />
                    <p>© Sri Lanka Software Valley LTD. 2021</p>
                </div>
                <div className='footer-social-container'>
                    <img src={Youtube} alt='youtube' className='social' />
                    <img src={Instagram} alt='instagram' className='social' />
                    <img src={LinkedIn} alt='linkedin' className='social' />
                    <img src={Pinterest} alt='pinterest' className='social' />
                        <img src={Globe} alt='globe' className='social'  />
                        <h4 className='social-text'>English</h4>
                </div>
            </div>
        )
    }
}
