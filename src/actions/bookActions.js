import Axios from 'axios';
import * as actionTypes from './actionTypes';

const apiUrl = 'http://5b5ecb3a8e9f160014b88d55.mockapi.io/api/books';

export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book: book
  }
}

export const createBook = (book) => {

  return (dispatch) => {
    return Axios.post(apiUrl, book).then(response => {
      dispatch(createBookSuccess(response.data));
    }).catch( error => {
      throw error;
    });
  };

};

const fetchBooksSuccess = function fetchBooksSuccess (books) {
  console.log('fetchiing books success');
  return {
    type: actionTypes.FETCH_BOOK_SUCCESS,
    books
  };
}

export { fetchBooksSuccess };

export const fetchBooks = () => {

  return (dispatch) => {
    return Axios.get(apiUrl).then(response => {
        dispatch(fetchBooksSuccess(response.data))
      }
    ).catch( error => {
        throw(error);
      }
    );
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    book
  }
};

export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/' + bookId).then(response => {
      dispatch(fetchBookByIdSuccess(response.data));
    }).catch(error => {
      throw(error);
    })
  }
}


export const addToCartSuccess = (item) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    item
  }
}

export const addToCart = (item) => {
  let cartUrl = apiUrl + '/cart';
  return (dispatch) => {
    return Axios.post(cartUrl, item).then( response => {
      dispatch(addToCartSuccess(response.data))
    }).catch(error => {
      throw(error);
    })
  }
}

// sync fetch cart

export const fetchCartSuccess = (items) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    items
  }
}

export const fetchCart = () => {
  let cartUrl = apiUrl + '/cart';
  return (dispatch) => {
    return Axios.get(cartUrl).then( response => {
      dispatch(addToCartSuccess(response.data))
    }).catch(error => {
      throw(error);
    })
  }
}
