import { StyledFeature } from "../../styles/StyledFeatured";
import { MdFavoriteBorder } from "react-icons/md";
import { BiBook } from "react-icons/bi";
export default function FeaturedBooks(props) {
    const { books } = props;

    return (
        <StyledFeature>
            <h1><MdFavoriteBorder />Featured</h1>
            <div id="wrapper">
                {books.map(n => {
                    return <div className="showcase" key={n.book_id}>
                        <div style = {{position : "relative"}}>
                            <img src={n.book_cover} className="featBook" />
                        </div>
                            <input id = "shopNow" type = "button" value = "Add To Cart" />
                    </div>
                })}
            </div>
        </StyledFeature>
    )
}