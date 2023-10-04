import { StyledHeader } from "../../styles/StyledHeader";
import { FaShoppingCart,FaBook } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'

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
                    <h4>Home</h4>
                </div>
                <div className="routes">
                    <h4>Shop</h4>
                </div>
                <div className="routes">
                    <h4>Profile</h4>
                </div>
            </div>
        </StyledHeader>
    )
}