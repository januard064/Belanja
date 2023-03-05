
import { Box } from "@mui/material";

import styled from "@emotion/styled";

const IconButton = styled(Box)(({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding: 4,
    borderRadius:'50%',
    ':hover' : {
        backgroundColor:'#F5F5F5'
    }
}))

export default IconButton