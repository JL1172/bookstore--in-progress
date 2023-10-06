import { connect } from "react-redux"
import { StyledCart } from "../../styles/StyledCart"
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";

import {TfiMoreAlt} from 'react-icons/tfi';
import {MdAttachMoney} from 'react-icons/md';
import { decrementFrequency, incrementFrequency, removeItem } from "../redux/actions/cart-actions";


const CartBody = (props) => {
    
return (
    <StyledCart>
        <div id = "cartContainer">
            <div id = "headingContainer">
            <h3>Shopping Cart</h3>
            <button className="remove2" onClick={()=>props.removeItem("all")}>Remove All</button>
            </div>
            <div id = "itemsContainer">
              
                {props.cartBody.map(n=> {
                    const first = n.book_title.split(" ");
                    const second = first.slice(0,2).join(" ").replace(/,/g," ");
                    const first1 = n.book_author.split(" ");
                    const second1 = first1.slice(0,2).join(" ").replace(/,/g," ");
                    
                   return <div className="itemDiv" key = {1 + Math.random()*10}>
                   <img src = {n.book_cover} alt = "book"/>
                   <div className="row2">
                   <h3><b>{second}</b></h3>
                   <h6>{second1}</h6>
                   <span id = "spanMore"><TfiMoreAlt id = "more"/>Description</span>
                   </div>    
                   <div className="row3">
                       <button onClick={(e)=> props.incrementFrequency(n.book_id,n.book_price)} ><GrFormAdd className="icN"/></button>
                       <span>{n.frequency}</span>
                       <button disabled = {n.frequency === 1} onClick={(e)=> props.decrementFrequency(n.book_id,n.book_price)}><GrFormSubtract className="icN"/></button>
                   </div>
                   <div className="row2">
                       <b><MdAttachMoney/>{n.book_price.toFixed(2)}</b>
                       <button className="remove1" onClick={()=>props.removeItem(n.book_id)}>Remove</button>
                   </div>
                   </div>
               })}
            </div>
            <div id = "checkout">
               <div id = "col">
                <b>Total</b>
                <span>
                {props.cartCount} items
                </span>
               </div>
               <div id = "reducer">
                <h3><MdAttachMoney/>{Number(props.total).toFixed(2)}</h3>
               </div>
            </div>
        </div>
    </StyledCart>
)
}

const mapStateToProps = state => {
    return {
        cartBody : state.cartState.itemInCarts,
        cartCount : state.cartState.cartCount,
        total : state.cartState.total,
    }
}

export default connect(mapStateToProps,{removeItem,  incrementFrequency,  decrementFrequency})(CartBody);