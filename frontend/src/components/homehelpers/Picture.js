import { connect } from "react-redux";
import { StyledPicture } from "../../styles/StyledPictures";
import { useNavigate } from "react-router-dom";
import { fetchingBooksSuccess } from "../redux/actions/shop-actions";

const Picture = (props) => {
    const navigate = useNavigate();
    const navAndFetch = (e) => {
        e.preventDefault();
        props.fetchingBooksSuccess()
        navigate("/books");
    }
    return (
        <StyledPicture>
            <div id="content">
                <h1>Up to 50% Off</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in.</p>
            <input onClick={(e)=> navAndFetch(e)} id = "shopNow" type = "button" value = "Shop Now"/>
            </div>
        </StyledPicture>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps,{fetchingBooksSuccess})(Picture);