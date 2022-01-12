import React, { Component } from 'react'


import Navbar from './Navbar/Navbar'
import Showcase from './Showcase/Showcase'
import Services from './Services/Services'
import Explore from './Explore/Explore'
import SubFooter from './SubFooter/SubFooter'
import Footer from './Footer/Footer'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                    <Showcase />
                </div>

                <div>
                    <Services />
                </div>

                <div>
                    <Explore />
                </div>

                <div style={{marginTop:'20%'}}>
                    <SubFooter />
                </div>

                <div>
                    <Footer />
                </div>
               

            </div>

        )
    }
}
