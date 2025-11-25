import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';
import ShadowBox from './ShadowBox';
import ShadowButton from './ShadowButton';
import type { ProductDetails } from '../../types/MyTypes';


const MyProductDetails = ({products}:{products:ProductDetails}) => {
    return (
        <>
            {
                products.length>0 && (
                    products.map((product)=>(
                        <Grid key={`${product.id}`} size={{'xs':12,'sm':6,'md':6,'lg':3}}>
                            <Link to={product.link?? '/single-product'}>
                            <ShadowBox>
                                <Stack>
                                    <Box>
                                        <img src={product.image} alt="" width={'100%'} height={'220px'} loading='lazy' style={{objectFit:'cover', objectPosition:'top'}}/>
                                    </Box>
                                    <Stack alignItems={'center'}>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant='caption'>{product.price}</Typography>
                                    </Stack>
                                    <Stack direction={'row'} gap={2}>
                                        <ShadowButton displayText='View product' backgroundColor='#C4CDD5'/>
                                        <ShadowButton displayText='Add to Cart'/>
                                    </Stack>
                                </Stack>
                            </ShadowBox>
                            </Link>
                        </Grid>
                    ))
                )
            }
        </>
    )
}

export default MyProductDetails