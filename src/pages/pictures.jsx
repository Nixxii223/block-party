import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button } from '@mui/material';
import './styles.css';
import { Container } from '@mui/material';
import Bike from '../src/images/Bikepng.png';
import CanJam from '../src/images/CanJampng.png';
import Canopy from '../src/images/Canopypng.png';
import Chalk from '../src/images/Chalkpng.png';
import Chat from '../src/images/Chatpng.png';
import Cooper from '../src/images/Canopypng.png';
import Food from '../src/images/Foodpng.png';
import Friends from '../src/images/Friendspng.png';
import Frisbee from '../src/images/Frisbeepng.png';
import Girls from '../src/images/Girlspng.png';
import Party from '../src/images/Partypng.png';
import JumpRope from '../src/images/JumpRopepng.png';
import Wagon from '../src/images/Wagonpng.png';

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
