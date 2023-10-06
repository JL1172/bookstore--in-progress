import { connect } from "react-redux"
import { StyledBook } from "../../styles/StyledBookList"
import { fetchingBooksSuccess, toggleFilter } from "../redux/actions/shop-actions"
import { useEffect } from "react"
import { FallingLines } from "react-loader-spinner"
import { MdOutlineAttachMoney,MdNavigateNext } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

import { StyledContainer } from "../../styles/StyledContainer"
import Filter from "./Filter"
import { addItemToCart } from "../redux/actions/cart-actions"


const BooksList = (props) => {


  useEffect(() => {
    props.fetchingBooksSuccess();
  }, [])//eslint-disable-line

  const degressPage = (e) => {
    e.preventDefault();
    if (props.page > 1) {
      const query = `?page=${props.page - 1}`
      props.fetchingBooksSuccess(query);
    }
  }

  const succeedPage = (e) => {
    e.preventDefault();
    if (props.page <= 6) {
      const query = `?page=${Number(props.page + 1)}`
      props.fetchingBooksSuccess(query);
    }
  }

  const addItem = (e,item) => {
    e.preventDefault();
    props.addItemToCart(item);
  }
 

  return (
    <StyledContainer>
      <StyledBook filterOn = {props.filterOn}>
        <div id="top">
          <div onClick={() => props.toggleFilter()} id = "filterWrap">
            <GrAdd  id="filter" />
            <span id = "addFilterText">Add Filter</span>
          </div>
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
            {props.books.map(n => {
             const first = n.book_author.split(" ");
             const second = first.slice(0,2).join(",").replace(/,/g," "); 
              return <div style={{ marginBottom: "4rem" }} className="showcase" key={n.book_id}>
                <div style={{ position: "relative" }}>
                  <img src={n.book_cover} alt="book" className="featBook" />
                </div>
                <span>By <b>{second}</b></span>
                  <span><MdOutlineAttachMoney/><b>{n.book_price.toFixed(2)}</b></span>
                <input id="shopNow" type="button" value="Add To Cart" onClick={(e)=> addItem(e,n)} />
              </div>
            })}
          </div>}
      </StyledBook>
      <div id="pagination">
        <div id="pagecontainer">
          <button onClick={(e) => degressPage(e)}><MdNavigateNext className="iconN left"/>Back Page {props.page - 1 === 0 ? "" : <span className="pageHolder">{props.page - 1}</span>}</button>
          <button  onClick={(e) => succeedPage(e)}>Next Page <span className="pageHolder">{props.page}</span><MdNavigateNext className="iconN" /></button>
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
    
    itemInCarts : state.cartState.itemInCarts,
  }
}

export default connect(mapStateToProps, { fetchingBooksSuccess, toggleFilter, addItemToCart })(BooksList)