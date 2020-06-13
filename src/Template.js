import React, { Component } from 'react'
import Hero from './Hero'
import SlideUp from './SlideUp'
import Footer from './Footer'
export class Template extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    render() {
        const heroContent = <>
        <div style={{
            marginLeft:'7vw',
            lineHeight:'1.5'
        }}>
        <h1>Hi, my name is Emma Lynn &#9825; <br/>I develop and design websites</h1>
        </div>
        </>
        const slides = [
        <div style={{
            height:'100%',
            width:'100%',
            backgroundImage:'url("https://imgix.cosmicjs.com/ce21a580-8e79-11ea-bd26-81830172bbcb-Screen-Shot-2020-04-05-at-7.26.33-PM.png")',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}></div>,
        <div style={{
            height:'100%',
            width:'100%',
            backgroundImage:'url("https://imgix.cosmicjs.com/5553d8b0-8f52-11ea-847f-0d558a1b2ff3-Screen-Shot-2020-04-05-at-7.07.46-PM.png")',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}></div>,
        <div style={{
            height:'100%',
            width:'100%',
            backgroundImage:'url("https://imgix.cosmicjs.com/9e7a0e20-8f56-11ea-b24f-a9066b5dde94-Screen-Shot-2020-04-23-at-3.22.46-PM.png")',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}></div>
    ]
        return (
            <div>
                <Hero content={heroContent} overlayColor='rgba(0,0,70,.2)' height='87.5vh' parallax={true} image='https://imgix.cosmicjs.com/ebe9b000-ad49-11ea-8ffe-4bdcca0409c6-background-bloom-blooming-blossom-583850.jpg'/>
                <SlideUp slides={slides} />
                <Footer content={<><h2 style={{margin:'0 2.5vw'}}>Emma Lynn Web Development</h2><a rel="noopener noreferrer" target="_blank" href="https://github.com/emmalynnn97"><img src="https://cosmic-s3.imgix.net/4ae87a70-a3b1-11ea-8370-b9ea0c50cbb0-GitHub-Mark-Light-32px.png" alt="github logo" /></a></>} bgColor='linear-gradient(35deg,rgba(0,0,20,.5),rgb(15,0,80))'/>
            </div>
        )
    }
}

export default Template
