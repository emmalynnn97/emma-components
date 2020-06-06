import React, { Component } from 'react'
import Hero from './Hero'
import Nav from './Nav'
import Row from './Row'
import Card from './Card'
import Footer from './Footer'
import Button from './Button'

export class Template extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const links = [
            'Link 1',
            'Link 2',
            'Link 3',
            'Link 4',
        ]
        return (
            <div>
            <Nav links={links} bgColor='linear-gradient(45deg, blue, pink)'/>
            <Hero height='40vw' parallax={false} image='https://cosmic-s3.imgix.net/d13cbe90-a2b9-11ea-925c-2bec73dc3cb5-austin-distel-wawEfYdpkag-unsplash.jpg'/>
            <Row content={
<>  
<Card texture='https://www.transparenttextures.com/patterns/grid-noise.png' bgColor='#E8E6E8' content={
        <>
        <h2 style={{ margin: '0', color: '' }}>Card Title</h2>
            <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button content='Click Me' shadow='0px 8px 15px rgba(0, 0, 0, 0.1)' color='#fff' bgColor='rgb(230,100,150)' />
            </>
            } image='https://cosmic-s3.imgix.net/fda91550-a2d2-11ea-8370-b9ea0c50cbb0-jess-bailey-l3N9Q27zULw-unsplash.jpg'/>
<Card texture='https://www.transparenttextures.com/patterns/grid-noise.png' bgColor='#E8E6E8' content={
        <>
        <h2 style={{ margin: '0', color: '' }}>Card Title</h2>
            <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button content='Click Me' shadow='0px 8px 15px rgba(0, 0, 0, 0.1)' color='#fff' bgColor='rgb(230,100,150)' />
            </>
            } image='https://cosmic-s3.imgix.net/fda91550-a2d2-11ea-8370-b9ea0c50cbb0-jess-bailey-l3N9Q27zULw-unsplash.jpg'/>
<Card texture='https://www.transparenttextures.com/patterns/grid-noise.png' bgColor='#E8E6E8' content={
        <>
        <h2 style={{ margin: '0', color: '' }}>Card Title</h2>
            <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button content='Click Me' shadow='0px 8px 15px rgba(0, 0, 0, 0.1)' color='#fff' bgColor='rgb(230,100,150)' />
            </>
            } image='https://cosmic-s3.imgix.net/fda91550-a2d2-11ea-8370-b9ea0c50cbb0-jess-bailey-l3N9Q27zULw-unsplash.jpg'/>
    </>
} bgColor='linear-gradient(45deg, blue, pink)'/>
<Row content={<>
<div>
    <h2 style={{color:'white'}}>
        Join Our Newsletter
    </h2>

    <input style={{
        background:'rgba(0,0,0,0)',
        color:'white',
        border:'2px solid white',
        width:'100%',
        padding:'5px'
        }} type="email" name="email" value='Email Address' placeholder="Email Address"/>
</div>
</>} bgColor='linear-gradient(180deg, rgb(230,100,150), rgb(225,175,0))' height='15vw' />
<Row content={
<>  
        <h2 style={{textShadow:'2px 2px 4px black',color:'white',letterSpacing:'1.5px'}}>
            Full Width Row
        </h2>
        <img style={{maxWidth:'400px',width:'25%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/4a86a940-8f56-11ea-b24f-a9066b5dde94-buildings.jpg" alt="buildings"/>
            <img style={{maxWidth:'200px',width:'20%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/17fd5000-9d6b-11ea-9d0a-45b8804d1af8-georgie-cobbs-muOHbrFGEQY-unsplash.jpg" alt="work space"/>
    </>
} bgColor='linear-gradient(90deg, orange, yellow'/>
<Footer content={<><h2>Footer Text</h2><a rel="noopener noreferrer" target="_blank" href="https://github.com/emmalynnn97"><img src="https://cosmic-s3.imgix.net/4ae87a70-a3b1-11ea-8370-b9ea0c50cbb0-GitHub-Mark-Light-32px.png" alt="github logo" /></a><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/emma-guy-639014189/"><img style={{width:'32px'}} src="https://cosmic-s3.imgix.net/694dc7c0-a3b3-11ea-8370-b9ea0c50cbb0-LI-In-Bug.png" alt="linkedIn logo" /></a></>} bgColor='linear-gradient(35deg,pink,rgb(255,90,75),rgb(255,125,150))'/>
            </div>
        )
    }
}

export default Template
