import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import MyForm from './MyForm';
import BasicCard from './BasicCard';



export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* katorganisi les components 3andek sous form de columns */}
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <BasicCard />
                </Grid>
                <Grid xs={4}>
                    <MyForm />
                </Grid>
            </Grid>
        </Box>
    );
}