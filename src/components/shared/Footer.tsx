import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link} from "react-router"

const Footer = () => {
    return (
        <footer>
            <Box sx={{
                backgroundColor:'#1D2547',
                position:'relative',
                paddingX:{'xs':'50px', 'sm':'100px'},
                paddingTop:'105px',
                paddingBottom:'80px',
                fontFamily:'"Playfair Display", serif',
                color:'white',
                '::before':{
                    content:'""',
                    position:{'md':'unset','lg':'absolute'},
                    width:'50px',
                    backgroundColor:"#F2E1D9",
                    left:0,
                    top:0,
                    bottom:0
                }
            }}>
                <Container>
                    <Grid container rowSpacing={8} columnSpacing={8}>
                        <Grid size={{'xs':12,'sm':6,'md':3}}>
                            <Typography variant="h6" marginBottom={3}>Logo</Typography>
                            <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo totam debitis nam ex, blanditiis pariatur!</Typography>
                        </Grid>
                        <Grid size={{'xs':12,'sm':6,'md':3}}>
                            <Typography variant="h6" marginBottom={3} textTransform={'uppercase'} letterSpacing={2}>Quick links</Typography>
                            <Stack gap={2}>
                                <Link to={'/home'}>Home</Link>
                                <Link to={'/home'} className="">Blog</Link>
                                <Link to={'/home'}>About Us</Link>
                                <Link to={'/home'}>Contact Us</Link>
                            </Stack>
                        </Grid>
                        <Grid size={{'xs':12,'sm':6,'md':3}}>
                            <Typography variant="h6" marginBottom={3} textTransform={'uppercase'} letterSpacing={2}>Legal</Typography>
                            <Stack gap={2}>
                                <Link to={'/home'}>Terms and conditions</Link>
                                <Link to={'/home'}>Privacy policy</Link>
                                <Link to={'/home'}>Return policy</Link>
                            </Stack>
                        </Grid>
                        <Grid size={{'xs':12,'sm':6,'md':3}}>
                            <Typography variant="h6" marginBottom={3} textTransform={'uppercase'} letterSpacing={2}>Contact</Typography>
                            <Stack gap={2}>
                                <Link to={'/home'}>Address</Link>
                                <Link to={'/home'}>Email</Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer