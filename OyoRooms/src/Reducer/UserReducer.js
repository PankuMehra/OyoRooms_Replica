let initData = {
  userData: [],
  hotelData: [],
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

    default: {
      return storeData;
    }
  }
};
