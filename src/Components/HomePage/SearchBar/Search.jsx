import React from 'react'
import CheckInOut from './CheckInOut'
import InputPlace from './InputPlace'
import People from './People'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '5.7vh',
                    width: '9vw',
                    backgroundColor: '#1ab64f',
                    '&:hover': {
                        background: "#1ab64f",
                    }
                },
            },
        },
    },
});


const Search = () => {
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputPlace />
            <CheckInOut />
            <People />
            <ThemeProvider theme={theme}>
                <Link to='/oyorooms' style={{ textDecoration: "none" }}> <Button variant="contained" >Search</Button></Link>
            </ThemeProvider>
        </div>
    )
}

export default Search