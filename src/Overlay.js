import React, { Component } from 'react'
import DynamicText from './DynamicText'
export class Overlay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:this.props.content,
             bgColor:this.props.bgColor,
             isDynamic:this.props.isDynamic
        }
        this.checkDynamic = this.checkDynamic.bind(this);
    }
    checkDynamic(){
        const hasChangingText = this.props.isDynamic;
        if(hasChangingText){
            return <DynamicText content={this.state.content}/>
        }
        else{
            return <>{this.state.content}</>
        }
    }
    render() {
        const overlayStyle = {
            position:'relative',
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            height:'100%',
            width:'100%',
            backgroundColor:this.state.bgColor
        }
        return (
            <div className='hero-overlay' style={overlayStyle}>
                {this.checkDynamic()}
            </div>
        )
    }
}

export default Overlay
