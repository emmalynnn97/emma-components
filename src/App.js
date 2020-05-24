import React from 'react';
import './App.css';
import CoolNav from './CoolNav'
function App() {

  const sectionHeights = [95, 30, 85, 100];
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
      backgroundImage: 'url("https://cosmic-s3.imgix.net/90f8d740-9c08-11ea-8035-67de785f6488-ilya-pavlov-OqtafYT5kTw-unsplash-1.jpg")',
      overlay:{
        height:`${sectionHeights[0]}vh`
      },
      content:{
        header:{
          text:"Single Page Scroll Template",
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
      <CoolNav sectionHeights={sectionHeights} sections={sections} links={links} bgColor='' />
    </div>
  );
}

export default App;
