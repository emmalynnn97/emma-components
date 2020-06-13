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
        this.setState({leftDist:-5,opacity:1})
      }
    })
    rightSlides.forEach((rightSlide) => {
      if (this.isElementXPercentInViewport(rightSlide, 80)) {
        this.setState({rightDist:5,opacity:1})
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
            height:'50vh',
            width:'100%',
            backgroundColor:'pink',
            display:'flex',
            overflowX:'hidden',
            justifyContent:'space-evenly'
        }
        const leftSlideStyle={
            height:'75%',
            width:'250px',
            backgroundColor:'powderblue',
            transition:'.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform:`translateX(${this.state.leftDist}vw)`,
            opacity:this.state.opacity
        }
        const rightSlideStyle={
            height:'75%',
            width:'250px',
            backgroundColor:'green',
            transition:'.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform:`translateX(${this.state.rightDist}vw)`,
            opacity:this.state.opacity
        }
        return (
            <div style={containerStyle}>
                <div className='left-slide' style={leftSlideStyle}></div>
                <div className='right-slide' style={rightSlideStyle}></div>
            </div>
        )
    }
}

export default SlideIn
