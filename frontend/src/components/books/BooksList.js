import { connect } from "react-redux"
import { StyledBook } from "../../styles/StyledBookList"
import { fetchingBooksSuccess } from "../redux/actions/shop-actions"


const BooksList = (props) => {
    return (
        <StyledBook>
          <h1>
            Books
          </h1>
        </StyledBook>
    )
}

const mapStateToProps = state => {
  return {
    books : state.bookState.books,
    spinnerOn : state.bookState.spinnerOn
  }
}

export default connect(mapStateToProps,{fetchingBooksSuccess})(BooksList)