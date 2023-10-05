import { connect } from "react-redux"
import { StyledFilter } from "../../styles/StyledFilter"


const Filter = (props) => {
    const advancedSubmit = e => {
        e.preventDefault();
    }
    return (
        <StyledFilter filterOn = {props.filterOn}>
            <form onSubmit={(e)=> advancedSubmit(e)}>
                <div className="filterSection">
                <input type = "radio" />
                <span>Price</span>
                </div>
                <div className="filterSection">
                <input type = "radio" />
                <span>Name</span>
                </div>
                <div className="filterSection">
                <input type = "radio" />
                <span>Click on option</span>
                </div>
                <div className="filterSection">
                <input type = "radio" />
                <span>Click on option</span>
                </div>
                <div className="filterSection last">
                <button>Apply Filter</button>
                </div>
            </form>
        </StyledFilter>
    )
}

const mapStateToProps = state => {
    return {
        filterOn : state.bookState.filterOn
    }
}
export default connect(mapStateToProps,{})(Filter);