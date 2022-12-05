import { URL } from "../../URL"

export const getHotelRooms = (city, dispatch) => {
  console.log(city)
  let url = `${URL.hotel}?city=${city}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log("OK", res);
      dispatch({
        type: "GET_HOTELDATA_SUCCESS",
        payload: res,
      });
      //   return res
    });
};
