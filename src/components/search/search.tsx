import {AppBar, Box, Typography, Toolbar, InputBase, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useState} from "react";

export function SearchBar(props: { showShoppingCart: any, search: any }) {
  const {showShoppingCart, search} = props;

  const [searchKeyword, setSearchKeyword] = useState('');

  return (<Box sx={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
        >
          My Web Shop
        </Typography>
        <div>
          <InputBase
              inputProps={{'aria-label': 'search'}}
              onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <Button variant={"contained"} onClick={() => search(searchKeyword)}>Search</Button>
          <Button style={{color: 'white'}} startIcon={<ShoppingCartIcon/>} onClick={showShoppingCart}/>
        </div>
      </Toolbar>
    </AppBar>
  </Box>)
}
