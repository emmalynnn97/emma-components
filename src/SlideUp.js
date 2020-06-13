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
        var slideUps = document.querySelectorAll('.slide-up');
        var numNextHidden = 0;
        for (var i = 0; i < slideUps.length; i++) {
            if (i > 2) {
                slideUps[i].style.width = '0'
                slideUps[i].style.padding = '0'
                slideUps[i].style.opacity='0'
                slideUps[i].style.visibility='hidden'
            }
        }
        document.querySelector('.next-button').addEventListener('click', () => {
            numNextHidden++;
            for (var i = 0; i < slideUps.length; i++) {
                if (i < numNextHidden) {
                    slideUps[i].style.width = '0'
                    slideUps[i].style.padding = '0'
                    slideUps[i].style.opacity='0'
                    slideUps[i].style.visibility='hidden'
                }
                if (i === slideUps.length - numNextHidden) {
                    slideUps[i].style.width = '33%'
                    slideUps[i].style.padding = '5px'
                    slideUps[i].style.visibility='visible'
                }
            }
        })
        document.querySelector('.prev-button').addEventListener('click', () => {
            for (var i = 0; i < slideUps.length; i++) {
                if (i === 2) {
                    slideUps[i].style.width = '0'
                    slideUps[i].style.padding = '0'
                    slideUps[i].style.opacity='0'
                    slideUps[i].style.visibility='hidden'
                }
                if (i === slideUps.length - 2 || i ===0) {
                    slideUps[i].style.width = '33%'
                    slideUps[i].style.padding = '5px'
                    slideUps[i].style.visibility='visible'
                    slideUps[i].style.opacity='1'
                }
            }
        })
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
            justifyContent: 'center'
        }
        const nextStyle = {
            width: '50px',
            backgroundColor: 'rgb(0,0,20)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '34px',
            lineHeight: '1.5',
            cursor: 'pointer',
            transition: '.35s ease',
            zIndex: '2'
        }
        const prevStyle = {
            width: '50px',
            backgroundColor: 'rgb(0,0,20)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '34px',
            lineHeight: '1.5',
            cursor: 'pointer',
            transition: '.35s ease',
            zIndex: '2'
        }
        const innerContentStyle = {
            display: 'flex',
            overflowY: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: 'rgba(0,0,70,.2)',
        }
        return (
            <div className='slide-up-container'>
                <div style={innerContentStyle}>
                    <div style={{ width: '95%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', top: '30vh' }}>
                        <div style={nextStyle} class='next-button'>&#171;</div>
                        <div style={prevStyle} class='prev-button'>&#187;</div>
                    </div>
                    <h2>Recent Projects</h2>
                    <div className='slide-container' style={slideContainerStyle}>
                        {this.state.slides.map(slide => <div className='slide-up' style={slideUpStyle}>{slide}</div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default SlideUp
