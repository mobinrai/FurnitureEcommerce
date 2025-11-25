import { Box, Container, Grid, Stack, styled} from '@mui/material'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router'
import type { ProductDetails, TitleAndSubTitle } from '../../types/MyTypes'
import MyProductDetails from './MyProductDetails'

const Section=styled('section')(()=>({
    paddingTop:100,
    paddingBottom:80,
    fontFamily:'"Playfair Display", serif'
}))

type MySectionProps={LinkTo:string, products:ProductDetails} & TitleAndSubTitle

const MySection = ({products, LinkTo, mainTitle, subTitle}:MySectionProps) => {
    return (
        <Section>
            {/* top section */}
            <Container>
                <Stack gap={4} direction={'column'} alignItems={'center'}>
                    <SectionTitle mainTitle={mainTitle}
                        subTitle={subTitle}
                    />
                    <Box sx={{overflowX:'auto', width:'100%', marginX:{'xs':'10px'}}}>
                        <Grid container spacing={4} sx={{flexWrap:'nowrap', width:'max-content'}}>
                            <MyProductDetails products={products}/> 
                        </Grid>
                    </Box>
                    <Link to={LinkTo} className="linkWithBefore">View More</Link>
                </Stack>
            </Container>
        </Section>
    )
}

export default MySection