import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PersonIcon from '@mui/icons-material/Person';
import { grey } from '@mui/material/colors';


export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const color = grey[900]

  return(
    <div className='navbar--container'>
      <Box sx={{ 
        color: 'primary',
        position: 'fixed',
        padding: 1.5,
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
        <BottomNavigationAction fontSize='large' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction fontSize='large' label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction fontSize='large' label="Explore" icon={<ExploreIcon />} />
        <BottomNavigationAction fontSize='large' label="Library" icon={<CollectionsBookmarkIcon />} />
        <BottomNavigationAction fontSize='large' label="Account" icon={<PersonIcon />} />
      </BottomNavigation>     
      </Box>
    </div>
  ) 
}