let initData = {
  userData: [],
  hotelData: [],
  LoggedIn: {}
};

export const UserReducer = (storeData = initData, action) => {
  switch (action.type) {
    case "userData": {
      return {
        ...storeData,
        userData: action.payload,
      };
    }
    case "hotelData": {
      return {
        ...storeData,
        hotelData: action.payload,
      };
    }
    case "check-login": {
      return {
        ...storeData,
        LoggedIn: action.payload,
      };
    }

    default: {
      return storeData;
    }
  }
};
