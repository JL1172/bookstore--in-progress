import { connect } from "react-redux"
import { StyledBook } from "../../styles/StyledBookList"
import { fetchingBooksSuccess, toggleFilter } from "../redux/actions/shop-actions"
import { useEffect } from "react"
import { FallingLines } from "react-loader-spinner"
import { MdOutlineAttachMoney, MdNavigateNext } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

import { StyledContainer } from "../../styles/StyledContainer"
import Filter from "./Filter"
import { addItemToCart } from "../redux/actions/cart-actions"
import { fetchingBooksSuccessVariation } from "../redux/actions/search-actions"
import { useNavigate } from "react-router-dom"

const BooksList = (props) => {
  const creds = { user_username: props.username, user_password: props.password }

  useEffect(() => {
    props.fetchingBooksSuccess("", creds);
  }, [])//eslint-disable-line

  const degressPage = (e) => {
    e.preventDefault();
    if (props.page > 1) {
      const query = `?page=${props.page - 1}`
      props.fetchingBooksSuccess(query, creds);
    }
  }

  const succeedPage = (e) => {
    e.preventDefault();
    if (props.page <= 6) {
      const query = `?page=${Number(props.page + 1)}`
      props.fetchingBooksSuccess(query, creds);
    }
  }

  const addItem = (e, item) => {
    e.preventDefault();
    props.addItemToCart(item);
  }

  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate("/books");
    props.fetchingBooksSuccessVariation("", creds);
  }


  const decider = props.filteringSearchResults ? props.filteredBooks : props.books;

  return (
    <StyledContainer>
      <StyledBook filterOn={props.filterOn}>
        <div id="top">
          {props.filteringSearchResults ?
            <div onClick={(e) => submitSearch(e)} id="filterWrap">
              <AiOutlineClose id="filter" />
              <span id="addFilterText">Close Search</span>
            </div>
            :
            <div onClick={() => props.toggleFilter()} id="filterWrap">
              <GrAdd id="filter" />
              <span id="addFilterText">Add Filter</span>
            </div>}
          <h2 id="bookstore">Book Store</h2>

        </div>
        {props.filterOn && <Filter />}
        {props.books.length === 0 ?

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "2rem", height: "60vh" }}>
            <h2>
              No more books available...
            </h2>
            <FallingLines
              color="rgb(163, 74, 74)"
              width="150"
              visible={true}
              ariaLabel='falling-lines-loading'
            />
          </div>

          :
          props.spinnerOn &&
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <FallingLines
              color="rgb(163, 74, 74)"
              width="150"
              visible={true}
              ariaLabel='falling-lines-loading'
            />
          </div>
        }
        {!props.spinnerOn &&
          <div id="wrapper">
            {decider.map(n => {
              const first = n.book_author.split(" ");
              const second = first.slice(0, 2).join(",").replace(/,/g, " ");
              return <div style={{ marginBottom: "4rem" }} className="showcase" key={n.book_id}>
                <div style={{ position: "relative" }}>
                  <img src={n.book_cover} alt="book" className="featBook" />
                </div>
                <span>By <b>{second}</b></span>
                <span><MdOutlineAttachMoney /><b>{Number(n.book_price.toFixed(2))}</b></span>
                <input id="shopNow" type="button" value="Add To Cart" onClick={(e) => addItem(e, n)} />
              </div>
            })}
          </div>}
      </StyledBook>
      <div id="pagination">
        <div id="pagecontainer">
          {props.filteringSearchResults ?
            <>
              <button disabled={true}><MdNavigateNext className="iconN left" />Back Page {props.page - 1 === 0 ? "" : <span className="pageHolder"></span>}</button>
              <button disabled={true}>Next Page <span className="pageHolder">{props.page}</span><MdNavigateNext className="iconN" /></button></>
            :
            <>
              <button onClick={(e) => degressPage(e)}><MdNavigateNext className="iconN left" />Back Page {props.page - 1 === 0 ? "" : <span className="pageHolder">{props.page - 1}</span>}</button>
              <button onClick={(e) => succeedPage(e)}>Next Page <span className="pageHolder">{props.page}</span><MdNavigateNext className="iconN" /></button></>}
        </div>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = state => {
  return {
    books: state.bookState.books,
    spinnerOn: state.bookState.spinnerOn,
    page: state.bookState.page,
    filterOn: state.bookState.filterOn,

    itemInCarts: state.cartState.itemInCarts,
    filteringSearchResults: state.searchState.filteringSearchResults,
    filteredBooks: state.searchState.filteredBooks,


    username: state.loginState.username,
    password: state.loginState.password,
    message: state.loginState.message,
  }
}

export default connect(mapStateToProps, { fetchingBooksSuccess, toggleFilter, addItemToCart, fetchingBooksSuccessVariation })(BooksList)