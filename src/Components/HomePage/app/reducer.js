import { saveData } from "../../utils/localStorage";
import { appConstants } from "./actionTypes";

const initState = {
  hotelDataArray: [],
  isLoading: true,
  isError: false
};

function reducer(state = initState, action) {
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
    case appConstants.GET_HOTELDATA_SUCCESS: {
      return {
        ...state,
        hotelDataArray: action.payload.hotelDataArray,
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
    case appConstants.ADD_HOTELDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.ADD_HOTELDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case appConstants.ADD_HOTELDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case appConstants.ADD_HOTELDATA: {
      return {
        ...state,
        hotelDataArray: [...state.hotelDataArray, action.payload]
      };
    }
    case appConstants.REMOVE_HOTELDATA_ITEM: {
      // TODO
      return {
        ...state,
        hotelDataArray: state.hotelDataArray.filter(
          (item) => item.id !== action?.payload?.id
        )
      };
    }
    case appConstants.TOGGLE_HOTELDATA_STATUS: {
      // TODO
      return {
        ...state,
        hotelDataArray: state.hotelDataArray.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
}

export default reducer;

// 1. true
// 2. false
// 3. error
// 4. others
