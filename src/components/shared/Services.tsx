import { LocalAtmOutlined, LocalShippingOutlined, WorkOffOutlined } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'

const Services = () => {
    return (
        <Box sx={{marginTop:'40px', position:'relative',backgroundColor:'#F2E1D9','::after':{
                content:'""',
                position:{'md':'unset','lg':'absolute'},
                backgroundColor:'white',
                width:'50px',
                top:0,
                right:0,
                bottom:0,
            }}}>
                
                <Box sx={{paddingY:'80px', maxWidth:'1200px', marginX:'auto', paddingX:'80px'}}>
                    <Grid container alignItems={'center'} rowGap={4}>
                        <Grid spacing={6}  size={{'xs':12,'sm':6,'md':3}}>
                            <LocalShippingOutlined fontSize="large"/>
                            <Typography variant="h6">Fast & Free Delivary</Typography>
                            <Typography color="#57667e">Free delivery on all orders</Typography>
                        </Grid>
                        <Grid size={{'xs':12,'sm':6,'md':3}} columnSpacing={4}>
                            <WorkOffOutlined fontSize="large"/>
                            <Typography variant="h6">SecurePayment</Typography>
                            <Typography color="#57667e">Free delivery on all orders</Typography>
                        </Grid>
                        <Grid size={{'xs':12, 'sm':6,'md':3}}>
                            <LocalAtmOutlined fontSize="large"/>
                            <Typography variant="h6">Money Back Gurantee</Typography>
                            <Typography color="#57667e">Free delivery on all orders</Typography>
                        </Grid>
                        <Grid size={{'xs':12, 'sm':6,'md':3}}>
                            <LocalShippingOutlined fontSize="large"/>
                            <Typography variant="h6">Online Support</Typography>
                            <Typography color="#57667e">Free delivery on all orders</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
    )
}

export default Services