import {React, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    return (
      <div>
        <h1>Cart Page</h1>
        <table className="table">
          <tr>
            <th>Item</th>
            <th>Price</th>
            {this.props.items.map( (item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </tr>
        </table>
      </div>
    );
  }

}

export default CartPage;
