import "./styles.css";
import TopNavBar from "./TopNavBar";
import Navbar from "./navigation/Navbar";
import Profile from "./Profile";
import data from "./data.json";
import Counter from "./components/Counter";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import ExploreByCategory from "./components/ExploreByCategory";
import Basket from "./Basket";
import AdditionalBasketInfo from "./components/AdditionalBasketInfo";
import TopNavBar2 from "./TopNavBar2";



export default function App() {

 {/* const basket = data.map( item => {
    return(
      <Basket
        key={item.id}
        productTitle={item.productTitle}
        productImage={item.productImage}
        user={item.user}
        price={item.price}
        description={item.description}

        />
    )
  }
) */}


  return (
    <div 
      className="container">

    

     {/*<section
      className="basket-list-container"
    >
    <TopNavBar2/>
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
    <Profile/>*/}
    <Navbar />
    <TopNavBar />
    <HomePage />
    {/* <section className="product-details-main-list">
      <ProductDetails/>
     </section>
<ExploreByCategory />*/}
  </div>
  );
}
