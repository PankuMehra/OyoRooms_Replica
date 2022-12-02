export const HotelAction = (data, dispatch) => {
    dispatch({
        type: "hotelData",
        payload: data
    })
};
