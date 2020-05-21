import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import { addToCart, displayItem } from "../action/reducers/cartAction";
import {items} from '../action/constant';
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    search: "",
    display: false,
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  handleClick = (id) => {
    let payLoad = {};
    items.map( ele =>{
      if(ele.id == id){
        return payLoad = ele;
      }
    })
    this.props.addToCart(payLoad);
    // this.setState({ display: true });
  };
  handleDisplay = (id) => {
    this.props.displayItem(id);
    this.setState({ display: true });
  };

  render() {
    if (this.state.display) {
      return <Redirect to="/description" />;
    }
    let itemList = items
      .filter((item) => {
        if (this.state.search == null) return item;
        else if (
          item.title.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image">
              <p className="img-wrapper">
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() => {
                    this.handleDisplay(item.id);
                  }}
                />
                <span>
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                  >
                    Add To Cart
                  </button>
                </span>
              </p>
            </div>

            <div className="card-content">
              <span className="card-title">{item.title}</span>
              <p>
                <b>${item.price}</b>
              </p>
              {/*<div className="stars">*/}
              {/*  <div>*/}
              {/*    <input type="radio" id="rate-5" name={item.ratingName} />*/}
              {/*    <label htmlFor="rate-5" className="rating"></label>*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <input type="radio" id="rate-4" name={item.ratingName} />*/}
              {/*    <label htmlFor="rate-4" className="rating"></label>*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <input type="radio" id="rate-3" name={item.ratingName} />*/}
              {/*    <label htmlFor="rate-3" className="rating"></label>*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <input type="radio" id="rate-2" name={item.ratingName} />*/}
              {/*    <label htmlFor="rate-2" className="rating"></label>*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <input type="radio" id="rate-1" name={item.ratingName} />*/}
              {/*    <label htmlFor="rate-1" className="rating"></label>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  <button*/}
              {/*    className="add-to-cart"*/}
              {/*    onClick={() => {*/}
              {/*      this.handleClick(item.id);*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    Add To Cart*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
        );
      });

    return (
      <div>
        <header className="header">
          <div className="inner-container">
            <div className="header-content padding-y">
              <h1>Tagline describing your e-shop</h1>
              <div className="input-content padding-y">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => this.searchSpace(e)}
                />

                <button
                  type="submit"
                  className="btn"
                  // onClick={(e) => this.searchSpace(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="product-listing padding-y">
          <div className="inner-container">
            <div className="product-listing-content">
              <h1>Product Listing</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eum id ipsam, omnis corrupti rem.
              </p>
              <div className="products padding-y">{itemList}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    displayItem: (id) => {
      dispatch(displayItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
