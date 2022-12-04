// import { appConstants } from "./actionTypes";
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
  return fetch("https://oyo-server.herokuapp.com/hotel")
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

export const addHotelRoomRequest = () => {
  return {
    type: appConstants.ADD_HOTELDATA_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addHotelRoomSuccess = (hotelDataArray) => {
  return {
    type: appConstants.ADD_HOTELDATA_SUCCESS,
    payload: {
      hotelDataArray: hotelDataArray
    }
  };
};

export const addHotelRoomFailure = () => {
  return {
    type: appConstants.ADD_HOTELDATA_FAILURE,
    payload: {
      isError: true
    }
  };
};

// actionCreators
// type is mandatory, string
export const addHotelRoom = ({ title, status, id }) => {
  return {
    type: appConstants.ADD_HOTELDATA,
    payload: {
      title,
      status,
      id
    }
  };
};

export const addHotelRooms = (text) => (dispatch) => {
  const requestAction = addHotelRoomRequest();
  dispatch(requestAction);
  return fetch("https://oyo-server.herokuapp.com/hotel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: text,
      status: false
    })
  })
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = addHotelRoomSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = addHotelRoomFailure();
      dispatch(failureAction);
    });
};

export const removeHotelRoom = (id) => ({
  type: appConstants.REMOVE_HOTELDATA_ITEM,
  payload: {
    id: id
  }
});

export const toggleHotelRoom = (id) => ({
  type: appConstants.TOGGLE_HOTELDATA_STATUS,
  payload: {
    id: id
  }
});