import React, { Component } from 'react'

export class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             outline:'2px solid gray'
        }
    }
    
    render() {
        const outerStyle={
            border:'2px solid black',
            height:'500px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
            width:'50%',
            textAlign:'center',
            padding:'25px'
        }
        const formStyle={
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            border:'2px solid black',
            height:'60%',
            width:'40%'
        }
        const inputStyle={
            width:'100%',
            height:'35px',
            border:'none',
            outline:this.state.outline,
            transition:'1s ease'
        }
        const submitStyle={
            height:'35px',
            width:'125px',
            backgroundColor:'pink',
            border:'2px solid white',
            color:'white'
        }
        return (
            <div style={outerStyle}>
                <h1 style={{margin:'1rem 0 0 0'}}>Send me a message</h1>
                <p style={{margin:'1rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form style={formStyle}>
                    <label>
                        <input onMouseEnter={()=>{this.setState({outline:'2px solid pink'})}} style={inputStyle} type="text" name="name" placeholder='Name' />
                    </label>
                    <label>
                        <input style={inputStyle} type="email" name="email" placeholder='Email Address' />
                    </label>
                    <label>
                        <input style={inputStyle} type="text" name="subject" placeholder='Subject' />
                    </label>
                    <label>
                        <textarea></textarea>
                    </label>
                        <input style={submitStyle} type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

export default ContactForm
