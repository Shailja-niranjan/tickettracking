import React from "react";
import "../../css/welcome.css"
//import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';




export default function WelcomeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log("logout")
        setAnchorEl(null);
    };
    
    const user_name = "Test FN Test LN kjjkjmkmjlknmk";

    return (

        <div className="user-profile">
            {/* <PermIdentitySharpIcon /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }}>Welcome</span> */}
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <Avatar />
            </Button>
           
            <Tooltip title={user_name} placement="bottom">
                <Typography className = "user-name-text"  >{user_name}<br />
                    <span style={{ color: "gray" }}>Welcome</span>
                </Typography>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
            >
                <MenuItem onClick={handleClose} style={{ width: "200px" }}>Logout <LogoutIcon style={{marginLeft: "100px"}}/></MenuItem>
            </Menu>

        </div>
    );
}