import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';

export default function Logo() {
    return (
        <div style={{ textAlign: 'right', 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
            <SettingsIcon color="primary" /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }} >Setting</span>
            
        </div>
    );
}
