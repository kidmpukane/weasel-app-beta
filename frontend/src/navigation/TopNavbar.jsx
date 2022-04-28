import React from 'react';
import { useEffect, useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



  export default function TopNavbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 50) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },  [show, handleShow]);

    return (
      <div className={`nav-bar ${show && "nav__display"}`}>
        <ShoppingCartOutlinedIcon />
        <NotificationsNoneIcon />      
      </div>
    )
}