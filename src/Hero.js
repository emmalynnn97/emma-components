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
             content:this.props.content,
             hRotation:0,
             transition:5
        }
    }
    
    render() {
        var heroStyle;
        if(this.state.parallax){
            heroStyle = {
                height:this.state.height,
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundAttachment:'fixed',
                backgroundPosition:'bottom',
                filter:`hue-rotate(${this.state.hRotation}deg)`,
                transition:`${this.state.transition}s linear`
            }
        }
        else{
            heroStyle = {
                height:this.state.height,
                minHeight:'250px',
                backgroundSize:'cover',
                backgroundImage:`url("${this.state.image}")`,
                backgroundPosition:'center',
                filter:`hue-rotate(${this.state.hRotation}deg)`,
                transition:`${this.state.transition}s linear`
            }
        }
        return (
            <div onMouseLeave={()=>{this.setState({hRotation:-120,transition:5})}} onMouseEnter={()=>{this.setState({hRotation:0,transition:2})}} className='hero' style={heroStyle}>
                <Overlay isDynamic={true} content={this.state.content} bgColor={this.state.overlayColor}/>
            </div>
        )
    }
}

export default Hero
