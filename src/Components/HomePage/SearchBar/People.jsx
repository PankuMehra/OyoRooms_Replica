import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from './People.module.css'
import TotalPerson from './TotalPerson'
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { totalNoRoom, totalNoGuest } from '../../redux/Search/action'

const People = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    const { room, guest } = useSelector(state => state.Search)
    const dispatch = useDispatch()
    let arr = Array.from(Array(room).keys());
    let styleobj = {
        display: isDisplay ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: "white",
        boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.23)",
        height: 'auto',
        width: '17vw',
    }
    const handleClick = (val) => {
        dispatch(totalNoRoom({ val }))
        dispatch(totalNoGuest({ val }))
    }
    return (
        <div>
            <input onChange={(e) => console.log(e.target.value)} value={`${room}Room, ${guest}Guests`} className={style.input} type="text" onClick={() => setIsDisplay(!isDisplay)} />
            {/* <input onClick={() => setIsDisplay(!isDisplay)} type="text" /> */}
            <div style={styleobj} className={style.addPerson}>
                <div className={style.flex_direction}>
                    <h4>Rooms</h4>
                    <h4>Guests</h4>
                </div>
                <div >
                    {arr.map(item => (<TotalPerson roomNo={Number(item) + 1} />))}
                </div>
                <div className={style.flex_direction}>
                    <Button disabled={room <= 1} onClick={() => handleClick(-1)}>delete room</Button>
                    <Button onClick={() => handleClick(1)}>add room</Button>
                </div>
            </div>
        </div >
    )
}

export default People