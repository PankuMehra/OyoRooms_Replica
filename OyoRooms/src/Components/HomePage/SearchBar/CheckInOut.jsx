import React, { useState } from 'react'
import DateRange from './DateRangePicker'
import styles from './input.module.css'
import { useSelector } from 'react-redux';

const CheckInOut = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const { startDate, endDate } = useSelector(state => state.Search)
    let start = Date().toString().split(" ").slice(0, 3).join(" ")
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let end = date.toString().split(" ").slice(0, 3).join(" ")
    const handleCheckInOut = () => {

        setShowDatePicker(!showDatePicker)
    }
    return (
        <div>
            <input onChange={() => console.log(startDate)} className={styles.input} value={startDate ? `${startDate}  -  ${endDate}` : `${start}  -  ${end}`} type="text" onClick={() => setShowDatePicker(!showDatePicker)} />
            {showDatePicker && <DateRange onOkClick={handleCheckInOut} />}
        </div>
    )
}

export default CheckInOut
