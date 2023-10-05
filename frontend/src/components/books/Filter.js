import { connect } from "react-redux"
import { StyledFilter } from "../../styles/StyledFilter"
import { changeValue, fetchingBooksSuccess, fetchingBooksSuccessNo2, toggleRemoveFilter } from "../redux/actions/shop-actions";


const Filter = (props) => {
    const advancedSubmit = e => {
        e.preventDefault();
        const query = `?sortby=${props.filterHead}&sortdir=${props.sortdir}&page=all`;
        props.fetchingBooksSuccessNo2(query);
    }
    const advancedChangeHandler = (e) => {
        const { name, value } = e.target;
        const bundler = { name: name, value: value };
        props.changeValue(bundler);
    }
    const disabledHandler = () => {
        if (props.filterHead && props.sortdir) {
            return false;
        } else {
            return true;
        }
    }
    const advancedRemove = e => {
        e.preventDefault();
        props.toggleRemoveFilter()
        props.fetchingBooksSuccessNo2();
    }
    return (
        <StyledFilter filterOn={props.filterOn}>
            <form onSubmit={(e) => advancedSubmit(e)}>
                <div className="filterSection">
                    <input onChange={(e) => advancedChangeHandler(e)}
                        value="book_price" name="filterHead" type="radio" checked={props.filterHead === "book_price"} />
                    <span>Price</span>
                </div>
                <div className="filterSection">
                    <input onChange={(e) => advancedChangeHandler(e)}
                        value="book_title" name="filterHead" type="radio" checked={props.filterHead === "book_title"} />
                    <span>Title</span>
                </div>
                <div className="filterSection">
                    <input type="radio" disabled={props.radiosDisabled} value="asc" name="sortdir"
                        onChange={(e) => advancedChangeHandler(e)} checked={props.sortdir === "asc"} />

                    <span>{props.filterHead === "book_price" ?
                        "Most to Least Expensive" : props.filterHead === "book_title" ?
                            "Alphabetical" : props.filterHead === "" ? "Click on Price or Title" : ""}
                    </span>

                </div>
                <div className="filterSection">
                    <input type="radio" disabled={props.radiosDisabled} value="desc" name="sortdir"
                        onChange={(e) => advancedChangeHandler(e)} checked={props.sortdir === "desc"} />

                    <span>{props.filterHead === "book_price" ?
                        "Least to Most Expensive" : props.filterHead === "book_title" ?
                            "Reverse Alphabetical" : props.filterHead === "" ? "Click on Price or Title" : ""}
                    </span>

                </div>
                <div className="filterSection last">
                    { props.removeFilterStatus ?
                    <button onClick={(e)=> advancedRemove(e)}>Remove Filter</button> :
                    <button disabled={disabledHandler()}>Apply Filter</button>}
                </div>
            </form>
        </StyledFilter>
    )
}

const mapStateToProps = state => {
    return {
        filterOn: state.bookState.filterOn,
        filterHead: state.bookState.filterHead,
        sortdir: state.bookState.sortdir,
        radiosDisabled: state.bookState.radiosDisabled,
        removeFilterStatus: state.bookState.removeFilterStatus,
    }
}
export default connect(mapStateToProps, { changeValue, fetchingBooksSuccess, toggleRemoveFilter, fetchingBooksSuccessNo2 })(Filter);