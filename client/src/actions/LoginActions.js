import * as Consts from '../Consts/Consts';
import books from '../Books';

export const userLogin = (payload) => async (dispatch) => {
    try {
        const { password } = payload;
        if(password != "Welcome@1") return;
        const user = JSON.stringify(payload);
        dispatch({
            type: Consts.USER_LOGIN,
            payload: { user: payload, books: books}
        })
    } catch (error) {
        
    }
}

export const userLogout = async (dispatch) => {
    try {
        dispatch({ type: Consts.USER_LOGOUT })
    } catch (error) {
        
    }
}