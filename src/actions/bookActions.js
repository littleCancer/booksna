import Axios from 'axios';

const apiUrl = 'http://5b5ecb3a8e9f160014b88d55.mockapi.io/api/books';

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK',
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
  return {
    type: 'FETCH_BOOKS_SUCCESS',
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
