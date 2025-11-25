import { type ReactElement } from 'react'
import type { ProductDetails } from '../../types/MyTypes';
import { TabPanel } from '@mui/lab';
import { Grid } from '@mui/material';
import MyProductDetails from '../Single/MyProductDetails';

type ResponsiveTabPanelProps = {
   value:string;
   children?: ReactElement;
   products:ProductDetails
}

const ResponsiveTabPanel = ({value, children, products}:ResponsiveTabPanelProps) => {
    return (
        <TabPanel value={value} sx={{ width: '100%', overflowX: 'auto',px: { xs: 0, sm: 1, md: 2, lg: 3 },my:2 }}>
            <Grid container spacing={4} sx={{flexWrap:{xs:'wrap',lg:'nowrap'},  width: {xs: '100%', lg:'max-content'},padding:{xs:1,lg:2}}}>
                {children || <MyProductDetails products={products}/>}
            </Grid>
        </TabPanel>
    )
}

export default ResponsiveTabPanel