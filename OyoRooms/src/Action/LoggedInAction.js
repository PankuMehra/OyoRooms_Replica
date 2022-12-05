export const LoggedInAction = (data, dispatch) => {
    dispatch({
        type: "check-login",
        payload: data
    })
}