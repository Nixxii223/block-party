import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import './styles.css';
import { Container } from '@mui/material';


export default function TitlebarImageList() {
    return (
        <Container className="portfolio-container">
                <h2 className="life-savers-regular">Pictures</h2>
                <p className="poppins-regular">Coming soon! Pictures of the event will be posted here.</p>
        </Container>
    );
}

