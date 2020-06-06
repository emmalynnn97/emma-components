import React, { Component } from 'react'

export class Row extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             image:this.props.image,
             content:this.props.content,
             height:this.props.height,
             bgColor:this.props.bgColor
        }
    }
    
    render() {
        const rowStyle={
            height:this.state.height,
            width:'100%',
            backgroundImage:`url("${this.state.image}")`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            background:this.state.bgColor,
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            minHeight:'200px',
            maxHeight:'400px',
            padding:'50px 0px',
            margin:'.25vh 0'
        }
        return (
            <div style={rowStyle}>
                {this.state.content}
            </div>
        )
    }
}

export default Row
