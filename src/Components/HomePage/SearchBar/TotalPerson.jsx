import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch } from 'react-redux';
import { totalNoGuest } from '../../redux/Search/action'

const TotalPerson = ({ roomNo }) => {
    const [personPerRoom, setPersonPerRoom] = useState(1)
    const dispatch = useDispatch()
    const handleClick = (val) => {
        dispatch(totalNoGuest({ val }))
        setPersonPerRoom(prev => prev + val)
    }
    console.log(personPerRoom)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div>
                Room{roomNo}
            </div>
            <div>
                <IconButton color="success" disabled={personPerRoom <= 1} onClick={() => handleClick(-1)}><RemoveCircleIcon /></IconButton>
                {personPerRoom}
                <IconButton color="success" disabled={personPerRoom >= 3} onClick={() => handleClick(1)}><AddCircleOutlineIcon /></IconButton>
            </div>
        </div>
    )
}

export default TotalPerson