import React from "react";
import HelpIcon from '@material-ui/icons/Help';


export default function Logo() {
    return (
        <div style={{ textAlign: 'right', 
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
            <HelpIcon color="primary" /><span style={{marginRight: "10px", color:"blue", fontWeight: "600" }}>Help</span>
        </div>
    );
}
