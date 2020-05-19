import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Payment.scss";
class Payment extends Component {
  state = {
    CardNumber: "",
    cvv: "",
    expiry: "",
    Click: false,
    checked: false,
    checkedPaypal: false,
    submit: false,
    onShow: false,
  };
  handleOnShow = (e) => {
    this.setState({ onShow: true });
    if (e.target.value === "FREE100") {
      this.props.addCoupon();
    }
  };
  handleCardNumber = (e) => {
    this.setState({ CardNumber: e.target.value });
  };
  handleCvv = (e) => {
    this.setState({ cvv: e.target.value });
  };
  handleExpiry = (e) => {
    this.setState({ expiry: e.target.value });
  };
  handleClick = () => {
    this.setState({ Click: true });
  };
  handleChecked = () => {
    this.setState({ checked: true, checkedPaypal: false });
  };
  handleCheckedPaypal = () => {
    this.setState({ checkedPaypal: true, checked: false });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
  };
  render() {
    if (this.state.Click) {
      return <Redirect to="/" />;
    }
    if (this.state.submit) {
      return <Redirect to="/Successful" />;
    }
    const { CardNumber, cvv, expiry } = this.state;

    const isEnabled =
      CardNumber.length === 16 && //MASTERCARD NUMBER FORMAT
      cvv.length === 3 && //ENTER 3 DIGIT ONLY
      expiry.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/); //ENTER WITH / - or WITHOUT ANY WHITESPACE
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li key={item.id} className="item-list">
            <div className="summary-div">
              <div className="item-img-small">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="summary-desc">
                <h3 className="title">{item.title}</h3>
                <h5> ${item.price}</h5>
                <p>{item.quantity} pcs</p>
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
            <ul className="header-content-list">
              <Link to="/cart">1. Shopping Cart</Link>
              <Link to="/Shipping">2. Shipping Details</Link>
              <Link to="/Payment" className="li-last-child">
                3. Payment Options
              </Link>
            </ul>
          </div>
        </header>
        <section className="padding-y">
          <div className="inner-container">
            <div className="shipping-content">
              <div class="form-elements">
                <h1 className="bottom-line">Payment Method </h1>
                <form class="card-details" onSubmit={this.handleSubmit}>
                  <div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        name="pay"
                        onClick={this.handleChecked}
                      />
                      <label>
                        <h3>Credit Card</h3>
                        <p>
                          lorem ipsum hechk insit gablo picard drsco. ione uytrs
                          pisty losvr grib plea.
                        </p>
                      </label>
                    </div>
                    {this.state.checked ? (
                      <div>
                        <div class="name-cvv-mmyy">
                          <div>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              className="input-text"
                              value={this.state.CardNumber}
                              onChange={this.handleCardNumber}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="input-text"
                              value={this.state.expiry}
                              onChange={this.handleExpiry}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="CVV"
                              className="input-text"
                              value={this.state.cvv}
                              onChange={this.handleCvv}
                            ></input>
                          </div>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="input-text"
                          ></input>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <div className="radio-btn">
                      <input
                        type="radio"
                        name="pay"
                        onClick={this.handleCheckedPaypal}
                      />
                      <label>
                        <h3>Paypal</h3>
                        <p>
                          lorem ipsum hechk insit gablo picard drsco. ione uytrs
                          pisty losvr grib plea.
                        </p>
                      </label>
                    </div>

                    {this.state.checkedPaypal ? (
                      <div>
                        <div class="name-cvv-mmyy">
                          <div>
                            <input
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              className="input-text"
                              value={this.state.CardNumber}
                              onChange={this.handleCardNumber}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="input-text"
                              value={this.state.expiry}
                              onChange={this.handleExpiry}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="CVV"
                              className="input-text"
                              value={this.state.cvv}
                              onChange={this.handleCvv}
                            ></input>
                          </div>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Card Holder Name"
                            className="input-text"
                          ></input>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn-shared"
                      type="submit"
                      disabled={!isEnabled}
                    >
                      Pay Now
                    </button>
                    <button className="btn-shared" onClick={this.handleClick}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              <div className="shipping-summary">
                <h1 className="bottom-line">Summary</h1>
                <div className=" bottom-line">
                  <ul className="item-summary">{addedItems}</ul>
                </div>

                <div className="summary">
                  <div>
                    <h3>HAVE A VOUCHER? </h3>
                    <i
                      className="fa fa-caret-down fa-2x"
                      onClick={this.handleOnShow}
                    />
                  </div>
                  {this.state.onShow ? (
                    <div>
                      <input
                        type="text"
                        className="input-text"
                        onChange={this.handleOnShow}
                      />
                    </div>
                  ) : null}
                  <div>
                    <p>Sub Total</p>
                    <p>${this.props.total}</p>
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
              </div>
            </div>
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
    addCoupon: () => {
      dispatch({ type: "ADD_COUPON" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
