import { StyledHeader } from "../../styles/StyledHeader";
import { FaShoppingCart,FaBook } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <StyledHeader>
            <div id="topContainer">
                <div className = "wrap" id = "book">
                    <FaBook className="book"/>
                    <h2>BookBinge</h2>
                </div>

                <div className = "wrap" id="searchbar">
                    <form>
                        <input type="text" />
                        <ImSearch id="search" />
                    </form>
                </div>

                <div className = "wrap" id="iconContainer">
                    <FaShoppingCart className="icons top" />
                    <CgProfile id="profile" className="icons" />
                </div>
            </div>
            <div id="bottomContainer">
                <div className="routes">
                    <Link to = "/">Home</Link>
                </div>
                <div className="routes">
                    <Link to = "/books">Shop</Link>
                </div>
                <div className="routes">
                    <Link to = "/profile">Profile</Link>
                </div>
            </div>
        </StyledHeader>
    )
}