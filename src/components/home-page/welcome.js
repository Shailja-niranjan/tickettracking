import React from "react";
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';

export default function Logo() {
    return (
        <div style={{ textAlign: 'right', 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
            <PermIdentitySharpIcon /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }}>Welcome</span>
        </div>
    );
}