import React, { Component } from "react";
import "./description.scss";
import { connect } from "react-redux";
import { addToCart } from "../action/reducers/cartAction";

class Description extends Component {
  state = {
    select1: false,
  };
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  Selected = () => {
    this.setState({ select1: true });
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li key={item.id} className="item-list">
            <div className="main-div">
              <div className="item-img-large">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="prod-list">
                <div className="bottom-line">
                  {this.state.select1 ? (
                    <h1 className="title"> {item.models[0].name}</h1>
                  ) : (
                    <h1 className="title">{item.title}</h1>
                  )}
                  <p>{item.review} Reviews </p>
                </div>
                <div className="prod-desc ">
                  <h2> ${item.price}</h2>
                  <select>
                    <option selected disabled hidden>
                      Select Model
                    </option>
                    <option onChangeCapture={this.Selected}>Camera1</option>
                    <option>Camera2</option>
                    <option>Camera3</option>
                  </select>
                </div>

                <div>
                  <p>{item.desc}</p>
                </div>
                <div className="btn-group">
                  <button
                    className="btn-shared"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="inner-container ">
              <h1 className="bottom-line">Reviews</h1>
              <div className="reviews">
                <span>
                  <i className="fa fa-user-circle fa-2x" />
                </span>
                <div>
                  <p> {item.reviewDescription1.name}</p>
                  <p>{item.reviewDescription1.Date}</p>
                </div>
                <p>{item.reviewDescription1.desc}</p>
              </div>
              <div className="reviews">
                <span>
                  <i className="fa fa-user-circle fa-2x" />
                </span>
                <div>
                  <p> {item.reviewDescription2.name}</p>
                  <p>{item.reviewDescription2.Date}</p>
                </div>
                <p>{item.reviewDescription2.desc}</p>
              </div>
            </div>
          </li>
        );
        // let addedModels = this.props.models.map((item) => {
        //   return <li key={item.id}>
        //     <div>{item.name}</div>
        //   </li>;
        // });
      })
    ) : (
      <h1>Your Cart is Empty</h1>
    );
    // let addedModels = this.props.models.map((item) => {
    //   return (
    //     <li key={item.id}>
    //       <div>{item.name}</div>
    //       <div>{item.price}</div>
    //     </li>
    //   );
    // });

    return (
      <div>
        <section className="padding-y">
          <ul>{addedItems}</ul>
        </section>
        <section>{/*<ul>{addedModels}</ul>*/}</section>
      </div>
    );
    //
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.showItems,
    // models: state.models,

    // models: state.showModels,
    total: state.total,
    taxes: state.taxes.toFixed(1),
    grandTotal: state.total + state.taxes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
