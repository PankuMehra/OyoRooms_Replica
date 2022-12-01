export const UserAction = (data, dispatch) => {
  dispatch({
    type: "userData",
    payload: data,
  });
};
