import React from 'react';

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

class MenuButton extends React.Component {
  state = {
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;

    const cartCount = () => {
      if(this.props.type === 'cart' && this.props.content.length >= 0) {
        return (<StyledBadge badgeContent={this.props.content.length} color="secondary">
        <Wrapper />
      </StyledBadge>)
      }
      else return <Wrapper />;
    }

    const listItems = () => {
      if(this.props.type === 'cart') {
        if(this.props.content && this.props.content.length > 0) {
          return this.props.content.map((link) => <MenuItem key={link.name} onClick={this.handleClose} >{link.name + " #:" + link.inventory}</MenuItem>);
        } else {
          return <MenuItem onClick={this.handleClose}>Empty List</MenuItem>;
        }
      } 
      
      if(this.props.type === 'menu') {
        return this.props.content.map((link) => <MenuItem key={link} onClick={this.handleClose} >{link}</MenuItem>);
      }
    }

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          {cartCount()}

        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
        {listItems()}
        </Menu>
      </div>
    );
  }

}

export default MenuButton;