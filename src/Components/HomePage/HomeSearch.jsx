import { Margin } from '@mui/icons-material'
import React from 'react'
import Search from './Search'
// import Search from './Search'





const HomeSearch = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(210,22,78)', height: '24vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start',paddingTop:'25px' }}>
                <h1 style={{ color: 'white' }}>Over 157,000 hotels and homes across 35 countries</h1>
                {/* <Search /> */}
                {/* <Search/> */}
               <div className='abk-input'  style={{display:'flex',marginTop:'35px'}} >
                <div><input className='input-box' style={{height:'60px',width:'400px',paddingLeft:'10px',fontSize:'20px',border:'none',borderRight:'1px solid black',outline:'none'}} /></div>
                 <div><input className='input-box' style={{height:'60px' ,width:'280px',paddingLeft:'10px', fontSize:'20px',border:'none',borderRight:'1px solid black',outline:'none'}}/></div>
                 <div><input className='input-box'style={{height:'60px',width:'270px',paddingLeft:'10px',fontSize:'20px',border:'none',borderRight:'1px solid black',outline:'none'}}/></div>
                 <div><button style={{height:'60px',width:'150px',backgroundColor:'hsl(140,75%,41%)',border:'none',fontSize:'20px',color:'white',borderRadius:'0px 10px 10px 0px'}}>Search</button></div>
               </div>
            </div>
        
        </>
    )
}

export default HomeSearch