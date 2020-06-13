import React, { Component } from 'react'
export class Overlay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:this.props.content,
             bgColor:this.props.bgColor
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset < 50){
                this.setState({
                    content:this.props.content
                })
            }
            if(window.pageYOffset > 50){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design user experiences &#9834;</h1>
                    </div>
                    </>
                })
            }
            if(window.pageYOffset > 150){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design single page applications</h1>
                    </div>
                    </>
                })
            }
            if(window.pageYOffset > 300){
                this.setState({
                    content:<>
                    <div style={{
                        marginLeft:'7vw',
                        lineHeight:'1.5'
                    }}>
                    <h1>Hi, my name is Emma Lynn<br/>I develop and design digital tools &#9874;</h1>
                    </div>
                    </>
                })
            }
        })
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
                {this.state.content}
            </div>
        )
    }
}

export default Overlay
