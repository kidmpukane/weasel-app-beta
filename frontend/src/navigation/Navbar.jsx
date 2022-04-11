import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';



export default function Navbar() {
  const [value, setValue] = React.useState(0);
  

  return(
    <div className='navbar--container'>
      <Box>
      <Paper sx={{
        position: 'fixed',
        padding: 1.5,
        bottom: 0, 
        left: 0, 
        right: 0,
        overflow: 'hidden', 
        }} 
        elevation={3}
        >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      <BottomNavigationAction label="Library" icon={<CollectionsBookmarkIcon />} />
      <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
      </Paper>
      </Box>
    </div>
  ) 
}
