import React from 'react'
import Row from '../Row'
export default {
    title:'Row',
    component:Row
};

export const row = ()=><Row content={<>
<div>
    <h2 style={{color:'white'}}>
        Join Our Newsletter
    </h2>

    <input style={{
        background:'rgba(0,0,0,0)',
        color:'white',
        border:'2px solid white',
        width:'100%',
        padding:'5px'
        }} type="email" name="email" value='Email Address' placeholder="Email Address"/>
</div>
</>} bgColor='linear-gradient(90deg, rgb(230,100,150), rgb(225,175,0))' height='15vw' />

export const row2 = ()=><>
<Row content={
<>  
        <h2 style={{color:'white',letterSpacing:'1.5px'}}>
            Full Width Row
        </h2>
        <img style={{maxWidth:'500px',width:'25%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/428dde00-94d5-11ea-969f-a5a6f4d5b4e8-wild-flowers-5719401920.jpg" alt="pretty flowers"/>
            <img style={{maxWidth:'400px',width:'20%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/759e8030-94d8-11ea-969f-a5a6f4d5b4e8-rose-31425291920.jpg" alt="pretty rose"/>
    </>
} bgColor='linear-gradient(60deg, blue, pink'/>
<Row content={
<>  
        <h2 style={{textShadow:'2px 2px 4px black',color:'white',letterSpacing:'1.5px'}}>
            Full Width Row
        </h2>
        <img style={{maxWidth:'400px',width:'25%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/4a86a940-8f56-11ea-b24f-a9066b5dde94-buildings.jpg" alt="buildings"/>
            <img style={{maxWidth:'200px',width:'20%',boxShadow:`0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12)`}} src="https://cosmic-s3.imgix.net/17fd5000-9d6b-11ea-9d0a-45b8804d1af8-georgie-cobbs-muOHbrFGEQY-unsplash.jpg" alt="work space"/>
    </>
} bgColor='linear-gradient(90deg, orange, yellow'/>
</>