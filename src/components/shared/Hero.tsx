import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import HeroImg from '../../assets/images/h1_hero.png'
import { ArrowForward } from '@mui/icons-material'
import { useLocation, useParams } from 'react-router'
import { useEffect, useState } from 'react'

const Hero = () => {
    const location =useLocation()
    const params = useParams()
    const [height, setHeight] = useState('830px')
    const [pageTitle, setPageTitle] = useState('')
    useEffect(()=>{
        if(location.pathname!='/'){
            setHeight('275px')
        }else{
            setHeight('830px')
        }
        if(Object.keys(params).length>0){
            setPageTitle((location.pathname.split("/")[1]).replace('-',' '))
        }else{
            setPageTitle(location.pathname.replaceAll(/[- /]+/g, ' ').trim())
        }
    },[location.pathname])

    return (
        <Box sx={{backgroundColor:'#F2E1D9',paddingRight:{'xs':'0px', 'sm':'50px'}, 
            paddingBottom:'73px', position:'relative',
            marginTop:'-1px','&::before':{
            content:'""',
            position:"absolute",
            width:'180px',
            height:'80px',
            backgroundColor:'#fff',
            left:0,
            bottom:0,
        }}}>
            <Box component={'div'} sx={{zIndex:999,
                position:'relative',
                display:'block',
                maxWidth:'1860px',
                backgroundImage:`url(${HeroImg})`,
                backgroundSize:'cover', 
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center center',
                minHeight:{height}}}
            >
            {
            location.pathname =='/' 
            ?
            <Card sx={{
                width:{'lg':'40%', 'md':'50%', 'sm':'70%'}, 
                position:'relative', 
                display:'flex',
                flexDirection:'column',
                padding:'29px 60px 56px 68px', 
                top:'20%',
                left:{'lg':'20%', 'md':'10%'} }}>
                
                    <CardContent sx={{flexWrap:'wrap',}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'#7F85A8', fontWeight:'600'}}>
                    70% SALE OFF
                    </Typography>
                    <Typography gutterBottom variant="h2" fontWeight={900} fontSize={{'lg':70, 'md':50, 'xs':30}}>
                    FURNITURE AT COST
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam saepe quisquam aliquam unde laudantium adipisci delectus laboriosam eos nihil eius.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button  sx={{bgcolor:'#FD8F5F', color:'white', width:{'xs':'80%','md':'50%'}, letterSpacing:1, padding:{'xs':'10px', 'sm':'15px'}}}> <Typography>Discover More</Typography> <ArrowForward/> </Button>
                </CardActions>
                
            </Card>
            :
            <Container sx={{height:'100%'}}>
                <Grid container sx={{height:'100%', alignItems:'center'}}>
                    <Grid size={{'lg':6}}>
                        <Typography variant='h3' textTransform={'uppercase'} color='white' fontWeight={900}>{pageTitle}</Typography>
                    </Grid>
                </Grid>
            </Container>
            }
        </Box>
        </Box>
    )
}

export default Hero