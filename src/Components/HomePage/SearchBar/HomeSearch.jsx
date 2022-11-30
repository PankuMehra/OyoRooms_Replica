
import React from 'react'
import Search from './Search'

const HomeSearch = () => {
    return (
        <>
            <div style={{ backgroundColor: '#de273d', height: '24vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                <h1 style={{ color: 'white' }}>Over 157,000 hotels and homes across 35 countries</h1>
                <Search />
            </div>
        
        </>
    )
}

export default HomeSearch