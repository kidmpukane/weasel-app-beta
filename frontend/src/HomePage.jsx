import React from 'react'
import data from "./data.json"
import ads from "./ads.json"
import StorieCards from "./components/StorieCards";
import SuggestedCategory from "./components/SuggestedCategory";
import ProductCard from "./components/ProductCard";
import ProductsOfTheWeek from "./components/ProductsOfTheWeek";
import ShopByBrand from "./components/ShopByBrand";
import Adz from "./components/Adz";

export default function HomePage() {

    const storieCard = data.map( item => {
        return(
          <StorieCards 
            key={item.id}
            img={item.coverImg}
            user={item.user}
            />
        )
      }
    )

    const productCard = data.map( item => {
        return(
          <ProductCard
            key={item.id}
            productTitle={item.productTitle}
            profilePicture={item.profilePicture}
            productImage={item.productImage}
            user={item.user}
            price={item.price}
            description={item.description}
  
            />
        )
      }
    ) 

    const productsOfTheWeek= data.map( item => {
        return(
          <ProductsOfTheWeek
            key={item.id}
            productTitle={item.featuredProductTitle}
            productImage={item.featuredProductImage}
            user={item.user}
            price={item.price}
            description={item.description}
  
            />
        )
      }
    ) 
  
        const shopByBrand= data.map( item => {
        return(
          <ShopByBrand
            key={item.id}
            profilePicture={item.profilePicture}
            />
        )
      }
    ) 
  
        const adz= ads.map( item => {
        return(
          <Adz
            key={item.id}
            adz={item.ad}
            />
        )
      }
    ) 

  return (
    <div className="home-page-body">


<section  
  className="storie-card-list">
  {storieCard}
  </section>

  <SuggestedCategory />

  <section  
  className="product-card-list">
  {productCard}
  </section>

  <span
  className="product-of-the-week-header">
  Products of The Week
  </span>
  <section  
  className="product-of-the-week-list">
  {productsOfTheWeek}
  </section>
  
  <span className="shop-by-brand-header">
  Shop By Brand
  </span>
  <section  
  className="shop-by-brand-container-list">
  {shopByBrand}
  </section>
  
  <span className="adz-header">
  Advertisements
  </span>
  <section  
  className="adz-container-list">
  {adz}
  </section>


    </div>
  )
}

 