import React, {PropTypes} from 'react';

const BookDetails = (props) => {
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.book.title}</h4>
        <ul>
          <li><strong>Author: </strong> {props.book.author}</li>
          <li><strong>Price: </strong> ${props.book.price}</li>
          <li><strong>Year: </strong> {props.book.year}</li>
          <br/>
          <button className="btn btn-primary" onClick={event => props.addToCart(props.book)} >Buy</button>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
