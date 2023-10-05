import { useEffect } from "react";
import FeaturedBooks from "./FeaturedBooks";
import Picture from "./Picture";
import { connect } from "react-redux";
import { fetchingBooksSuccess } from "../redux/actions/shop-actions";

const Home = (props) => {
    const query = `?limit=3&page=${Math.floor(Math.random()*4 + 1)}`
    useEffect(()=> {
        props.fetchingBooksSuccess(query)
    },[])
  
    return (
        <>
        <Picture />
        <FeaturedBooks books = {props.books}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        books : state.bookState.books,
    }
}

export default connect(mapStateToProps,{fetchingBooksSuccess})(Home)