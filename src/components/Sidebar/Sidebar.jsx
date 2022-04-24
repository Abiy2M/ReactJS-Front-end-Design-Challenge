import React from "react";
import "./Sidebar.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import DeleteIcon from '@material-ui/icons/Menu';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="sidebar">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* <DeleteIcon/> */}
        <i class="fa-solid fa-bars menu"></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Option one</MenuItem>
        <MenuItem onClick={handleClose}>Option two</MenuItem>
        <MenuItem onClick={handleClose}>Option three</MenuItem>
      </Menu>
      <div className="social_media">
        <div className="facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
        <div className="twitter">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div className="page_count">01 <p>/05</p></div>

      <div className="nav_buttons">
        <div className="prev">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div className="next">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
