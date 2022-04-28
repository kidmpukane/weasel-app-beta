import React from 'react';
import data from "../data.json";
import ads from "../ads.json";
import StoryCard from "./StoryCard";
import SuggestedCategory from "./SuggestedCategory";
import ProductCard from "./ProductCard";
import ProductsOfTheWeek from "./ProductsOfTheWeek";
import ShopByBrand from "./ShopByBrand";
import Ads from "./Ads";

export default function Home() {

    const storyCard = data.map( item => {
        return(
          <StoryCard 
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
          <Ads
            key={item.id}
            ads={item.ad}
            />
        )
      }
    ) 

  return (
    <div className="home-page-body">
      <section  
        className="story-card-list">
        {storyCard}
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
        
        <span className="ads-header">
        Advertisements
        </span>
        <section  
        className="ads-container-list">
        {adz}
        </section>
    </div>
  )
}