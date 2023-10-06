import { StyledHeader } from "../../styles/StyledHeader";
import {  FaBook,FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchingBooksSuccess, toggleCart, toggleHome, toggleProfile, toggleShop } from "../redux/actions/shop-actions";
import { useNavigate } from "react-router-dom";


const Header = (props) => {
    

    const navigate = useNavigate();
    const navigateHome = (e) => {
        e.preventDefault();
        props.fetchingBooksSuccess(query)
        navigate("/");
    }

    const query = `?limit=3&page=${Math.floor(Math.random() * 4 + 1)}`

    const bunderFunctionForHome = (e) => {
        e.preventDefault();
        props.fetchingBooksSuccess(query)
        props.toggleHome()
        navigate("/")
    }
    const bunderFunctionForShop = (e) => {
        e.preventDefault();
        props.fetchingBooksSuccess()
        props.toggleShop();
        navigate("/books")
    }

    const bunderFunctionForProfile = e => {
        e.preventDefault();
        props.toggleProfile();
        navigate("/profile")
    }
    const bunderFunctionForCart = e => {
        e.preventDefault();
        props.toggleCart();
        navigate("/cart")
    }

    return (
        <StyledHeader cartCount = {props.cartCount}>
            <div id="topContainer">
                <div style ={{cursor  : "pointer"}} onClick={(e)=>navigateHome(e)} className="wrap" id="book">
                    <FaBook className="book" />
                    <h2>BookBinge</h2>
                </div>

                <div className="wrap" id="searchbar">
                    <form>
                        <input id = "searcher" type="text" />
                        <ImSearch id="search" />
                        <FaShoppingCart onClick={(e)=>bunderFunctionForCart(e)} className="icons top" />
                        <span id = "cartCount">{props.cartCount === 0 ? "" : props.cartCount}</span>
                        <CgProfile id="profile" className="icons" />
                    </form>
                </div>
            </div>
            <div id="bottomContainer">
                <div className="routes">
                    <Link onClick={(e) => bunderFunctionForHome(e)} className={props.homeOn ? "underlined" : ""}>Home</Link>
                </div>
                <div className="routes">
                    <Link onClick={(e) => bunderFunctionForShop(e)}  className={props.shopOn ? "underlined3" : ""} id = "shopLink" >Shop</Link>
                </div>
                <div className="routes">
                    <Link onClick={(e)=> bunderFunctionForProfile(e)}  className={props.profileOn ? "underlined" : ""}>Profile</Link>
                </div>
                <div className="routes">
                    <Link onClick={(e)=>bunderFunctionForCart(e)} className={props.cartOn ? "underlined2" : ""} id = "shopLink2">Cart</Link>
                </div>
            </div>
        </StyledHeader>
    )
}

const mapStateToProps = state => {
    return {
        books: state.bookState.books,
        homeOn :state.bookState.homeOn,
        shopOn :state.bookState.shopOn,
        profileOn :state.bookState.profileOn,
        cartOn : state.bookState.cartOn,

        cartCount : state.cartState.cartCount,
    }
}

export default connect(mapStateToProps, { fetchingBooksSuccess, toggleHome, toggleProfile,toggleShop, toggleCart })(Header);