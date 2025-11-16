import { Button } from '@mui/material'

const ShadowButton = ({displayText, backgroundColor='#FD8F5F'}:{displayText:string,backgroundColor?:string}) => {
    return (
        <Button sx={{marginY:2, paddingY:1, paddingX:2, backgroundColor:backgroundColor, color:'white', boxShadow: 2,
    '&:hover': {boxShadow: 8,transform: 'translateY(2px)',transition: 'all 0.3s ease-in-out'}}}>{displayText}</Button>
    )
}

export default ShadowButton