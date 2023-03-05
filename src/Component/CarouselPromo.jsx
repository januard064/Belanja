import React, { useState } from "react";

import Carousel from "react-material-ui-carousel";

import { Box } from "@mui/system";

import styled from "@emotion/styled";

const CarouselContainer = styled(Box)((props) => ({
    ...props.style,
    width: 'calc(100% + 60px )',
    marginLeft: -40,
    cursor: 'pointer'
}))

const Item = (props) => {

    const { item } = props

    return (
        <div
            style={{
                paddingLeft: 40,
                paddingRight: 40
            }}
        >
            <div style={{ backgroundColor: '#008ECC', height: 316, width: "100%", borderRadius: 15 }}>
                {item.description}
            </div>
        </div>
    )
}

const CarouselPromo = (props) => {

    const { items, style } = props

    const [openNavigation, setOpenNavigation] = useState(false)

    const onMouseEnter = () => {
        setOpenNavigation(true)
    }

    const onMouseLeave = () => {
        setOpenNavigation(false)
    }


    return (
        <CarouselContainer
            style={props.style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Carousel
                index={0}
                interval={4000}
                animation="slide"
                indicators={false}
                stopAutoPlayOnHover
                swipe
                className="my-carousel"
                navButtonsAlwaysVisible={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: "#F3F9FB",
                        opacity: openNavigation ? 1 : 0,
                        color: '#008ECC',
                        margin: '0px 20px',
                    }
                }}
                style={{ backgroundColor: "green", width: '100%' }}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </CarouselContainer>
    )
}

export default CarouselPromo

CarouselPromo.defaultProps = {
    items: [
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
    ]
}
