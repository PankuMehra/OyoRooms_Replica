export const hotelListingDataRequest = (payload) => (dispatch) => {
  console.log("hotel listing calling...", payload);
  dispatch(pageChange(payload.page));
  dispatch(hotelListingRequest());

  return axios
    .post("/hotel_listing?" + payload.path, {
      ...payload.location,
    })
    .then((data) => {
      console.log(data);
      dispatch(hotelListingSuccess(data));
    })
    .catch((error) => dispatch(hotelListingFailure(error)));
};
