import React, { Component } from 'react'

export class SlideUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slideDist: 30,
            opacity: 0,
            slides: this.props.slides,
            xOffset: 0
        }
        this.isElementXPercentInViewport = this.isElementXPercentInViewport.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            let slideUpContainers = document.querySelectorAll('.slide-up-container');
            slideUpContainers.forEach((slideUpContainer) => {
                if (this.isElementXPercentInViewport(slideUpContainer, 70)) {
                    this.setState({ slideDist: 0, opacity: 1 })
                }
            })
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    isElementXPercentInViewport(el, percentVisible) {
        let
            rect = el.getBoundingClientRect(),
            windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return !(
            Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
            Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
        )
    };
    render() {
        const slideUpStyle = {
            height: '25vh',
            width: '33%',
            transition: '.45s ease',
            padding: '5px',
            transform: `translateX(${this.state.xOffset}%) translateY(${this.state.slideDist}vh)`,
            opacity: this.state.opacity
        }
        const slideContainerStyle = {
            display: 'flex',
            width: '100%',
            padding:'0px 100px',
            overflowX: 'hidden',
            justifyContent: 'center',
            overflowY: 'hidden',
            maxWidth:'1800px'
        }
        const contentStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'rgba(0,0,70,.2)'
        }
        return (
            <div style={contentStyle} className='slide-up-container'>
                    <h2>Recent Projects</h2>
                    <div className='slide-container' style={slideContainerStyle}>
                        {this.state.slides.map(slide => <div className='slide-up' style={slideUpStyle}>{slide}</div>)}
                    </div>
            </div>
        )
    }
}

export default SlideUp
