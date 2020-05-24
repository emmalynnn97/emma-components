import React, { Component } from 'react'

export class CoolNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: '100px',
            width: '100%',
            links: this.props.links,
            bgColor: this.props.bgColor,
            sections: this.props.sections,
            sectionHeights: this.props.sectionHeights,
            section:{
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                headerStyle:{
                    color: 'white',
                    fontSize: '60px',
                    textTransform: 'uppercase',
                    fontWeight: '900',
                    textShadow: '2px 2px 4px black',
                    letterSpacing: '1.25px',
                    textAlign: 'center'
                },
                overlay: {
                  backgroundColor: 'rgba(50,50,125,.7)',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  cursor: 'pointer'
                },
                arrowStyle: {
                  color: 'white',
                  fontSize: '60px',
                  textTransform: 'uppercase',
                  fontWeight: '900',
                  textShadow: '2px 2px 4px black',
                  position: 'absolute',
                  top: '50vh',
                },
                content: {
                    text: ""
                }
              }
        }
        this.highlightSection = this.highlightSection.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.highlightSection);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.highlightSection);
    }
    highlightSection() {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        if (y === 0) {
            this.setState({
                links: {
                    link1: this.props.links.link1,
                    link2: this.props.links.link2,
                    link3: this.props.links.link3,
                    link4: this.props.links.link4
                }
            })
        }
        if (y >= 1) {
            const link1Active = { ...this.state.links.link1, ...{ backgroundColor: 'white', color: 'blue', textShadow: 'none' } }

            this.setState({
                links: {
                    link1: link1Active,
                    link2: this.props.links.link2,
                    link3: this.props.links.link3,
                    link4: this.props.links.link4
                }
            })
        }
        if (y >= ( (this.state.sectionHeights[0] )*(window.innerHeight / 100) ) ) {
            const link2Active = { ...this.state.links.link2, ...{ backgroundColor: 'white', color: 'blue', textShadow: 'none' } }
            this.setState({
                links: {
                    link1: this.props.links.link1,
                    link2: link2Active,
                    link3: this.props.links.link3,
                    link4: this.props.links.link4
                }
            })
        }
        if (y >= ( (this.state.sectionHeights[0] + this.state.sectionHeights[1] )*(window.innerHeight / 100) ) ) {
            const link3Active = { ...this.state.links.link3, ...{ backgroundColor: 'white', color: 'blue', textShadow: 'none' } }

            this.setState({
                links: {
                    link1: this.props.links.link1,
                    link2: this.props.links.link2,
                    link3: link3Active,
                    link4: this.props.links.link4
                }
            })
        }
        if (y >= ( (this.state.sectionHeights[0] + this.state.sectionHeights[1] + this.state.sectionHeights[2])*(window.innerHeight / 100) ) ) {
            const link4Active = { ...this.state.links.link4, ...{ backgroundColor: 'white', color: 'blue', textShadow: 'none' } }

            this.setState({
                links: {
                    link1: this.props.links.link1,
                    link2: this.props.links.link2,
                    link3: this.props.links.link3,
                    link4: link4Active
                }
            })
        }

    }


    render() {
        const navStyle = {
            height: this.state.height,
            width: this.state.width,
            backgroundColor: this.state.bgColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            right: '0',
            left: '0',
            zIndex: '2'
        }
        const sectionContainerStyle = {
            width: '100%'
        }
        const s1 = {...this.state.section,...this.state.sections.section1}
        const s1overlay = {...this.state.section.overlay,...this.state.sections.section1.overlay}
        const s2 = {...this.state.section,...this.state.sections.section2}
        const s3 = {...this.state.section,...this.state.sections.section3}
        const s4 = {...this.state.section,...this.state.sections.section4}
        
        return (
            <>
                <div style={navStyle}>
                    <div className='nav-link' onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} style={this.state.links.link1}>{this.state.links.link1.text}</div>

                    <div className='nav-link' onClick={() => {
                        window.scrollTo({ top: 1 +(this.state.sectionHeights[0] * (window.innerHeight / 100)), behavior: 'smooth' });
                    }} style={this.state.links.link2}>{this.state.links.link2.text}</div>

                    <div className='nav-link' onClick={() => {
                        window.scrollTo({ top: 1+ (this.state.sectionHeights[0] + this.state.sectionHeights[1]) * (window.innerHeight / 100), behavior: 'smooth' });
                    }} style={this.state.links.link3}>{this.state.links.link3.text}</div>
                    <div className='nav-link' onClick={() => {
                        window.scrollTo({ top: 1+ (this.state.sectionHeights[0] + this.state.sectionHeights[1] + this.state.sectionHeights[2]) * (window.innerHeight / 100), behavior: 'smooth' });
                    }} style={this.state.links.link4}>{this.state.links.link4.text}</div>
                </div>

                <div className='sectionContainer' style={sectionContainerStyle}>
                    
                    <div className='section' style={s1}>
                        <div className='section-overlay' onClick={() => {
                            window.scrollTo({ top: 1+(this.state.sectionHeights[0] * (window.innerHeight / 100)), behavior: 'smooth' });
                        }}
                            style={s1overlay}>
                            <h1 className='header' style={this.state.section.headerStyle}>{s1.content.header.text}</h1>
                            <h1 className='arrow' style={s1.arrowStyle}>&#8964;</h1>
                        </div>
                    </div>

                    <div style={s2}>
                    <h1 className='header' style={this.state.section.headerStyle}>{s2.content.header.text}</h1>
                    </div>
                    <div style={s3}>
                    <h1 className='header' style={this.state.section.headerStyle}>{s3.content.header.text}</h1>
                    </div>
                    <div style={s4}>
                    <h1 className='header' style={this.state.section.headerStyle}>{s4.content.header.text}</h1>
                    </div>
                </div>

            </>
        )
    }
}

export default CoolNav
