import { Badge, Box, styled, TextField, Typography } from '@mui/material'
import MyMainNavLink from '../MyMainNavLink'
import { Search, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router'
import MenuIcon from '@mui/icons-material/menu'
import { useState } from 'react'

const MainDiv = styled('div')(({theme})=>({
    backgroundColor:'#F2E1D9',
    display:'flex',
    gap:4,
    padding:'5px 50px',
    justifyContent:'space-between',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        padding:'40px 20px'
    },
    
}))

const MyNavLinkWrapper=styled('div')(({theme})=>({
    display:'flex',
    flex:3,
    gap:16,
    [theme.breakpoints.down('md')]:{
        display:'none',
        gap:1
    },
    
}))

const mobilePadding='19px 19px'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <MainDiv>
            <Box flex={1}>
                Logo
            </Box>
            <MyNavLinkWrapper>
                <MyMainNavLink linkName='Home' linkTo='/' paddingValue='39px 19px'/>
                <MyMainNavLink linkName='Product' linkTo='/product'  paddingValue='39px 19px'/>
                <MyMainNavLink linkName='About' linkTo='/about-us'  paddingValue='39px 19px'/>
                <MyMainNavLink linkName='Blog' linkTo='/blogs'  paddingValue='39px 19px'/>
                <MyMainNavLink linkName='Contact' linkTo='/contact'  paddingValue='39px 19px'/>
            </MyNavLinkWrapper>
            
            <Box component={'div'} sx={{display:{
                'sm':'none',
                'xs':'block'
            }}}>
                <MenuIcon/>
            </Box>
            <Box sx={{display:{
                'md':'flex',
                'sm':'flex',
                'xs':'none'
            }}} alignItems={'center'} gap={3}>
                <Box sx={{display:'flex', alignItems:'center', position:'relative'}}>
                    <TextField id='search' variant='standard' placeholder='search product'/>
                    <Box component={'button'} onClick={()=> alert('hello')} sx={{marginLeft:'-20px', position:'absolute', right:'-10px',border:'none', bgcolor:'transparent', cursor:'pointer'}}><Search/></Box>
                </Box>
                <Link to={'/my-account'} className='hover-color'><Typography fontSize={'14px'} fontWeight={600} sx={{':hover':{color:'#FD8F5F'}}}>My Account</Typography></Link>
                <Badge badgeContent={4} color='warning' sx={{cursor:'pointer'}}  anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}>
                    <ShoppingCart/>
                </Badge>
            </Box>
            <Box component={'div'} sx={{display:{
                'md':'none',
                'sm':'flex',
                'xs':'none'
            }, bgcolor:'#4c4c4c', color:'white',transition:'all',
            zIndex:1000,
            transitionTimingFunction:'ease-in-out', transitionDuration:'500ms', padding:'5px', flexDirection:'column', width:'90%', alignItems:'flex-end', position:'absolute', top:'90px', right:'10px'}} onClick={()=> setIsOpen(!isOpen)}>
                <Typography variant='h6' sx={{display:'flex', alignItems:'center',backgroundColor:'black', width:'100px', gap:1, color:'white', marginRight:'10px', padding:'2px 10px'}}>Menu <MenuIcon/></Typography>
                {
                    isOpen && 
                    (
                        <Box sx={{marginTop:'10px', display:'flex', flexDirection:'column', width:'100%'}}>
                        <MyMainNavLink linkName='Home' linkTo='/'  paddingValue={mobilePadding}/>
                        <MyMainNavLink linkName='Product' linkTo='/product'  paddingValue={mobilePadding}/>
                        <MyMainNavLink linkName='About' linkTo='/about'  paddingValue={mobilePadding}/>
                        <MyMainNavLink linkName='Blog' linkTo='/blog'  paddingValue={mobilePadding}/>
                        <MyMainNavLink linkName='Contact' linkTo='/contact'  paddingValue={mobilePadding}/>
                        </Box>
                        
                    )
                }
            </Box>
        </MainDiv>    
    )
}

export default Header