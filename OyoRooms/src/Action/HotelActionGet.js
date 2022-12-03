export const getHotelRooms = (city, dispatch) => {
  let url = "https://oyo-data.onrender.com/hotel";
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log("OK", res);
      dispatch({
        type: "GET_HOTELDATA_SUCCESS",
        payload: res,
      });
    });
};
