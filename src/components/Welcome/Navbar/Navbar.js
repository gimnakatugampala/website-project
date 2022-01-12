import React, { Component } from 'react'
import './styles.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-logo"></div>
                <ul className='nav-list'>
                    <li><a href=''>HOME</a></li>
                    <li><a href=''>FREELANCERS</a></li>
                    <li><a href=''>EMPLOYERS</a></li>
                    <li><a href=''>ABOUT US</a></li>
                    <li><a href=''>BLOG</a></li>
                    <li><a href=''>CONTACT</a></li>
                    <li className="login"><a href=''>Log in</a></li>
                    <li  className="sigup"><a href=''>Sign up</a></li>
                </ul>
            </nav>
        )
    }
}
