import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Bike from '../Bike.jpeg';
import CanJam from '../CanJam.JPEG';
import Canopy from '../Canopy.JPEG';
import Chalk from '../Chalk.JPEG';
import Chat from '../Chat.JPEG';
import Cooper from '../Canopy.jpeg';
import Food from '../Food.JPEG';
import Friends from '../Friends.JPEG';
import Frisbee from '../Frisbee.JPEG';
import Girls from '../Girls.JPEG';
import Group from '../Group.JPEG';
import JumpRope from '../JumpRope.JPEG';
import Wagon from '../Wagon.jpeg';
import Video from '../Video.MOV';

import './styles.css';
import { Container } from '@mui/material';


export default function TitlebarImageList() {
    return (
        <Container className="portfolio-container">
                <h2 className="life-savers-regular">Pictures</h2>
            
                <h2 className="life-savers-regular">Block Party 2025!</h2>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <img src={Group} alt="Group" style={{ maxWidth: '200px', width: '100%' }} />
                
                <p className="poppins-regular">Food!.</p>
                <img src={Canopy} alt="Canopy" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Food} alt="Food" style={{ maxWidth: '200px', width: '100%' }} />
                
                <p className="poppins-regular">Adult Fun!.</p>
                <img src={Chat} alt="Chat" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Girls} alt="Girls" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Friends} alt="Friends" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={CanJam} alt="CanJam" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Frisbee} alt="Frisbee" style={{ maxWidth: '200px', width: '100%' }} />

                <p className="poppins-regular">Kid Fun!.</p>
                <img src={Cooper} alt="Cooper" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={JumpRope} alt="JumpRope" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Wagon} alt="Wagon" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Chalk} alt="Chalk" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Bike} alt="Bike" style={{ maxWidth: '200px', width: '100%' }} />
                <img src={Video} alt="Video" style={{ maxWidth: '200px', width: '100%' }} />
 
        </Container>
    );
}
