import { Container, Grid, Stack, styled} from '@mui/material'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router'
import type { ProductDetailsProps, TitleAndSubTitle } from '../../types/MyTypes'
import ProductDetails from './ProductDetails'

const Section=styled('section')(()=>({
    paddingTop:100,
    paddingBottom:80,
    fontFamily:'"Playfair Display", serif'
}))

type MySectionProps={LinkTo:string} & TitleAndSubTitle & ProductDetailsProps

const MySection = ({products, LinkTo, mainTitle, subTitle}:MySectionProps) => {
    return (
        <Section>
            {/* top section */}
            <Container>
                <Stack gap={4} direction={'column'} alignItems={'center'}>
                    <SectionTitle mainTitle={mainTitle}
                        subTitle={subTitle}
                    />
                    <Grid container spacing={4} marginX={{'xs':'10px'}}>
                        <ProductDetails products={products}/> 
                    </Grid>
                    <Link to={LinkTo} className="linkWithBefore">View More</Link>
                </Stack>
            </Container>
        </Section>
    )
}

export default MySection