import { Box, Button, Container, Grid, LinearProgress, Rating, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material"
import Avatar1 from '../../assets/images/users/avatar-1.webp'
import Avatar2 from '../../assets/images/users/avatar-2.webp'
import Avatar3 from '../../assets/images/users/avatar-3.webp'
import Avatar4 from '../../assets/images/users/avatar-4.webp'
import Avatar5 from '../../assets/images/users/avatar-5.webp'
import PopularImg5 from '../../assets/images/popular5.png.webp'
import PopularImg6 from '../../assets/images/popular6.png.webp'
import PopularImg7 from '../../assets/images/popular7.png.webp'
import { Add, ArrowRight, Close, Create, Email, Favorite, Minimize, Share } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import ShadowButton from "../Single/ShadowButton"
import ProductReviews from "../Single/ProductReviews"
import ProductDetails from "../Single/ProductDetails"
import { ProductsCollection1, ProductsCollection2,DeskImages } from "../shared/Data"
import MyBreadcrumb from "../shared/MyBreadcrumb"
import { useParams } from "react-router"
import ErrorPage from "../errors/ErrorPage"


const reviewsCollection = [
    {
        userName: 'Penelopi',
        image:Avatar1,
        date:'11 Nov 2025',
        text:'Great product! Highly recommended.',
        rating:4.5,
    },
    {
        userName: 'Penelopi',
        image:Avatar2,
        date:'09 Nov 2025',
        text:'Good quality and fast delivery.',
        rating:4
    },{
        userName: 'Snow White',
        image:Avatar3,
        date:'11 Dec 2024',
        text:'Looks greate but not as expected.',
        rating:2.5,
    },
    {
        userName: 'Aurora',
        image:Avatar5,
        date:'29 Feb 2023',
        text:'Bad quality and delivery is not on Time.',
        rating:1
    }
    ,{
        userName: 'Merinda',
        image:Avatar1,
        date:'11 Apr 2022',
        text:'The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.',
        rating:1.5,
    },
    {
        userName: 'Penelopi',
        image:Avatar4,
        date:'29 May 2021',
        text:'Bad quality and delivery is not on Time.',
        rating:1
    }
]

const SingleProduct = () => {
    const { name } = useParams<{ name: string }>();
    const [quantity, setQuantity] = useState(1)
    const [currentImage, setCurrentImage] = useState(DeskImages[0])
    const [isProdctDetailShown, setIsProductDetailShown] = useState(false)
    
    useEffect(()=>{
        if(isProdctDetailShown){
            document.body.style.overflow='hidden'
        }else{
             document.body.style.overflow=''
        }
        return ()=>{
            document.body.style.overflow=''
        }
    },[isProdctDetailShown])

    if(!name) return <ErrorPage/>

    const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>
    {
        const currentValue =parseInt(event.target.value)
        if((currentValue)>999){
            event.preventDefault()
        }
        else
        {
            if(!isNaN(currentValue)){
                setQuantity(currentValue)
            }
        }
    }
    
    const handleSubtract =()=>{
        if(quantity>1){
            setQuantity(prev=>prev-1)
        }
    }

    const handleAdd =()=>{
        if((quantity+1)>999){
            return false;
        }else{
            setQuantity(prev=>prev+1)
        }
    }
    return (
        <section style={{margin:'100px 0'}}>
            <Container>
                <MyBreadcrumb items={[{label:'Products', href:'/products'},{label:name}]}/>    
                <Grid container rowSpacing={1} spacing={1}>
                    <Grid size={{lg: 8}} sx={{ position: 'sticky', height:'fit-content', top:5, alignSelf: 'flex-start',transition: 'all 0.3s ease'}}>
                        <Box position={'static'} zIndex={999}>
                            <Stack direction={'row'}>
                                <Stack width={'20%'}>
                                    {
                                    DeskImages.map((img, index)=>{
                                        return <Box onClick={()=>setCurrentImage(img)} key={`${index}-${img}`} sx={{'padding':'5px',marginY:1,border:'1px dotted ', cursor:'pointer'}} width={'70%'} height={'120px'}>
                                            <img src={img} style={{width:'100%',height:'110px'}}/>
                                            </Box>
                                    })
                                }  
                                </Stack>                       
                                <Stack width={'80%'} height={'100%'} padding={3} justifyContent={'center'}>
                                    <img src={currentImage} width={'100%'} height={'50%'}/>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid size={{lg:4}}>
                        <Stack gap={2}>
                            <Typography variant="h4" fontSize={24} fontWeight={700}>Faded SkyBlu Denim Jeans</Typography>
                            <Stack direction={'row'} gap={2} alignItems={'center'}>
                                <Rating defaultValue={3.5} precision={0.5} readOnly/>
                                <Typography variant="body2" color="#afafafff" my={2}>(9.12k reviews)</Typography>
                            </Stack>
                            <Typography variant="body1" sx={{color:'#FD8F5F', fontWeight:'bold', fontSize:26}}>$456</Typography>
                            <Stack sx={{borderBottom:'1px dotted gray'}} gap={1}  pb={1}>
                                <Stack direction={'row'} gap={1}><span>Category : </span> <span style={{color:'#FD8F5F'}}>HouseHold</span></Stack>
                                <Stack direction={'row'} gap={1}><span>Availability : </span><span>In Stock</span></Stack>
                            </Stack>
                            <Typography variant="body1" sx={{color:'#646D77'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur iste iusto dicta molestias blanditiis deserunt nobis ex, doloribus adipisci!</Typography>
                            <Box sx={{position:'relative', display:'flex', alignItems:'center'}}>
                                <span style={{position:'absolute',top:'8px', left:'10px', zIndex:999,cursor:'pointer',bottom:'-10px'}} onClick={handleSubtract}><Minimize/></span>
                                <TextField variant="outlined" value={quantity} onChange={handleChange}  slotProps={{input:{sx:{borderRadius: '50px',position:'relative',backgroundColor:'#ecececff',color:'black',width:'60%',paddingLeft:'25px'}}}}/>
                                <span style={{position:'relative', right:'130px', top:'4px',zIndex:999,cursor:'pointer'}} onClick={handleAdd}><Add/></span>
                            </Box>
                            <Stack direction={'row'} gap={4}>
                                <ShadowButton displayText='Add to Cart'/>
                                <ShadowButton displayText='Add to Wishlist'/>
                            </Stack>
                            <Stack direction={'row'} gap={2} sx={{color:'GrayText'}}>
                                <Stack direction={'row'} sx={{cursor:'pointer',':hover':{borderBottom:'1px solid GrayText'}}}><Add fontSize="small"/> <Typography variant="caption">Compare</Typography></Stack>
                                <Stack direction={'row'} sx={{cursor:'pointer',':hover':{borderBottom:'1px solid GrayText'}}}><Favorite fontSize="small"/><Typography variant="caption">favourite</Typography></Stack>
                                <Stack direction={'row'} sx={{cursor:'pointer',':hover':{borderBottom:'1px solid GrayText'}}}><Share fontSize="small"/><Typography variant="caption">share</Typography></Stack>
                            </Stack>
                            <Stack sx={{borderTop:'1px dotted gray',borderBottom:'1px dotted gray', my:3,padding:2}}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'} sx={{cursor:'pointer'}}
                                onClick={()=>setIsProductDetailShown(!isProdctDetailShown)}>
                                    <Typography variant="h6">Product Details</Typography><ArrowRight fontSize="large"/>
                                </Box>
                            </Stack>
                            <Stack gap={2} borderBottom={1} borderColor={'dimgrey'} pb={1}>
                                <Typography variant="h5" fontWeight={700}>Can be supplemented with</Typography>
                                <Stack direction={'row'} gap={2}>
                                    <Box width={'40%'}><img src={PopularImg5} width={'100%'}/></Box>
                                    <Stack>
                                        <Typography>DESK CURTAIN 55.4/21.5/8 cm in white, birch color</Typography>
                                        <Typography variant="caption" mt={1} fontWeight={700}>$ 25.8</Typography>
                                    </Stack>
                                </Stack>
                                View Product
                            </Stack>
                            <Stack gap={2} borderBottom={1} borderColor={'dimgrey'} pb={1}>
                                <Stack direction={'row'} gap={2}>
                                    <Box width={'40%'}><img src={PopularImg6} width={'100%'}/></Box>
                                    <Stack>
                                        <Typography>DESK CURTAIN 55.4/21.5/8 cm in white, birch color</Typography>
                                        <Typography variant="caption" mt={1} fontWeight={700}>$ 25.8</Typography>
                                    </Stack>
                                </Stack>
                                View Product
                            </Stack>
                            <Stack gap={2} borderBottom={1} borderColor={'dimgrey'} pb={1}>
                                <Stack direction={'row'} gap={2}>
                                    <Box width={'40%'}><img src={PopularImg7} width={'100%'}/></Box>
                                    <Stack>
                                        <Typography>DESK CURTAIN 55.4/21.5/8 cm in white, birch color</Typography>
                                        <Typography variant="caption" mt={1} fontWeight={700}>$ 25.8</Typography>
                                    </Stack>
                                </Stack>
                                View Product
                            </Stack>
                            <Stack gap={2} my={4}>
                                <Typography variant="h5" fontWeight={700}>About Seller</Typography>
                                <Typography variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente necessitatibus accusantium dolor totam possimus laudantium dolore quaerat ratione animi.
                                </Typography>
                                <ul>
                                    <li>Standard delivered 4-5 Business Days</li>
                                    <li>Express delivered 2-4 Business Days</li>
                                </ul>
                                <Stack direction={'row'} gap={1} alignItems={'center'}>
                                    <Typography variant="body1">Likes</Typography>: <Rating defaultValue={3.5} readOnly/>
                                </Stack>
                                <Stack direction={'row'} gap={1} alignItems={'center'}>
                                    <Typography variant="body1">Contact</Typography>:<Email/> yoo@contact.com
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                {
                    isProdctDetailShown && 
                    <Stack alignItems={'flex-end'} sx={{backgroundColor:'#0000006e',position:'fixed', zIndex:999,left:0, top:0, width:'100%', height:'100%'}}>
                        <Stack sx={{backgroundColor:'white',width:'30%', boxShadow:3, padding:3}} direction={'row'} alignItems={'center'} justifyContent={'space-between'} position={'sticky'}>
                            <Typography variant="h6">Product Details</Typography>
                            <Stack sx={{border:'1px solid black',padding:"3px",cursor:'pointer', borderRadius:'50px'}} onClick={()=>setIsProductDetailShown(!isProdctDetailShown)}><Close/></Stack>
                        </Stack>
                    <Stack sx={{backgroundColor:'white',padding:3, height:'100%',width:'30%'}} gap={2}>
                        <Stack sx={{overflowY:'scroll', paddingTop:1}}>
                            <Table sx={{ width: '100%', mb:5 }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Orange Furniture</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Manufacturer</TableCell>
                                    <TableCell>Orange Furniture</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Serial number</TableCell>
                                    <TableCell>358607726380311</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Warranty</TableCell>
                                    <TableCell>3 years</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Width</TableCell>
                                    <TableCell>180cm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Height</TableCell>
                                    <TableCell>120cm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weight</TableCell>
                                    <TableCell>10kg</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Typography variant="h6">Delivery and returns</Typography>
                        <Typography variant="body2">Your order of $200 or more gets free standard delivery.</Typography>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <ul>
                            <li>Standard delivered 4-5 Business Days</li>
                            <li>Express delivered 2-4 Business Days</li>
                        </ul>
                        <Typography variant="body2">Orders are processed and delivered Monday-Friday (excluding public holidays)</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                }
                <Stack gap={2} my={8}>
                    <Grid container>
                        <Grid size={{lg:4}} sx={{position:'sticky', top:'10px',height:'fit-content', padding:2}}>
                            <Stack gap={3}>
                                <Stack alignItems={'center'}>
                                <Typography variant="h6">Average rating</Typography>
                                <Typography variant="h6" fontSize={52} fontWeight={900}>3.7/5</Typography>
                                <Rating defaultValue={3.5} precision={0.5} readOnly/>
                                <Typography variant="body2" color="#afafafff" my={2}>(9.12k reviews)</Typography>
                            </Stack>
                            <Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography variant="h6">5 star</Typography>
                                    <LinearProgress variant="determinate" 
                                    sx={{backgroundColor:'#b1b1b1ff','& .MuiLinearProgress-bar':{backgroundColor:'#272727ff'}, width:'55%'}} value={50}/>
                                    <span style={{color:"#818182ff"}}>2.08k</span>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography variant="h6">4 star</Typography>
                                    <LinearProgress variant="determinate" 
                                    sx={{backgroundColor:'#b1b1b1ff','& .MuiLinearProgress-bar':{backgroundColor:'#272727ff'}, width:'55%'}} value={25}/>
                                    <span style={{color:"#818182ff"}}>6.08k</span>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography variant="h6">3 star</Typography>
                                    <LinearProgress variant="determinate" 
                                    sx={{backgroundColor:'#b1b1b1ff','& .MuiLinearProgress-bar':{backgroundColor:'#272727ff'}, width:'55%'}} value={8}/>
                                    <span style={{color:"#818182ff"}}>3.80k</span>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography variant="h6">2 star</Typography>
                                    <LinearProgress variant="determinate" 
                                    sx={{backgroundColor:'#b1b1b1ff','& .MuiLinearProgress-bar':{backgroundColor:'#272727ff'}, width:'55%'}} value={10}/>
                                    <span style={{color:"#818182ff"}}>9.08k</span>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography variant="h6">1 star</Typography>
                                    <LinearProgress variant="determinate" 
                                    sx={{backgroundColor:'#b1b1b1ff','& .MuiLinearProgress-bar':{backgroundColor:'#272727ff'}, width:'55%'}} value={30}/>
                                    <span style={{color:"#818182ff"}}>1.08k</span>
                                </Stack>
                            </Stack>
                            <Button variant="outlined" sx={{backgroundColor:'#C4CDD5', borderColor:'#C4CDD5', color:'black', fontWeight:'bold', ':hover':{
                                backgroundColor:'black', color:'white', boxShadow:2,transition:'all 0.3s ease-in-out',
                            }}} startIcon={<Create/>}>
                                Write your review
                            </Button>
                            </Stack>
                        </Grid>
                        <Grid size={{lg:8}} borderLeft={{xs:'0', sm:'1px dotted gray'}}>
                            <ProductReviews reviews={reviewsCollection}/>
                        </Grid>
                    </Grid>
                    
                </Stack>
                <Stack my={8}>
                    <Box borderBottom={1} mb={4} borderColor={'divider'}><Typography variant="h6">Products You May Like</Typography></Box>
                    <Grid container spacing={4}>
                        <ProductDetails products={ProductsCollection1}/>
                    </Grid>
                </Stack>
                <Stack my={8}>
                    <Box borderBottom={1} mb={4} borderColor={'divider'}>
                        <Typography variant="h6">Products From Your Search</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <ProductDetails products={ProductsCollection2}/>
                    </Grid>
                </Stack>
                <Stack my={8}>
                    <Box borderBottom={1} mb={4} borderColor={'divider'}><Typography variant="h6">Others also bought</Typography></Box>
                    <Grid container spacing={4}>
                        <ProductDetails products={ProductsCollection1}/>
                    </Grid>
                </Stack>
            </Container>
        </section>
    )
}

export default SingleProduct