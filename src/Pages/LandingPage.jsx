import React from "react";

import styled from "@emotion/styled";

import ProductsCard from "../Component/ProductsCard";
import { Box, Container } from "@mui/material";

import Carousel from "react-material-ui-carousel";

const LandingPageContainer = styled(Container)({
    paddingTop: 24
    // backgroundColor:'blue'
})

const Item = (props) => {

    const { item } = props

    return (
        <div
            style={{
                // width: "100%",
                height: "200px",
                // backgroundColor: "red",
                paddingLeft: 40,
                paddingRight: 40
            }}
        >
            <div style={{ backgroundColor: "blue", height: 200, width: "100%" }}>
                {item.description}
            </div>
        </div>
    )
}

const LandingPage = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "1 - Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "2- Hello World!"
        },
        {
            name: "Random Name #3",
            description: "3 - Hello World!"
        }
    ];

    return (
        <>


            <LandingPageContainer maxWidth="xl">

                <Carousel
                    index={0}
                    // onChange={handleChange}
                    interval={4000}
                    animation="slide"
                    indicators={false}
                    stopAutoPlayOnHover
                    swipe
                    className="my-carousel"
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: "#8f34eb",
                            opacity: 0.4
                        }
                    }}
                    style={{ backgroundColor: "green" }}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
                <ProductsCard />

                {/* <ProductsCard /> */}
            </LandingPageContainer>
        </>
    )
}

export default LandingPage