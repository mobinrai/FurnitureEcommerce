import { HomeOutlined } from '@mui/icons-material'
import { Breadcrumbs, Link, Typography } from '@mui/material'

type BreadcrumbProps = {
    items:{
        label:string;
        href?:string
    }[]
}
const MyBreadcrumb = ({items}:BreadcrumbProps) => {
    return (
        <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Link href="/" sx={{alignItems:'center', display:'flex'}}>
                <HomeOutlined fontSize='small'/>
            </Link>
            {items.map((item,index)=>{
                const lastItem = index === items.length-1
                return lastItem? 
                <Typography key={`${item.label}-${index}`} variant='caption' sx={{color:'#1976d2', textTransform:'capitalize'}}>{item.label}</Typography>
                :
                <Link key={`${item.label}-${index}`} href={item.href}>
                    <Typography variant='caption'>{item.label}</Typography>
                </Link>
            })}
        </Breadcrumbs>
    )
}

export default MyBreadcrumb