import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
  resetCart,
} from "../../action/reducers/cartAction";
import "./cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
  state = {
    next: false,
    cancel: false,
  };

  handleNext = () => {
    this.setState({ next: true });
  };
  handleCancel = () => {
    this.setState({ cancel: true });
  };
  handleRemove = (id) => {
    this.props.removeFromCart(id);
  };
  handleAddQunatity = (id) => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  // componentWillUnmount() {
  // }

  render() {
    if (this.state.next) {
      return <Redirect to="/Shipping" />;
    }
    if (this.state.cancel) {
      return <Redirect to="/" />;
    }
    debugger;
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li key={item.id} className="item-list">
            <div className="main-div">
              <div className="item-img">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="item-desc">
                <h2 className="title">{item.title}</h2>
                <h3> ${item.price}</h3>
                <button
                  className="btn-remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>

              <div className="item-qty">
                <p>{item.quantity} pcs</p>
                {/*<p>Total:{this.props.total}</p>*/}
                <div className="add-remove">
                  <button
                    onClick={() => {
                      this.handleAddQunatity(item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                  <button
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })
    ) : (
      <h1>Your Cart is Empty</h1>
    );
    return (
      <div>
        <header className="header padding-y">
          <div className="inner-container">
            <ul className="header-content-list ">
              <Link to="/cart" className="li-first-child">
                1. Shopping Cart
              </Link>
              <Link>2. Shipping Details</Link>
              <Link>3. Payment Options</Link>
            </ul>
          </div>
        </header>
        <section className="padding-y">
          <div className="inner-container">
            <div className="cart-content">
              <div>
                <h1 className="bottom-line">Shopping Cart</h1>
                <ul>{addedItems}</ul>
              </div>
              {this.props.items.length ? (
                <div className="summary">
                  <h1 className="bottom-line">Summary</h1>
                  <div>
                    <h3>Enter Coupon Code</h3>
                    <i
                      className="fa fa-caret-down fa-2x"
                      onClick={this.handleOnShow}
                    />
                  </div>
                  {/*this.state.onShow ? (
                    <div>
                      <input type="text" className="input-text" />
                    </div>
                  ) : null*/}
                  <div>
                    <p>Sub Total</p>
                    <p>${this.props.total}</p>
                  </div>
                  <div>
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div>
                    <p>Taxes</p>
                    <p>${this.props.taxes}</p>
                  </div>
                  <div>
                    <h3>Total</h3>
                    <h3>${this.props.grandTotal}</h3>
                  </div>
                </div>
              ) : null}
            </div>
            {this.props.items.length ? (
              <div className="btn-group">
                <button className="btn-shared" onClick={this.handleNext}>
                  Next
                </button>
                <button className="btn-shared" onClick={this.handleCancel}>
                  Cancel
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total,
    taxes: state.taxes.toFixed(1),
    grandTotal: state.total + state.taxes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart());
    },
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
