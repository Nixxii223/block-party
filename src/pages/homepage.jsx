import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Box, TextField, Stack, Button, FormControlLabel, Checkbox, FormControl, Alert, FormLabel, FormGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <h2 className="life-savers-regular">Block Party Information</h2>
            <h3 className="poppins-regular">Join us for a block party to say goodbye to summer and get to know your neighbors!</h3>
            <div className="poppins-regular">
                <h3>
                    Who is us? We are a group of Chester Ave and Winfield St neighbors who got together to plan a fun event for our neighborhood!
                    The Block Party Committee consists of:
                </h3>
                <ListGroup>
                    <ListGroup.Item>Shannon Averill</ListGroup.Item>
                    <ListGroup.Item>Nicki Barrett</ListGroup.Item>
                    <ListGroup.Item>Jacqui Gover</ListGroup.Item>
                    <ListGroup.Item>Elizabeth Kayajian</ListGroup.Item>
                    <ListGroup.Item>Laura Frawley</ListGroup.Item>
                    <ListGroup.Item>Anthony Rodriguez</ListGroup.Item>
                    <ListGroup.Item>Stepheny Roman</ListGroup.Item>
                    <ListGroup.Item>Ryan Ross</ListGroup.Item>
                    <ListGroup.Item>Kelly Scanlon</ListGroup.Item>
                </ListGroup>
            </div>
            <h3 className="poppins-regular">Date: September 7, 2024</h3>
            <h3 className="poppins-regular">Time: 3:00 PM to 8:00 PM</h3>
            <h3 className="poppins-regular">Activities: This information coming soon!</h3>
            <h3 className="poppins-regular">Location: Chester Avenue will be blocked off from Vincent down to Ridgeway so the whole street will be available for the fun!</h3>
            <h3 className="poppins-regular">Food: No formal meal is planned but we are asking for families to help contribute in some way and there is an option on the RSVP form to bring food to share!</h3>
            <h3 className="poppins-regular">***Please RSVP using the link below by August 2nd!***</h3>
            <Button
                component={Link}
                to="/rsvp"
                variant="contained"
                size="large"
                sx={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                    },
                    mt: 2,
                    mb: 4, // Large margin bottom
                }}
                className="poppins-regular"
            >
                RSVP Here
            </Button>
        </div>
    );
}

