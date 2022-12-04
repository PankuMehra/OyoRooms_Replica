import { appConstants } from "./actionTypes";


export const selectDateRange = ({ start, end, diffDays }) => {
    return {
        type: appConstants.SELECT_DATE_RANGE,
        payload: {
            start,
            end,
            diffDays
        }
    };
};
export const totalNoRoom = ({ val }) => {
    return {
        type: appConstants.TOTAL_NO_ROOM,
        payload: {
            room: val
        }
    };
};
export const totalNoGuest = ({ val }) => {
    return {
        type: appConstants.TOTAL_NO_GUEST,
        payload: {
            guest: val
        }
    };
};
export const searchCityName = ({val} ) => {
    return {
        type: appConstants.SEARCH_CITY_NAME,
        payload: val
    };
};