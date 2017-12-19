
export function selectBook(book) {
  //selectBook is an action Creator
  //it needs to return an action,
  //an object with a type property.
  return {
    // an action always contains a type, somtimes a payload
    type: 'BOOK_SELECTED',
    payload: book

  };
}
