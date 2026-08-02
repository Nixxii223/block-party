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
           
                <h2 className="life-savers-regular">Block Party 2025!</h2>
                <img src={Group} alt="Group" style={{ maxWidth: '200px', width: '100%' }} />
                
                <p className="poppins-regular">Food!.</p>
                <img master={Canopy} alt="Canopy" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Food} alt="Food" style={{ maxWidth: '200px', width: '100%' }} />
                
                <p className="poppins-regular">Adult Fun!.</p>
                <img master={Chat} alt="Chat" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Girls} alt="Girls" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Friends} alt="Friends" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={CanJam} alt="CanJam" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Frisbee} alt="Frisbee" style={{ maxWidth: '200px', width: '100%' }} />

                <p className="poppins-regular">Kid Fun!.</p>
                <img master={Cooper} alt="Cooper" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={JumpRope} alt="JumpRope" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Wagon} alt="Wagon" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Chalk} alt="Chalk" style={{ maxWidth: '200px', width: '100%' }} />
                <img master={Bike} alt="Bike" style={{ maxWidth: '200px', width: '100%' }} />
                </Box>
        </Container>
    );
}
