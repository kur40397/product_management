import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard() {
    return (
        <Card sx={{ maxWidth: 440, position: 'relative', left: 110, top: 100, boxShadow: 'none' }}>
            {/* sx  wa7d special prop li kat5ali style */}
            <CardContent>
                {/* gutterBottom katajouti gutterBottom f bottom margin */}
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                    Product Management
                </Typography>
                {/* chi text briti tjiri style dialo diro f Typography */}
                <Typography variant="h6" component="div">
                    Product management software helps you navigate day-to-day task management while keeping
                    an eye on the big picture.
                </Typography>
            </CardContent>

        </Card>
    );
}