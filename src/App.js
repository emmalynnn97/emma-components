import React from 'react';
import './App.css';
import SingleScroll from './SingleScroll'
function App() {

  const sectionHeights = [100, 90, 100, 100];
  const link = {
    backgroundColor: 'rgba(0,0,150,0)',
    fontSize: '34px',
    color: 'white',
    textAlign: 'center',
    transition: '.15s ease-in',
    cursor: 'pointer',
    width: '125px',
    margin: '0 1vw',
    textTransform: 'uppercase',
    fontWeight: '700',
    textShadow: '2px 2px 4px black',
  }
  const links = {
    link1: {
      ...link, ...{ text: "Link 1" }
    },
    link2: {
      ...link, ...{ text: "Link 2" }
    },
    link3: {
      ...link, ...{ text: "Link 3" }
    },
    link4: {
      ...link, ...{ text: "Link 4" }
    }
  }
  const sections = {
    section1: {
      height:`${sectionHeights[0]}vh`,
      backgroundImage: 'url("https://cosmic-s3.imgix.net/17fd5000-9d6b-11ea-9d0a-45b8804d1af8-georgie-cobbs-muOHbrFGEQY-unsplash.jpg")',
      overlay:{
        height:`${sectionHeights[0]}vh`,
        backgroundColor:'rgba(251, 215, 70,.45)'
      },
      content:{
        header:{
          text:"Single Page Scroll",
        }
      }
    },
    section2: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: `${sectionHeights[1]}vh`,
      backgroundColor: 'pink',
      content: {
        header: {
          text: "Section 2"
        }
      }
    },
    section3: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: `${sectionHeights[2]}vh`,
      backgroundColor: 'purple',
      content: {
        header: {
          text: "Section 3"
        }
      }
    },
    section4: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: `${sectionHeights[3]}vh`,
      backgroundColor: 'salmon',
      content: {
        header: {
          text: "Section 4"
        }
      }
    }
  }

  return (
    <div className="App">
      <SingleScroll sectionHeights={sectionHeights} sections={sections} links={links} bgColor='' />
    </div>
  );
}

export default App;
