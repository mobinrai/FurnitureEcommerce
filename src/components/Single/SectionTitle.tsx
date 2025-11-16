import { Stack, Typography } from '@mui/material'
import type { TitleAndSubTitle } from '../../types/MyTypes'

const SectionTitle = ({mainTitle, subTitle=""}:TitleAndSubTitle) => {
    return (
        <Stack maxWidth={900} textAlign={'center'}  alignItems={'center'}>
            <Typography variant="h3" textTransform={'uppercase'} fontWeight={700} fontSize={'40px'} marginBottom={2}>
                {mainTitle}
            </Typography>
            {
                subTitle && <Typography variant="body2" color="#7F85A8" fontSize={16}>
                {subTitle}
            </Typography>
            }
            
        </Stack>
    )
}

export default SectionTitle