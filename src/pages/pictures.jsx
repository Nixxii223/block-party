import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Container } from '@mui/material';
import './styles.css';

// 1. IMPORT ALL IMAGES
import CanJam from '../images/CanJam.JPEG';
import Canopy from '../images/Canopy.JPEG';
import Cooper from '../images/Cooper.jpeg'; 
import Food from '../images/Food.JPEG';
import Friends from '../images/Friends.JPEG';
import Frisbee from '../images/Frisbee.JPEG';
import Girls from '../images/Girls.JPEG';
import Party from '../images/Party.JPEG';
import JumpRope from '../images/JumpRope.JPEG';

// 2. CREATE AN ARRAY TO LOOP THROUGH
const itemData = [
    { img: CanJam, title: 'CanJam' },
    { img: Canopy, title: 'Canopy' },
    { img: Cooper, title: 'Cooper' },
    { img: Food, title: 'Food' },
    { img: Friends, title: 'Friends' },
    { img: Frisbee, title: 'Frisbee' },
    { img: Girls, title: 'Girls' },
    { img: Party, title: 'Party' },
    { img: JumpRope, title: 'JumpRope' },
];

export default function TitlebarImageList() {
    return (
        <Container className="portfolio-container">
            <h2 className="life-savers-regular">Pictures</h2>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 5 }}>
                {/* 3. DISPLAY THE IMAGE GALLERY (No Labels) */}
                <ImageList sx={{ width: '100%', maxWidth: 900, height: 'auto' }} cols={3} gap={12}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.title} sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}
