import React from "react";

import Tooltip, {tooltipClasses} from "@mui/material/Tooltip";
import styled from "@emotion/styled";

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#F5F5F5"
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#F5F5F5",
        color:'black',
        fontFamily: 'FamiljenGrotesk-Regular'
    }
}));

const TooltipComponent = (props) => {

    const { children, text, placement } = props

    return (
        <BootstrapTooltip title={text} placement={placement} >
            {children}
        </BootstrapTooltip>
    )
}

export default TooltipComponent  