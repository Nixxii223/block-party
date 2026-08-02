import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button } from '@mui/material';
import './styles.css';
import { Container } from '@mui/material';

export default function TitlebarImageList() {
    return (
        <Container className="portfolio-container">
                <h2 className="life-savers-regular">Pictures</h2>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
           
                <h2 className="life-savers-regular">Coming Soon!</h2>
                </Box>
        </Container>
    );
}
