import React, { Component } from 'react'

export class SlideIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             leftDist:-150,
             rightDist:150,
             opacity:0
        }
        this.isElementXPercentInViewport = this.isElementXPercentInViewport.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
        let leftSlides = document.querySelectorAll('.left-slide');
    let rightSlides = document.querySelectorAll('.right-slide');

    leftSlides.forEach((leftSlide) => {
      if (this.isElementXPercentInViewport(leftSlide, 80)) {
        this.setState({leftDist:-3.5,opacity:1})
      }
    })
    rightSlides.forEach((rightSlide) => {
      if (this.isElementXPercentInViewport(rightSlide, 80)) {
        this.setState({rightDist:3.5,opacity:1})
      }
    })
        })
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
        const containerStyle={
            height:'25vh',
            width:'100%',
            background:`linear-gradient(180deg,rgba(0,0,20,.2),rgba(15,0,80))`,
            display:'flex',
            overflowX:'hidden',
            justifyContent:'center',
        }
        const leftSlideStyle={
            height:'100%',
            width:'25%',
            backgroundColor:'rgba(0,0,20,.5)',
            color:'white',
            transition:'.55s ease-in',
            transform:`translateX(${this.state.leftDist}vw)`,
            opacity:this.state.opacity,
            display:'flex',
            justifyContent:'center'
        }
        const rightSlideStyle={
            height:'100%',
            width:'25%',
            backgroundColor:'rgba(0,0,20,.5)',
            color:'white',
            transition:'.55s ease-in',
            transform:`translateX(${this.state.rightDist}vw)`,
            opacity:this.state.opacity,
            display:'flex',
            justifyContent:'center'
        }
        return (
            <div style={containerStyle}>
                <div className='left-slide' style={leftSlideStyle}><h3>Content</h3></div>
                <div className='right-slide' style={rightSlideStyle}><h3>Content</h3></div>
            </div>
        )
    }
}

export default SlideIn
