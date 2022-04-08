import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";


export default function Description() {
  return(
        <div className= "main--container">
          <main className="main--body">
            <div className= "profile--info_section">
              <img 
                src= "/images/photo-profile-1.jpg "
                className="profile--img" 
                alt="profile" 
                /><h1 className= "profile--img_heading">Natas Evil Corp.</h1>
            </div>
              <div className= "profile--description">
                <h2 
                className= "main--heading">Who We Are.</h2>
                  <p 
                  className= "main--text">Lorem ipsum dolor sit, 
                    amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <hr></hr>
              <div className="icon--badges_container">
                <h2 className= "icons--heading">Socials & Other Websites</h2>
                <div className= "icon--badges_section">
                  <FaInstagram className= "instagram--icon" size= "25px" />
                  <FaFacebook  className= "facebook--icon" size= "25px" />
                  <FaTwitter className= "twitter--icon" size= "25px" />
                  <FaYoutube className= "youtube--icon" size= "25px" />
                </div>
              </div>
                <div className= "product--card_container">
                  <h2 className= "card--section_heading">Most Popular</h2>
                  <img 
                  src= "/images/card-img.jfif"
                  className="product--card_img" 
                  alt="product--card" 
                  />
                  <div className= "card--content">
                    <h2 className= "card--content_heading">Nike Shoes</h2>
                    <p className= "card--content_price">$8.50</p>
                  </div>
                </div>
                    <div className= "reviews--page_section">
                      <h2 className= "review--section_heading">Reviews</h2>
                      <div className= "review--card">
                      <img 
                      src= "/images/photo-profile.jpg" 
                      className= "profile--picture_review" 
                      alt= "review-card_img" 
                      />
                      <h3 className= "review--card_heading">Islam Girl</h3>
                      <p className= "review--card_text">This store is not Halal enough. 
                      I need you to accommodate me and my people, 
                      or we will burn your shop. Allahu Akbar we kill everybody, 
                      when we die we get a thousand virgins that's why we don't fear death or anyone.
                      Death to America!</p>
                      </div>
                    </div>
                      <div className= "recommendations--container">
                        <h2 className= "recommendations--heading">You might also like.</h2>
                        <div>
                          <img 
                          src= "/images/recommendation-img.jpg" 
                          className= "recommended--profile_img" 
                          alt="recommendation-img" 
                          />
                          <h2 className= "recommended--title">Bond Street</h2
                          >
                        </div>
                      </div>
                      <hr></hr>
                        <div className= "new--products_container">
                          <h2 className= "card--section_description">New Products</h2>
                          <img 
                          src= "/images/card-img-1.jpg"
                          className="product--card_img" 
                          alt="new--products_card" 
                          />
                          <div className= "card--content">
                            <h2 className= "card--content_heading">Cool Outfit</h2>
                            <p className= "card--content_price">$8.50</p>
                          </div>
                        </div>
                          <div className= "offers--container">
                            <h2 className= "offers--heading">Offers & Promotions</h2>
                            <div className= "offers--wrap">
                              <p className= "sales--offer">Sales</p>
                              <hr></hr>
                              <br></br>
                              <p className= "discounts--offer">Coupons & Discounts</p>
                              <hr></hr>
                              <br></br>
                              <p className= "samples--offer">Giveaways & Samples</p>
                              <hr></hr>
                              <br></br>
                              <p className= "limited--offer">Limited Time offers</p>
                              <hr></hr>
                              <br></br>
                            </div>
                          </div>           
                            <div className= "learn--more_container">
                              <h2 className= "learn--more_heading">About us</h2>
                              <div className= "learn--more_content">
                                  <img 
                                  src= "/images/about-img.jpg"
                                  className="about--images" 
                                  alt="about-images" 
                                  /> 
                                <div className= "about--cover">
                                  <h2 className= "about--heading">Natas Evil Corp.</h2>
                                  <p className= "about--text">Lorem ipsum dolor sit, 
                                    amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href= "#SeeMore.js">See More....</a>
                                    </p>          
                                </div>   
                              </div> 
                            </div>  
          </main>
        </div>
  );
}

