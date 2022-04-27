import React from 'react';
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



export default function Navbar() {
  const [value, setValue] = React.useState(0);


  return(
    <div className='navbar--container'>
      <nav>
      <Box sx={{ 
        color: 'primary',
        position: 'fixed',
        padding: 1,
        bottom: 0, 
        left: 0, 
        right: 0, 
      }}> 
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link
          className="navbar-item_home"
          to="/homepage"
        >
        <BottomNavigationAction fontSize='large' label="Home" icon={<HomeOutlinedIcon />} />
        </Link>
        <Link              
          className="navbar-item_search"
          to="/search"
          >
        <BottomNavigationAction fontSize='large' label="Search" icon={<SearchOutlinedIcon />} />
        </Link>
        <Link              
          className="navbar-item_explore"
          to="/explore">
        <BottomNavigationAction fontSize='large' label="Explore" icon={<ExploreOutlinedIcon />} />
        </Link>
        <Link              
          className="navbar-item_library"
          to="/library"
          >
        <BottomNavigationAction fontSize='large' label="Library" icon={<CollectionsBookmarkOutlinedIcon />} />
        </Link>
        <Link              
          className="navbar-item_account"
          to="/profile"
          >
        <BottomNavigationAction fontSize='large' label="Account" icon={<PersonOutlineOutlinedIcon />} />
        </Link>
      </BottomNavigation>     
      </Box>
      </nav>     
    </div>
  ) 
}