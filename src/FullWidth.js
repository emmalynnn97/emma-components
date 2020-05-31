import React, { Component } from 'react'

export class FullWidth extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             content:this.props.content,
             height:this.props.height,
        }
    }
    
    render() {
        const fullWidthStyle={
            height:this.state.height,
            width:'100%',
            backgroundImage:`url("${this.state.image}")`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            minHeight:'200px',
            maxHeight:'400px'
        }
        return (
            <div style={fullWidthStyle}>
                {this.state.content}
            </div>
        )
    }
}

export default FullWidth