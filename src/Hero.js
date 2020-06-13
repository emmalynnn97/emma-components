import React, { Component } from 'react'
import Overlay from './Overlay'
export class Hero extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             parallax:this.props.parallax,
             height:this.props.height,
             overlayColor:this.props.overlayColor,
             content:this.props.content
        }
    }
    
    render() {
        var heroStyle;
        if(this.state.parallax){
            heroStyle = {
                height:this.state.height,
                maxHeight:'750px',
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundAttachment:'fixed',
                backgroundPosition:'bottom',
            }
        }
        else{
            heroStyle = {
                height:this.state.height,
                maxHeight:'750px',
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundPosition:'center',
            }
        }
         
        return (
            <div className='hero' style={heroStyle}>
                <Overlay content={this.state.content} bgColor={this.state.overlayColor}/>
            </div>
        )
    }
}

export default Hero
