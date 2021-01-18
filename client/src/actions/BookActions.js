import * as Consts from '../Consts/Consts';
import books from '../Books';

export const addBook = (payload) => async (dispatch) => {
    try {
        books.push(payload);
        dispatch({
            type: Consts.ADD_BOOK,
            payload: books
        });
    } catch (error) {
        
    }
}

export const updateBook = (payload) => async (dispatch) => {
    try {
        books = books.filer(book = book.name !== paylad.name)
        books.push(payload);
        dispatch({
            type: Consts.UPDATE_BOOK,
            payload: books
        });
    } catch (error) {
        
    }
}

export const deleteBook = (payload) => async (dispatch) => {
    try {
        books = books.filer(book = book.name !== paylad.name)
        dispatch({
            type: Consts.DELETE_BOOK,
            books: books
        });
    } catch (error) {
        
    }
}
