import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Top from "./pages/Top/Top";
import Me from "./pages/Me/Me";
import Auth from "./pages/Auth/Auth";
import UserProfile from "./pages/UserProfile/UserProfile";
import Book from "./pages/Book/Book";
import AddProduct from "./pages/AddProduct/AddProduct";
import Products from "./pages/Products/Products";
import Transaction from "./pages/Transaction/Transaction";


function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="transaction" element={<Transaction />}/>
          <Route path="top" element={<Top />} />
          <Route path="me" element={<Me />} />
          <Route path="users/" >
            <Route path=":userId" element={<UserProfile />} />
          </Route>
          <Route path="products/" >
            <Route path="add" element={<AddProduct />}/>
            <Route index element={<Products />}/>
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="auth" element={<Auth />}/>
        </Route>
      </Routes>
  );
}

export default App;
