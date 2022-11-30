import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCityName } from '../../redux/Search/action'
import style from './People.module.css'

const InputPlace = () => {
    const [val, setVal] = useState("")
    const [dataListShow, setDataListShow] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchCityName( {val} ));
        val.length >= 2 ? setDataListShow(true) : setDataListShow(false);
        // eslint-disable-next-line
    }, [val])
    return (
        <div>
            <input className={style.inp} value={val} list={dataListShow ? "suggesion" : null} onChange={(e) => { setVal(e.target.value) }} style={{ height: '5vh', width: '17vw', fontSize: 'large', fontWeight: 'bold', focus: "none" }} />
            <datalist id="suggesion">
                <option value="Nagpur"></option>
                <option value="Mumbai"></option>
                <option value="Delhi"></option>
                <option value="Bangalore"></option>
            </datalist>
        </div>
    )
}

export default InputPlace