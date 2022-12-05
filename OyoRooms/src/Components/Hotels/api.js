import { URL } from "../../URL"

export const getHotelRooms = (city, page,dispatch) => {
  

  console.log(city)
  console.log(page)
  let url = `${URL.hotel}?city=${city}&&_page=${page}&&_limit=4`;
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
