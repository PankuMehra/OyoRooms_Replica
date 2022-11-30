import { appConstants } from "./actionTypes";

const initialState = {
    city: '',
    startDate: '',
    endDate: '',
    diff: 1,
    room: 1,
    guest: 1,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case appConstants.SELECT_DATE_RANGE: {
            return { ...state, startDate: action.payload.start, endDate: action.payload.end, diff: action.payload.diffDays };
        }
        case appConstants.TOTAL_NO_ROOM: {
            let rooms = state.room + action.payload.room;
            return { ...state, room: rooms };
        }

        case appConstants.TOTAL_NO_GUEST: {
            let guests = state.guest + action.payload.guest;
            return { ...state, guest: guests };
        }
        case appConstants.SEARCH_CITY_NAME: {
            return { ...state, city: action.payload };
        }
        default:
            return state;
    }
}