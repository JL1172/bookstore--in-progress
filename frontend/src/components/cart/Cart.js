import { connect } from "react-redux"
import { StyledCart } from "../../styles/StyledCart"
import { GrFormAdd, GrFormSubtract} from "react-icons/gr";

import {TfiMoreAlt} from 'react-icons/tfi';
import {MdAttachMoney} from 'react-icons/md';


const CartBody = (props) => {
return (
    <StyledCart>
        <div id = "cartContainer">
            <div id = "headingContainer">
            <h3>Shopping Cart</h3>
            <button className="remove2">Remove All</button>
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
                       <button><GrFormAdd className="icN"/></button>
                       <span>{n.frequency}</span>
                       <button><GrFormSubtract className="icN"/></button>
                   </div>
                   <div className="row2">
                       <b><MdAttachMoney/>{n.book_price.toFixed(2)}</b>
                       <button className="remove1">Remove</button>
                   </div>
                   </div>
               })}
                {/* {Array(5).fill("https://m.media-amazon.com/images/I/91jpVayaS2L._AC_UF1000,1000_QL80_.jpg").map(n=> {
                    return <div className="itemDiv" key = {1 + Math.random()*10}>
                    <img src = {n} alt = "book"/>
                    <div className="row2">
                    <h3><b>Flask</b></h3>
                    <h6>Miguel Griegburg</h6>
                    <span id = "spanMore"><TfiMoreAlt id = "more"/>Description</span>
                    </div>    
                    <div className="row3">
                        <button><GrFormAdd className="icN"/></button>
                        <span>2</span>
                        <button><GrFormSubtract className="icN"/></button>
                    </div>
                    <div className="row2">
                        <b>$4.99</b>
                        <button className="remove1">Remove</button>
                    </div>
                    </div>
                })} */}
            </div>
            <div id = "checkout">
                total
            </div>
        </div>
    </StyledCart>
)
}

const mapStateToProps = state => {
    return {
        cartBody : state.cartState.itemInCarts
    }
}

export default connect(mapStateToProps,{})(CartBody);