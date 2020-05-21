import React, {Component} from "react";
import "./description.scss";
import {connect} from "react-redux";
import {addToCart} from "../action/reducers/cartAction";

class Description extends Component {
    state = {
        activeModel: "",
    };
    handleClick = (id) => {
        const { item} = this.props;
        let payLoad = {...item};
        payLoad.models.map(ele=>{
            if(ele.id == this.state.activeModel){
                payLoad.title = ele.name;
                payLoad.price = ele.price;
                payLoad.subId = ele.id;
            }
        })
        console.log(payLoad,'---->', item);
        this.props.addToCart(payLoad);
        // let temp=this.props.items
        // temp.map((item)=>{

        //     item.models.map((x)=>{
        //         if(x.id==this.state.activeModel) {
        //              item.title = x.name
        //                 item.subId = x.id
        //                 item.price = x.price
        //             // item.id=item.id+x.id
        //             // temp=item
        //             debugger
        //             this.props.addToCart(item);

        //         }
        //     })
        // })
        console.log(this.props.items);
    };
    handleSelected = (e) => {
        this.setState({activeModel: e.target.value});
    };

    render() {

        // let addedItems = this.props.items.length ? (
        //     this.props.items.map((item) => {
            const { item } = this.props;
                return (
                    <li key={item.id} className="item-list">
                        <div className="main-div">
                            <div className="item-img-large">
                                <img src={item.img} alt={item.img}/>
                            </div>
                            <div className="prod-list">
                                <div className="bottom-line">
                                    {item.models.map((x) => {
                                        if (x.id == this.state.activeModel) {
                                            return <h1 className="title">{x.name}</h1>;
                                        }
                                    })}
                                    <p>{item.review} Reviews </p>
                                </div>
                                <div className="prod-desc ">
                                    {item.models.map((x) => {
                                        if (x.id == this.state.activeModel) {
                                            return <h2> ${x.price}</h2>;
                                        }
                                    })}
                                    <select onChange={this.handleSelected}>
                                        {item.models.map((x) => (
                                            <option value={x.id} >
                                                {x.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="btn-group">

                                    {item.models.map((x)=>{
                                        if(x.id==this.state.activeModel){
                                            return <button
                                                className="btn-shared"
                                                onClick={() => {
                                                    this.handleClick(item.id);
                                                }}
                                            >
                                                Add To Cart
                                            </button>
                                        }
                                    })}



                                </div>
                            </div>
                        </div>
                        <div className="inner-container ">
                            <h1 className="bottom-line">Reviews</h1>
                            <div className="reviews">
                <span>
                  <i className="fa fa-user-circle fa-2x"/>
                </span>
                                <div>
                                    <p> {item.reviewDescription1.name}</p>
                                    <p>{item.reviewDescription1.Date}</p>
                                </div>
                                <p>{item.reviewDescription1.desc}</p>
                            </div>
                            <div className="reviews">
                <span>
                  <i className="fa fa-user-circle fa-2x"/>
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
            // })
        // ) : (
        //     <h1>Your Cart is Empty</h1>
        // );

        // return (
        //     <div>
        //         <section className="padding-y">
        //             <ul>{addedItems}</ul>
        //         </section>
        //     </div>
        // );
        //
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.showItems,
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
