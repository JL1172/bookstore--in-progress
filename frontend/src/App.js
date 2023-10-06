
import { Route, Routes } from 'react-router-dom';
import Header from './components/homehelpers/Header';
import { StyledApp } from './styles/StyledApp';
import BooksList from './components/books/BooksList';
import Home from './components/homehelpers/Home';
import CartBody from "./components/cart/Cart"

function App() {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path = "/cart" element = {<CartBody />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
