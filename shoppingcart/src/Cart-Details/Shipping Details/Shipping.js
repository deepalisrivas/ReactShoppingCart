import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Shipping.scss";

class Shipping extends Component {
  userData;
  handleCheck = (e) => {
    if (e.target.checked) {
      this.setState({ ShowShip: true });
      this.props.addShipping();
    }
    // else {
    //   this.props.substractShipping();
    // }
  };
  handleNotCheck = (e) => {
    if (e.target.checked && this.state.ShowShip === true) {
      //
      //     // if (e.target.checked) {
      this.props.substractShipping();
    }
  };

  // componentWillUnmount() {
  //   if (this.refs.shipping.checked) this.props.substractShipping();
  // }
  state = {
    count: false,
    ShowShip: false,
    FirstName: "",
    LastName: "",
    Address: "",
    zipCode: "",
    Phone: "",
    onSubmit: false,
    onClick: false,
  };

  handleFirstName = (e) => {
    this.setState({ FirstName: e.target.value });
  };
  handleLastName = (e) => {
    this.setState({ LastName: e.target.value });
  };
  handleAddress = (e) => {
    this.setState({ Address: e.target.value });
  };
  handlezipCode = (e) => {
    this.setState({ zipCode: e.target.value });
  };
  handlePhone = (e) => {
    this.setState({ Phone: e.target.value });
  };
  handleOnSubmit = () => {
    this.setState({ onSubmit: true });
  };
  handleOnClick = () => {
    this.setState({ onClick: true });
  };
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      this.setState({
        FirstName: this.userData.FirstName,
        LastName: this.userData.LastName,
        Address: this.userData.Address,
        zipCode: this.state.zipCode,
        Phone: this.userData.Phone,
      });
    } else {
      this.setState({
        FirstName: "",
        LastName: "",
        Address: "",
        zipCode: "",
        Phone: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    if (this.state.onSubmit) {
      return <Redirect to="/Payment" />;
    }
    if (this.state.onClick) {
      return <Redirect to="/" />;
    }
    const { FirstName, LastName, zipCode, Phone } = this.state;
    const isEnabled =
      FirstName.length > 0 &&
      LastName.length > 0 &&
      zipCode.length > 0 &&
      zipCode.length <= 7 &&
      Phone.match(/^\d{10}$/);
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
              <Link to="/Shipping" className="li-second-child">
                2. Shipping Details
              </Link>
              <Link>3. Payment Options</Link>
            </ul>
          </div>
        </header>
        <section className="padding-y">
          <div className="inner-container">
            <div className="shipping-content">
              <div className="form-elements">
                <h1 className="bottom-line">Shipping Details</h1>
                <form className="shipping-details">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-text"
                      value={this.state.FirstName}
                      onChange={this.handleFirstName}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-text"
                      value={this.state.LastName}
                      onChange={this.handleLastName}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="input-text"
                      value={this.state.Address}
                      onChange={this.handleAddress}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Address 2"
                      className="input-text"
                    />
                  </div>
                  <div>
                    <select id="country">
                      <option selected disabled hidden>
                        Country
                      </option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="England">England</option>
                      <option value="Australia">Australia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="UK">UK</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="input-text"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip/Postal Code"
                      className="input-text"
                      value={this.state.zipCode}
                      onChange={this.handlezipCode}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input-text"
                      value={this.state.Phone}
                      onChange={this.handlePhone}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shipping"
                      value="free-shipping"
                      className="radio-btn"
                      onChange={this.handleNotCheck}
                    />
                    <label>
                      <h4>Free Shipping</h4>
                      <p>Between 2-5 working days</p>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shipping"
                      value="next-day"
                      className="radio-btn"
                      onChange={this.handleCheck}
                    />
                    <label>
                      <h4>Next Day Delivery-$20</h4>
                      <p>24 hours from checkout</p>
                    </label>
                  </div>
                  <div className="btn-group">
                    <button
                      disabled={!isEnabled}
                      className="btn-shared"
                      onClick={this.handleOnSubmit}
                    >
                      Next
                    </button>
                    <button className="btn-shared" onClick={this.handleOnClick}>
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
                    <i className="fa fa-caret-down fa-2x" />
                  </div>

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
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUBTRACT_SHIPPING" });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
