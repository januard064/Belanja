import React from "react"

import { Box, Typography } from "@mui/material"

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import styled from "@emotion/styled"

// import dummy image
import iphoneImages from '../../src/assets/images/iphone9.jpg'

// import reusable component
import DivFlexStart from "../ReusableComponent/DivFlexStart"
import DivFlexSpacebetween from "../ReusableComponent/DivFlexSpacebetween"
import DivFlexEnd from "../ReusableComponent/DivFlexEnd"
import DivFlexCenter from "../ReusableComponent/DivFlexCenter";
import IconButton from "../ReusableComponent/IconButton";
import TooltipComponent from "../ReusableComponent/TooltipComponent";



const CardContainer = styled(Box)({
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 227,
    flexWrap: 'wrap',
    border: '1px solid #F5F5F5',
    borderRadius: 15,
    cursor: 'pointer',
    ":hover": {
        border: '1px solid #008ECC',
    }
})

const CardImage = styled(Box)(({
    width: '100%',
    display: 'flex',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: '15px 15px 0px 0px',
}))

const CardComponent = styled(Box)({
    padding: '8px 16px',
    width: '100%',
    height: 108
})

const DiscountCard = styled(Box)({
    position: 'absolute',
    zIndex: 100,
    width: 227,
    // backgroundColor: 'red',
    marginTop: -188,
    marginRight: -2

})

const DiscountChip = styled(Box)(({
    width: 45,
    height: 45,
    backgroundColor: '#008ECC',
    borderRadius: '0px 15px 0px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
}))


const ratingStar = (rating) => {
    let star = []
    for (let index = 1; index <= Math.floor(rating); index++) {
        star.push(<StarIcon sx={{ fontSize: 16, color: '#FF9529' }} />)
    }
    if(rating - Math.floor(rating) != 0){
        star.push(<StarHalfIcon sx={{ fontSize: 16, color: '#FF9529' }} />)
    }
    return <Box>{star}</Box>
}

const convertDolarToRupiah = (price) => {

    var priceInRupiah = price * 15200

    return new Intl.NumberFormat("id-ID", {
        style: "decimal",
        currency: "IDR"
    }).format(priceInRupiah);
}

const priceAfterDiscount = (price, discount) => {

    var afterDiscount = (discount / 100) * price

    return Math.round(price - afterDiscount)

}


const ProductsCard = (props) => {

    const { data } = props

    return (
        <CardContainer>

            <CardImage>
                {data.discountPercentage && (
                    <DiscountCard>
                        <DivFlexEnd >
                            <DiscountChip>
                                <Typography sx={{ fontFamily: 'FamiljenGrotesk-SemiBold', fontSize: 14, color: '#ffffff', }}>{`${Math.round(data.discountPercentage)}%`}</Typography>
                                <Typography sx={{ fontFamily: 'FamiljenGrotesk-SemiBold', fontSize: 14, color: '#ffffff', mt: -2 }}>OFF</Typography>
                            </DiscountChip>
                        </DivFlexEnd>
                    </DiscountCard>
                )}
                <img style={{ width: '100%', height: '90%' }} src={data.images} />
            </CardImage>
            <CardComponent>
                <Typography sx={{ fontFamily: 'FamiljenGrotesk-SemiBold', fontSize: 14, lineHeight: 1 }}>{data.title}</Typography>
                <DivFlexSpacebetween sx={{ mt: 1 }}>
                    <Typography sx={{ fontFamily: 'FamiljenGrotesk-Bold', fontSize: 16, mr: 1 }} >Rp.{convertDolarToRupiah(data.price)}</Typography>
                    <Typography sx={{ fontFamily: 'FamiljenGrotesk-Regular', fontSize: 12, textDecoration: 'line-through', color: '#6d7588' }} >Rp.{convertDolarToRupiah(priceAfterDiscount(data.price, data.discountPercentage))}</Typography>
                </DivFlexSpacebetween>

                <DivFlexStart>
                    <VerifiedUserIcon sx={{ fontSize: 14, mr: 0.5, color: '#1fa1f4' }} />
                    <Typography sx={{ fontFamily: 'FamiljenGrotesk-Regular', fontSize: 14, mr: 0.5, mt: -0.2 }}>{data.brand}</Typography>
                </DivFlexStart>

                <DivFlexSpacebetween>
                    <DivFlexStart>
                        {ratingStar(data.rating)}
                        <Typography sx={{ fontFamily: 'FamiljenGrotesk-Regular', fontSize: 12, mt: -0.5, ml: 1 }}>{`(${data.rating})`}</Typography>
                    </DivFlexStart>
                    <TooltipComponent text={'Add To Wish List'} placement='top'> 
                        <IconButton >
                            <FavoriteIcon sx={{ fontSize: 20, color: '#F3C7BE' }} />
                        </IconButton>
                    </TooltipComponent>
                </DivFlexSpacebetween>

                {/* <Typography sx={{ fontFamily: 'FamiljenGrotesk-Regular', fontSize: 10 }}>Add to Cart</Typography> */}

            </CardComponent>

        </CardContainer>
    )
}

export default ProductsCard


ProductsCard.defaultProps = {
    data: {
        id: '1',
        title: 'iPhone9',
        description: 'An apple mobile which is nothing like apple',
        price: '174',
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'category',
        thumbnail: '',
        images: iphoneImages

    }
}
