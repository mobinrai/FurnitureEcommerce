import { Box, Button, Grid,styled, Stack, Typography} from "@mui/material"
import VisitBg from '../assets/images/visit_bg.png.webp'
import {Instagram} from "@mui/icons-material"
import Instagram1 from '../assets/images/instra1.png.webp'
import Instagram2 from '../assets/images/instra2.png.webp'
import PopularProducts from "./Single/PopularProducts"
import SectionTitle from "./Single/SectionTitle"
import ShadowButton from "./Single/ShadowButton"
import MySection from "./Single/MySection"
import { ProductsCollection1, ProductsCollection2 } from "./shared/Data"

const Img=styled('img')(({theme})=>({
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: '50%',
    },
    
}))

const Home = () => {
    
    return (
        <>
            <PopularProducts/>
            {/************************
             *best furniture section
             */}
            <Box sx={{display:'flex', flexDirection:{'xs':'column', 'md':'row'}}} >                
                <Box flexBasis={{'xs':'','md':'50%'}} sx={{backgroundImage:`url(${VisitBg})`,backgroundPosition:'center center',width:'100%', backgroundRepeat:'no-repeat',backgroundSize:'cover', height:{'xs':300, 'sm':570}}}></Box>
                <Box flex={1} sx={{backgroundColor:'#F2E1D9',display:'flex', padding:{'xs':'20px', 'sm':'20px 60px'}}}>
                    <Box sx={{ display:'flex',flexDirection:'column',justifyContent:'center',width:{'sm':'100%','md':'60%'},}}>
                        <Typography variant="h2" sx={{fontSize:{'xs':'22px','md':'40px'}}} fontWeight={700} textTransform={'uppercase'} mb={4}>Best Furniture Manufaturer</Typography>
                        <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi dolores impedit laborum cum temporibus!</Typography>
                        <Button size="small" sx={{bgcolor:'#FD8F5F',border:'2px solid #FD8F5F', color:'white',mt:4, width:'90%',letterSpacing:1,boxShadow:4, padding:{'xs':'7px 20px', 'sm':'15px 40px'}, '&:hover':{bgcolor:'black', boxShadow:0}}}>Discover More</Button>
                    </Box>
                </Box>
            </Box>
            {/*****************************
             *products you may like
             */}
            <MySection products={ProductsCollection1} LinkTo="products-you-may-like" mainTitle="Products You May Like" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga eius a quibusdam saepe aliquam soluta neque hic obcaecati sit?"/>
            {/***************************
             *instagram
             */}
            <Box sx={{marginLeft:{'xs':'10px','md':'50px', 'lg':'200px'}, marginRight:{'xs':'10px','md':'50px'}, marginY:'40px'}}>                
                <Grid container  spacing={4}>
                    <Grid size={{'xs':12, 'md':6,'lg':4, 'xl':3}} spacing={4}>
                        <Instagram sx={{fontSize:'68px', color:'#FD8F5F'}}/>
                        <SectionTitle mainTitle="Get Inspired with Instagram" 
                        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum molestias itaque vitae sit rerum."
                        />
                        <ShadowButton displayText="Discover More"/>
                    </Grid>
                    <Grid size={{'xs':12, 'md':6,'lg':8, 'xl':9}}>
                        <Stack flexDirection={{'xs':'column','sm':'row','md':'row'}}>
                            <Img src={Instagram1} alt=""/>
                            <Img src={Instagram2} alt=""/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
           {/******************************
            * top section
            */}
            <MySection products={ProductsCollection2}  LinkTo="top-section" mainTitle="Top Section" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga eius a quibusdam saepe aliquam soluta neque hic obcaecati sit?"/>
            {/*****************************
            * serives section
            */}
            
        </>
    )
}

export default Home