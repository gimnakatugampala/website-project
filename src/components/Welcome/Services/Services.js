import React, { Component } from 'react'
import './styles.css'
import ImageOne from '../../../images/group-12.svg'
import ImageTwo from '../../../images/group-13.svg'
import ImageThree from '../../../images/group-14.svg'
import ImageFour from '../../../images/group-14-1.svg'
import ImageFive from '../../../images/group-15.svg'

export default class Services extends Component {
    render() {
        return (
            <div className="services-container">
                <h1 className='title'>Our Services</h1>

                <div className='cards'>

                    <button className='arrow-left'><i className="fas fa-arrow-left"></i></button>

                    <div className='card'>
                        <h2>E-commerce Development</h2>
                        <img src={ImageOne} className='image' alt="image1" />
                    </div>

                    <div className='card'>
                        <h2>Web Site Builders</h2>
                        <img src={ImageTwo} className='image' alt="image2" />
                    </div>

                    <div className='card'>
                        <h2>Mobile app development</h2>
                        <img src={ImageThree} className='image1' alt="image3" />
                        <img src={ImageFour} className='image1' alt="image4" />

                    </div>

                    <div className='card'>
                        <h2>Game</h2>
                        <img src={ImageFive} className='image' alt="image5" />
                    </div>

                    <button className='arrow-right'><i className="fas fa-arrow-right"></i></button>

                </div>
            </div>
        )
    }
}
