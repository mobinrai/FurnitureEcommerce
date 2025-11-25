import { TabContext, TabList} from '@mui/lab'
import { Box, Container, styled, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProductsCollection1, ProductsCollection2 } from '../shared/Data'
import ResponsiveTabPanel from '../shared/ResponsiveTabPanel'

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
                    <Box sx={{margin:{'xs':1}}}>
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
                        <ResponsiveTabPanel value='livingroom' products={ProductsCollection1}/>
                        <ResponsiveTabPanel value='bedroom' products={ProductsCollection2}/>
                        <ResponsiveTabPanel value='diningroom' products={ProductsCollection1}/>
                        <ResponsiveTabPanel value='wardrobe' products={ProductsCollection2}/>
                        <ResponsiveTabPanel value='study' products={ProductsCollection1}/>
                    </TabContext>
                    </Box>
            </Container>
        </Section>            
    )
}

export default PopularProducts