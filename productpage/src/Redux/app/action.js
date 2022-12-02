import { appConstants } from "./actionTypes";

export const getHotelRoomRequest = () => {
  return {
    type: appConstants.GET_HOTELDATA_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getHotelRoomSuccess = (hotelDataArray) => {
  return {
    type: appConstants.GET_HOTELDATA_SUCCESS,
    payload: {
      hotelDataArray: hotelDataArray
    }
  };
};

export const getHotelRoomFailure = () => {
  return {
    type: appConstants.GET_HOTELDATA_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const getHotelRoom = () => (dispatch) => {
  // pre fetch
  const requestAction = getHotelRoomRequest();
  dispatch(requestAction);
  return fetch("https://oyo-data.onrender.com/hotel")
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = getHotelRoomSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getHotelRoomFailure();
      dispatch(failureAction);
    });
};
