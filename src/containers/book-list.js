import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

//function that makes the action flow through reducers
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render(){
    return <ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>

  }
}

function mapStateToProps(state) {
  //Whatever gets returned from here will show up as props inside of book list
  return{
    books: state.books
  };
}
//Anything returned from this
//will end up as props on the book list container
function mapDispatchToProps(dispatch){
  //when select book is called result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);

}
// promote bookList from a component to a container
//knows about dispatch method select book
//make it avaliable as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
