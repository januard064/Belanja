import React from "react";

import styled from "@emotion/styled";

import ProductsCard from "../Component/ProductsCard";
import { Box, Container } from "@mui/material";
import CarouselPromo from "../Component/CarouselPromo";

import Carousel from "react-material-ui-carousel";

const LandingPageContainer = styled(Container)({
    paddingTop: 24
    // backgroundColor:'blue'
})



const LandingPage = () => {

    return (
        <>


            <LandingPageContainer maxWidth="xl">

                <CarouselPromo style={{ marginTop:16, marginBottom:40 }} />
                <ProductsCard />

                {/* <ProductsCard /> */}
            </LandingPageContainer>
        </>
    )
}

export default LandingPage