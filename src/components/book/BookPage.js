import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';
import {Link} from 'react-router-dom';

class Book extends React.Component {

  constructor(props) {

    super(props);
    console.log("books props " + props);

  }

  submitBook(input) {
    this.props.createBook(input);
  }

  render() {
    let titleInput;

    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) =>
            <tr key={i}>
              <td>{b.title}</td>
              <td><Link to={`/books/${b.id}`}>View</Link></td>
            </tr>
            )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          <BookForm ubmitBook={this.submitBook.bind(this)}/>
        </div>
      </div>
    );
  }

}

// Map state from store to props

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

// map dispatch to store

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
