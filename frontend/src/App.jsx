import React from 'react';
import { 
  BrowserRouter as
  Router, 
  Routes,
  Route,
} from "react-router-dom";
import TopNavbar from "./navigation/TopNavbar";
import Navbar from "./navigation/Navbar";
import data from "./navigation/data.json";
import ProductDetails from "./navigation/pages/ProductDetails";
import Home from "./navigation/pages/Home";
import Search from "./navigation/pages/Search";
import Explore from "./navigation/pages/Explore";
import Library from "./navigation/pages/Library";
import Account from "./navigation/pages/Account";
import Notifications from "./navigation/pages/Notifications";
import AdditionalBasketInfo from "./components/AdditionalBasketInfo";
import "./styles.css";


export default function App() {

    {/*const cart = data.map( item => {
      return(
        <Cart
          key={item.id}
          productTitle={item.productTitle}
          productImage={item.productImage}
          user={item.user}
          price={item.price}
          description={item.description}
          />
        )
      }
    )*/}

  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route 
            path="/homepage" 
            element={<Home />} 
            />
            <Route 
            path="/search" 
            element={<Search />} 
            />
            <Route 
            path="/discover" 
            element={<Explore />} 
            />
            <Route 
            path="/collections" 
            element={<Library />}  
            />
            <Route 
            path="/profile" 
            element={<Account />} 
            />
            <Route 
            path="/messages" 
            element={<Notifications />} 
            />
          </Routes>
          <TopNavbar />
          <Navbar />
          {/*<section
          className="basket-list-container"
          >
          {basket}
          < AdditionalBasketInfo  />
          <button>
          Check Out
          </button>
          </section>
        
          <p>
          <button 
            className="add-to-chart" >Check Out
          </button>
          </p>
          </section>
          */}
          {/* <section className="product-details-main-list">
          <ProductDetails/>
          </section>
          */}
        </div>
      </Router>
    </div>
  );
}

