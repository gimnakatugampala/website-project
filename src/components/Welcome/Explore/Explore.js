import React, { Component } from 'react'
import './styles.css'

import ImageOne from '../../../images/firewall-1.svg'
import ImageTwo from '../../../images/worldwide-2.svg'
import ImageThree from '../../../images/keyboard-2.svg'
import ImageFour from '../../../images/application-2.svg'
import ImageFive from '../../../images/satellite-2.svg'
import ImageSix from '../../../images/design-2.svg'
import ImageSeven from '../../../images/security-2.svg'
import ImageEight from '../../../images/online-test-2.svg'
import ImageNine from '../../../images/covid-test-2.svg'
import ImageTen from '../../../images/technical-support-2.svg'

export default class Explore extends Component {
    render() {
        return (
            <div className='explore'>
                <h1 className="title">Explore</h1>

                <div className='main-container'>

                    <div className='container'>
                        <img src={ImageOne} alt='ImageOne' />
                        <h1>Web Designing</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageTwo} alt='ImageTwo' />
                        <h1>E-commerce Development</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageThree} alt='ImageTwo' />
                        <h1>Games development</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageFour} alt='ImageTwo' />
                        <h1>Mobile Apps</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageFive} alt='ImageTwo' />
                        <h1>Electronics Engineering</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageSix} alt='ImageTwo' />
                        <h1>Web Programming</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageSeven} alt='ImageTwo' />
                        <h1>Cybersecurity & Data Protection</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageEight} alt='ImageTwo' />
                        <h1>SEO</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageNine} alt='ImageTwo' />
                        <h1>User Testing</h1>
                    </div>

                    <div className='container'>
                        <img src={ImageTen} alt='ImageTwo' />
                        <h1>Support & IT</h1>
                    </div>

                </div>

            </div>
        )
    }
}
