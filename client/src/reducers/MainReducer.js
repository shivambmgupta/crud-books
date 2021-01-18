import * as Consts from '../Consts/Consts';

export default function mainReducer(state = {books: [], user: {}}, action) {
    switch (action.type) {
        case Consts.USER_LOGIN: {
            return action.payload;
        }

        case Consts.USER_LOGOUT: {
            return { user: {}, books: [] };
        }

        case Consts.ADD_BOOK: {
            return { ...state, books: action.payload};
        }

        case Consts.UPDATE_BOOK: {
            return { ...state, books: action.payload};
        }

        case Consts.DELETE_BOOK: {
            return { ...state, books: action.payload};
        }

        default: {
            return state;
        }
    }
}