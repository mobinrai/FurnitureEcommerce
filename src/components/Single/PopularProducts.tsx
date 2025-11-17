import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Container, Grid, styled, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import { ProductsCollection1, ProductsCollection2 } from '../shared/Data'

const Section=styled('section')(()=>({
    paddingTop:100,
    paddingBottom:80,
    fontFamily:'"Playfair Display", serif'
}))

const PopularProducts = () => {
    const [value, setValue] = useState('livingroom')
    
        const handleChange = (event: React.SyntheticEvent, newValue:string)=>{
            setValue(newValue)
        }
    
    return (
        <Section>
            <Container>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginX={'auto'} mb={6}>
                        <Typography variant="h3" textTransform={'uppercase'} fontWeight={700} fontSize={'40px'} marginBottom={2}>Popular Section</Typography>
                        <Typography variant="body2" color="#7F85A8" fontSize={16}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fuga eius a quibusdam saepe aliquam soluta neque hic obcaecati sit?</Typography>
                    </Box>                        
                    <TabContext value={value}>
                        <Box sx={{borderBottom:1, borderBottomColor:'divider', marginBottom:2}}>
                            <TabList onChange={handleChange} aria-label="Popular items" centered sx={{color:'#FD8F5F'}}>
                                <Tab label="Living Room" value='livingroom'/>
                                <Tab label="Bed Room" value='bedroom'/>
                                <Tab label="Dining Room" value={'diningroom'}/>
                                <Tab label="Wardrobe" value={'wardrobe'}/>
                                <Tab label="Study" value={'study'}/>
                            </TabList>
                        </Box>
                        <TabPanel value={'livingroom'}>
                            <Grid container spacing={4}>
                                <ProductDetails products={ProductsCollection1}/>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={'bedroom'}>
                            <Grid container spacing={4}>
                                <ProductDetails products={ProductsCollection2}/>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={'diningroom'}>
                            <Grid container spacing={4}>
                                <ProductDetails products={ProductsCollection1}/>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={'wardrobe'}>
                            <Grid container spacing={4}>
                                <ProductDetails products={ProductsCollection2}/>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={'study'}>
                            <Grid container spacing={4}>
                                <ProductDetails products={ProductsCollection1}/>
                            </Grid>
                        </TabPanel>
                    </TabContext>
            </Container>
        </Section>            
    )
}

export default PopularProducts