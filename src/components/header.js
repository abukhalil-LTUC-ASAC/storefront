
import React from "react";
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

import MenuButton from './common/menuButton';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  const handleLogin = (event) => {
    setAuth(!auth);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR STORE
          </Typography>
          <div style={{display: 'flex'}}>
          <IconButton color="inherit" aria-label="add to shopping cart" component={Link} to={'/'}>
            <HomeIcon/>
          </IconButton>
          {auth && (
            <>
              <MenuButton iconType={ShoppingCartIcon} type={'cart'} content={props.cart.inventory} />
              <IconButton color="inherit" aria-label="add to shopping cart" component={Link} to={'/cart'}>
                <ExitToAppIcon/>
              </IconButton>
              <MenuButton iconType={AccountCircleIcon} type={'menu'} content={['Profile','My account', 'Logout']}/>
            </>
          )}
          </div>
          <div onClick={handleLogin}>
            {auth ? "Logout" : "Login"}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default withRouter(connect(mapStateToProps)(Header)); 