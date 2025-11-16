import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';
import ShadowBox from './ShadowBox';
import ShadowButton from './ShadowButton';
import type { ProductDetailsProps } from '../../types/MyTypes';


const ProductDetails = ({products}:ProductDetailsProps) => {
    return (
        <>
            {
                products.length>0 && (
                    products.map((product, index)=>(
                        <Grid key={`${index}-${product.title}`} size={{'xs':12,'sm':6, 'md':4}}>
                            <Link to={product.link}>
                            <ShadowBox>
                                <Stack>
                                    <Box>
                                        <img src={product.image} alt="" width={'100%'} />
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

export default ProductDetails