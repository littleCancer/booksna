

export default (state = [], action) => {

  console.log("boook reducer ------");
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    default:
      return state;
  }

}
