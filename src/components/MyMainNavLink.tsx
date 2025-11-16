import { Typography } from '@mui/material'
import { NavLink } from 'react-router'

type MyMainNavLinkProps={
    linkTo:string;
    linkName:string;
    paddingValue:string
}
const MyMainNavLink = ({linkTo, linkName, paddingValue}:MyMainNavLinkProps) => {
    return (
        <NavLink to={linkTo}>
            <Typography variant='h6' sx={{':hover':{color: '#FD8F5F'}, padding:paddingValue, fontSize:'14px', fontWeight:'600'}}>
                {linkName}
            </Typography>
        </NavLink>
    )
}

export default MyMainNavLink