import { StyledFeature } from "../../styles/StyledFeatured";
import { MdFavoriteBorder, MdOutlineAttachMoney } from "react-icons/md";
export default function FeaturedBooks(props) {
    const { books } = props;

    return (
        <StyledFeature>
            <h1><MdFavoriteBorder />Featured</h1>
            <div id="wrapper">
                {books.map(n => {
                         const first = n.book_author.split(" ");
                         const second = first.slice(0,2).join(",").replace(/,/g," "); 
                    return <div className="showcase" key={n.book_id}>
                        <div style={{ position: "relative" }}>
                            <img src={n.book_cover} alt = "book" className="featBook" />
                        </div>
                        <span>By <b>{second}</b></span>
                        <span><MdOutlineAttachMoney /><b>{n.book_price.toFixed(2)}</b></span>
                        <input id="shopNow" type="button" value="Add To Cart" />
                    </div>
                })}
            </div>
        </StyledFeature>
    )
}