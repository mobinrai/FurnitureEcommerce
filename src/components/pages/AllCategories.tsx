import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import MyBreadcrumb from '../shared/MyBreadcrumb'
import { ProductsCollection1 } from '../shared/Data'
import BlogImg1 from '../../assets/images/blog-all-category-1.webp'
import BlogImg2 from '../../assets/images/blog-all-category-2.jpeg'
import BlogImg3 from '../../assets/images/blog-all-category-3.webp'
import ProductDetails from '../Single/MyProductDetails'
import { useEffect, useState } from 'react'
import type { CategoryDetails } from '../../types/MyTypes'

const AllCategories = () => {
    const [categories, setCategories]=useState<CategoryDetails>([])

    useEffect(()=>{
        (async function(){
            const response = await fetch('http://localhost:3001/categories')
            const data = await response.json()
            setCategories(data)
        })()
    },[])
    return (
        <section style={{margin:'100px 0'}}>
            <Container>
                <MyBreadcrumb items={[{'label':'All Categories'}]}/>
                <Typography variant='h5' my={4}>All Categories</Typography>
                <Grid container spacing={4}>
                    {
                        categories.map((category)=>{
                            return <Grid key={`${category.id}`} size={{xs:12,sm:6,md:4,lg:3}}>
                                <Stack gap={1}>
                                    <Box sx={{border:'1px solid gray', height:'220px'}}>
                                        <img src={category.image} width={'100%'} height={'100%'} style={{objectFit:'cover'}}/>
                                    </Box>
                                    <Typography variant='h6' sx={{width:'fit-content',cursor:'pointer',':hover':{borderBottom:'1px solid gray'}}}>
                                        {category.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                        })
                    }
                    <Grid size={{lg:12}} mt={4}>
                        <Stack gap={2}>
                        <Typography variant='h5' fontWeight={700} pb={1} mb={1} borderBottom={1} borderColor={'whitesmoke'}>Design Your Dream Home: A Blueprint for Your Personal Sanctuary</Typography>
                        <Typography variant='body2'>Have you ever closed your eyes and pictured your perfect home? Not just a house, but a space that feels uniquely you—a sanctuary that reflects your personality, supports your lifestyle, and brings you joy every single day. Designing your dream home is one of the most exciting journeys you can embark on, blending imagination with practicality.</Typography>
                        
                        <Typography variant='body2'>
                            Forget cookie-cutter layouts for a moment. Let's explore the key steps to turning that dream into a tangible blueprint.
                        </Typography>
                        <b>1. Find Your "Why" and Your Style</b>
                        <Typography variant='body1'>
                            Before you sketch a single wall, ask yourself: How do I want to feel in this home? Do you crave a calm, minimalist retreat? A vibrant, social hub for friends and family? A cozy, rustic escape?
                            <br/>
                            <br/>
                            Your answers will guide your aesthetic. Dive into inspiration on platforms like Pinterest or Instagram. Create a mood board. Do you see clean lines and neutral tones (Modern), warm wood and natural textures (Scandinavian), or bold colors and patterns (Maximalist)? Your dream home should tell your story.
                        </Typography>
                        <img src={BlogImg1} alt="" height={'620px'} style={{objectFit:'cover'}}/>
                        <b>2. Prioritize the Flow: It's All About Experience</b>
                        <Typography variant='body1'>How you move through your home is just as important as how it looks. Think about your daily life.</Typography>
                            <ol>
                                <li>Do you love to cook and entertain? An open-concept kitchen that flows into the living and dining area might be your heart of the home.</li>
                                <li>Do you work from home? A dedicated, light-filled office nook away from the main hustle is essential.</li>
                                <li>Craving a true escape? Your primary bedroom should be a spa-like sanctuary, not just a place to sleep.</li>
                                <li>Design the flow to support your routines and create natural, intuitive transitions between spaces.</li>
                            </ol>
                        
                        <img src={BlogImg2} alt="" height={'620px'} style={{objectFit:'cover'}}/>
                        <b>3. Let There Be (The Right) Light</b>
                        <Typography variant='body1'>Lighting is the magic ingredient that can transform a room. A well-designed home uses a mix of three types of lighting:</Typography>
                        <ol>
                            <li>Ambient: The general overhead lighting (e.g., recessed lights or a statement chandelier).</li>
                            <li>Task: Lighting for specific activities (e.g., under-cabinet lights in the kitchen, a reading lamp by your armchair).</li>
                            <li>Accent: Lighting to highlight features (e.g., a picture light over artwork, LED strips on shelves).</li>
                            <li>And never underestimate the power of natural light. Strategically placed windows and skylights can flood your home with warmth and energy.</li>
                        </ol>
                        <img src={BlogImg3} alt="" height={'620px'} style={{objectFit:'cover'}}/>
                        </Stack>
                        <Stack marginTop={8}>
                        <Box borderBottom={1} mb={4} borderColor={'divider'}>
                            <Typography variant="h6" fontWeight={700}>Products From Your Search</Typography>
                        </Box>
                        <Grid container spacing={4}>
                            <ProductDetails products={ProductsCollection1}/>
                        </Grid>
                </Stack>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default AllCategories