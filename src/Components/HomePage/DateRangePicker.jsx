import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useDispatch } from 'react-redux';
// import { selectDateRange } from '../../redux/Search/action'
import { selectDateRange } from './redux/Search/action';

const DateRange = ({ onOkClick }) => {
	const [startDate, setStartDate] = useState(new Date())
	const dispach = useDispatch();
	const [endDate, setEndDate] = useState(new Date())

	function handleSelect(ranges) {
		setStartDate(ranges.selection.startDate)
		setEndDate(ranges.selection.endDate)

	}

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}

	const okButton = {
		height: "30px",
		width: "60px",
		color: "#fff",
		backgroundColor: "#2121ee",
		border: "none",
		cursor: "pointer"
	}

	const handleClick = () => {
		let start = startDate.toString().split(" ").slice(0, 3).join(" ");
		let end = endDate.toString().split(" ").slice(0, 3).join(" ");
		const diffTime = Math.abs(startDate - endDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		dispach(selectDateRange({ start, end, diffDays }))
		onOkClick()
	}

	return (
		<div style={{ zIndex: "20", position: 'absolute', left: '25%', margin: 'auto' }}>
			<DateRangePicker
				showSelectionPreview={false}
				showMonthAndYearPickers={false}
				months={2}
				minDate={new Date()}
				direction='horizontal'
				ranges={[selectionRange]}
				onChange={handleSelect}
			/>
			<div style={{ height: '80px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
				<button style={okButton} onClick={handleClick}>ok</button>
			</div>
		</div>
	)
}

export default DateRange