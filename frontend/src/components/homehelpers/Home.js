import { useEffect } from "react";
import FeaturedBooks from "./FeaturedBooks";
import Picture from "./Picture";
import { connect } from "react-redux";
import { fetchingBooksSuccess } from "../redux/actions/shop-actions";

const Home = (props) => {
    const query = `?limit=3&page=${Math.floor(Math.random() * 4 + 1)}`
    useEffect(() => {
        const creds = { user_username: props.username, user_password: props.password }
        props.fetchingBooksSuccess(query, creds)
    }, [])//eslint-disable-line

    return (
        <>
            <Picture />
            <FeaturedBooks books={props.books} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        books: state.bookState.books,
        username: state.loginState.username,
        password: state.loginState.password,
        message: state.loginState.message,
    }
}

export default connect(mapStateToProps, { fetchingBooksSuccess })(Home)