import { saveData } from "../../utils/localStorage";
import { appConstants } from "./actionTypes";

const initState = {
  hotelDataArray: [],
  isLoading: true,
  isError: false
};

function Reducer(state = initState, action) {
  switch (action.type) {
    case appConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case appConstants.GET_HOTELDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case "GET_HOTELDATA_SUCCESS": {
      return {
        ...state,
        hotelDataArray: action.payload,
        isLoading: false
      };
    }
    case appConstants.GET_HOTELDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
   
    default:
      return state;
  }
}

export default Reducer;


