import { styled } from '@mui/material'
import { type ReactElement } from 'react'

const MyShadowBox = styled('div')(({theme})=>({
    padding:'10px', cursor:'pointer', 
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[8]
    },
    transition: 'box-shadow 0.3s ease-in-out',
    textAlign:'center'
}))

const ShadowBox = ({children}:{children:ReactElement}) => {
    return (
        <MyShadowBox>
            {children}
        </MyShadowBox>
    )
}

export default ShadowBox