
import { Box } from "@mui/material";

import styled from "@emotion/styled";

const IconButtonAppBar = styled(Box)(({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding: 8,
    borderRadius:15,
    color:'#666666',
    cursor:'pointer',
    ':hover' : {
        backgroundColor:'#F5F5F5',
        color:'#0591AF'
    }
}))

export default IconButtonAppBar