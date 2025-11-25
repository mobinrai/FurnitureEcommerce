import { Box, Container, Divider, Grid, Slider, Stack, Typography, Checkbox } from '@mui/material'
import { useEffect, useState } from 'react';
import type { ProductDetails } from '../../types/MyTypes';
import ShadowButton from '../Single/ShadowButton';
import { Link } from 'react-router';
// Skeleton
const Products = () => {
    const [products, setProducts] = useState<ProductDetails>([])
    useEffect(()=>{
        (async function(){
            const response = await fetch('http://localhost:3001/products?_limit=3')
            const data:ProductDetails = await(response.json())
            setProducts(data)
        })()
    }, [])
    return (
        <section style={{marginTop:8, marginBottom:8}}>
            <Container maxWidth={'xl'}>
                <Grid container>
                    <Grid size={{lg:2}} paddingY={4} paddingX={2} borderColor={'GrayText'}>
                        <Typography variant='h6' fontWeight={700}>Filter</Typography>
                        <Divider/>
                        <Stack mt={2} gap={2}>
                            <Stack>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Price Range</Typography>
                                <Slider aria-label='Price Range' value={[10, 4000]} min={10} max={4400} valueLabelDisplay='auto' color='warning'/>
                                <Typography variant='caption'>from 10$ to 4400$ </Typography>
                            </Stack>
                            <Divider/>
                            <Stack gap={1}>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Brands</Typography>
                                <Box>
                                    <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Global Lights</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Home Decore</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Global Furniture</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Top Moon</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Moon Walk</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Running Sun</Typography>
                                </Stack>
                                </Box>
                            </Stack>
                            <Divider/>                            
                            <Stack gap={1}>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Colors</Typography>
                                <Box>
                                    <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox sx={{color:'yellow', "&.Mui-checked":{color:'yellow'}}}/><Typography variant='body1'>Yellow</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Braun</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Green</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox sx={{color:'black',"&.Mui-checked":{color:'black'}}}/><Typography variant='body1'>Black</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox sx={{color:'gray',"&.Mui-checked":{color:'gray'}}}/><Typography variant='body1'>Gray</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox sx={{color:'blue', "&.Mui-checked":{color:'blue'}}} slotProps={{input:{color:'primary' }}}/><Typography variant='body1'>Blue</Typography>
                                </Stack>
                                </Box>
                            </Stack>
                            <Divider/>                            
                            <Stack gap={1}>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Material</Typography>
                                <Box>
                                    <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Almunium</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Cotton</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Stailess Steel</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Black</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Gray</Typography>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <Checkbox/><Typography variant='body1'>Blue</Typography>
                                </Stack>
                                </Box>
                            </Stack>
                            <Stack>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Width</Typography>
                                <Slider aria-label='Price Range' value={[0, 400]} min={0} max={500} valueLabelDisplay='auto' color='warning'/>
                                <Typography variant='caption'>0cm to 500cm</Typography>
                            </Stack>
                            <Divider/>
                            <Stack>
                                <Typography variant='h6' fontWeight={700} fontSize={14}>Height</Typography>
                                <Slider aria-label='Price Range' value={[0, 250]} min={0} max={300} valueLabelDisplay='auto' color='warning'/>
                                <Typography variant='caption'>0cm to 300cm</Typography>
                            </Stack>
                            <Divider/>
                        </Stack>
                    </Grid>
                    <Grid container size={{lg:10}} padding={4} spacing={2}>
                        {
                            products.length>0 && products.map((product)=>{
                                return (
                                    <Grid size={{lg:4}} key={`${product.id}`} paddingX={2}>
                                        <Stack>
                                            <img style={{width:'100%', height: 218 }} alt={product.title} src={product.image} loading='lazy'/>
                                        </Stack>
                                        <Stack my={2} gap={1}>
                                            <Typography variant='h6' fontWeight={700} fontSize={16}>{product.title}</Typography>
                                            <Typography variant='caption' fontWeight={700}>{product.price}$</Typography>
                                            <Link to={`/single-product/${product.id}`}><ShadowButton displayText='View Product'/></Link>
                                        </Stack>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Products