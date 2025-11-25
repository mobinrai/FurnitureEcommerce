import { ThumbDownAltOutlined, ThumbUpAltOutlined, Verified } from '@mui/icons-material'
import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'
import type { ReviewDetails } from '../../types/MyTypes'


const ProductReviews = ({reviews=[]}: {reviews:ReviewDetails}) => {
    return (
        <Box sx={{paddingX:2, paddingY:5}}>
            {
                reviews.length == 0 ?
                <Typography variant='caption'>No reviews added.</Typography>
                :
                reviews.map((review)=>(
                    <Stack key={`${review.id}`} direction={'row'} gap={4} sx={{borderBottom:'1px solid #c9c8c8', marginBottom:2,paddingBottom:2}}>
                        <Box width={240}>
                            <Stack alignItems={'center'}>
                                <Avatar src={review.image} alt={review.userName}/>
                                <Typography variant="h6" fontSize={16}>
                                    {review.userName}
                                </Typography>
                                <Typography variant="caption" sx={{color:'gray'}}>
                                    {review.date}
                                </Typography>
                            </Stack>
                        </Box>
                        <Box width={660}>
                            <Stack gap={2}>
                                <Rating defaultValue={review.rating} precision={0.5} readOnly/>
                                <Stack alignItems={'center'} direction={'row'} gap={1}>
                                    <Verified sx={{fontSize:16, color:'green'}}/>
                                    <Typography variant="caption" color="success">Verified purchase</Typography>
                                </Stack>
                                <Typography variant="body2">
                                    {review.text}
                                </Typography>
                                <Stack direction={'row'} gap={2} sx={{}}>
                                    <Stack direction={'row'} gap={1} alignItems={'center'}
                                    sx={{':hover':{
                                        '& .MuiIcon-colorPrimary':{
                                            color:'red'
                                        }
                                    }}}>
                                        <Typography variant='caption'>{Math.floor(Math.random()*123)}</Typography>
                                        <ThumbUpAltOutlined fontSize='small'/>
                                    </Stack>
                                    <Stack direction={'row'} gap={1}>
                                        <Typography variant='caption'>{Math.floor(Math.random()*10)}</Typography>
                                        <ThumbDownAltOutlined fontSize='small'/>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    )
}

export default ProductReviews