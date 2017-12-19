//State argument is not app state only the state this reducer
// is responisible for.
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
    return action.payload;
  }
  // if we dont care about action
  return state;

}
