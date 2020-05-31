import React, { Component } from 'react'
import Hero from './Hero'
import Card from './Card'
import FullWidth from './FullWidth'
export class AgencyTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        
        const rowStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '2vw 50px',
            zIndex:'2',
            margin:'0 0'
        }
        return (
            <div>
                <Hero parallax={true} image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg' />
                <div style={rowStyle}>
                    <Card image='https://cosmic-s3.imgix.net/c74b1580-a2d2-11ea-a53d-43d1307482f8-william-iven-DfMMzzi3rmg-unsplash.jpg' />
                    <Card image='https://cosmic-s3.imgix.net/1ab76020-a2bf-11ea-925c-2bec73dc3cb5-nikolay-tarashchenko-u76CN5rZeOU-unsplash.jpg' />
                    <Card image='https://cosmic-s3.imgix.net/fda91550-a2d2-11ea-8370-b9ea0c50cbb0-jess-bailey-l3N9Q27zULw-unsplash.jpg' />
                </div>
                <FullWidth image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg'/>
            </div>
        )
    }
}

export default AgencyTemplate
