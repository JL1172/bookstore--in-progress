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
                    console.log(n)
                    const first = n.book_title.split(" ");
                    const second = first.slice(0,2)
                    return <div className="showcase" key={n.book_id}>
                        <div style = {{position : "relative"}}>
                            <img src="https://www.svgrepo.com/show/80592/hard-cover-book.svg" className="featBook" />
                            <span className="second">{second}</span>
                        </div>
                    </div>
                })}
                 {books.length === 0 && 
                 <div id = "wrapper">
                 <div className="showcase">
                <div>
                    <img src="https://www.svgrepo.com/show/80592/hard-cover-book.svg" className="featBook" />
                </div>
                 </div>
                 <div className="showcase">
                <div>
                    <img src="https://www.svgrepo.com/show/80592/hard-cover-book.svg" className="featBook" />
                </div>
                 </div>
                 <div className="showcase">
                <div>
                    <img src="https://www.svgrepo.com/show/80592/hard-cover-book.svg" className="featBook" />
                </div>
                 </div>
                 </div>}
            </div>
        </StyledFeature>
    )
}