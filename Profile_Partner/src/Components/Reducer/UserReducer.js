let initData = {
  userData: [],
};

export const UserReducer = (storeData = initData, action) => {
  switch (action.type) {
    case "userData": {
      return {
        ...storeData,
        userData: action.payload
      };
    }

    default: {
      return storeData;
    }
  }
};
