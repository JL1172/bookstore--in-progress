
import { Route, Routes } from 'react-router-dom';
import Header from './components/homehelpers/Header';
import { StyledApp } from './styles/StyledApp';
import BooksList from './components/books/BooksList';
import Home from './components/homehelpers/Home';
import CartBody from "./components/cart/Cart"
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { loginHandler, loginInSubmission } from './components/redux/actions/login-actions';

function App(props) {

  return (
    <StyledApp>
      {window.localStorage.getItem("token") && props.loggedIn? 
      <>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path = "/cart" element = {<CartBody />} />
      </Routes>
      </>
      :
      <Login />
}
    </StyledApp>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn : state.loginState.loggedIn
  }
}

export default connect(mapStateToProps,{loginHandler, loginInSubmission})(App);
