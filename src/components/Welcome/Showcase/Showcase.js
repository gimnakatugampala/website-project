import React, { Component } from 'react'
import './styles.css'

import ShowcaseImg from '../../../images/group-7.svg'

export default class Showcase extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className='left-container'>
                    <h1>Sri Lanka Software Valley</h1>
                    <p>Where the world meets startups. Millions of small businesses use Freelancer to turn their ideas into reality</p>
                    <button>Get started for free</button>
                </div>

                <div className='right-container'>
                    <img src={ShowcaseImg} alt="showcase-img" className='image-right' />
                </div>
            </div>
        )
    }
}
