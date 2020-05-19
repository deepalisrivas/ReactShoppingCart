import React, { Component } from "react";
import "./Successful.scss";
import { Redirect } from "react-router-dom";
import { resetCart } from "../action/reducers/cartAction";
import { connect } from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
class Successful extends Component {
  state = {
    continueShopping: false,
  };
  handleContinueShopping = () => {
    this.props.resetCart();
    this.setState({ continueShopping: true });
  };
  render() {
    if (this.state.continueShopping) {
      return <Redirect to="/" />;
    }
    return (
      <header className="header padding-y">
        <div className="inner-container header-content">
          <h1>Your Order has been placed</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.
          </p>
          <button className="btn" onClick={this.handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => {
      dispatch(resetCart());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Successful);
