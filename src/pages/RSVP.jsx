import React, { useState } from 'react';
import { Box, TextField, Stack, Button, FormControlLabel, Checkbox, FormControl, Alert, FormLabel } from '@mui/material';
import emailjs from '@emailjs/browser'; // Updated to the modern EmailJS package

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coming, setComing] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [street, setStreet] = useState('');
  const [allergies, setAllergies] = useState(false);
  const [allergyDetails, setAllergyDetails] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Safely grab the values and trim accidental whitespace
    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeStreet = street.trim();
    const safeNumberOfPeople = numberOfPeople.toString().trim();
    const safeAllergyDetails = allergyDetails.trim();

    // 2. DEBUGGING: Check browser Console to see exactly what React sees
    console.log({
      stateName: safeName,
      stateEmail: safeEmail,
      stateStreet: safeStreet,
      isComing: coming,
      statePeople: safeNumberOfPeople,
      hasAllergies: allergies,
      stateAllergyDetails: safeAllergyDetails
    });

    // 3. Robust validation check
    const isNameValid = safeName !== '';
    const isEmailValid = safeEmail !== '';
    const isStreetValid = safeStreet !== '';
    const isPeopleValid = !coming || (coming && safeNumberOfPeople !== '');
    const isAllergiesValid = !allergies || (allergies && safeAllergyDetails !== '');

    if (!isNameValid || !isEmailValid || !isStreetValid || !isPeopleValid || !isAllergiesValid) {
      setAlertMessage('Please fill in all required fields.');
      setAlertSeverity('error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(safeEmail)) {
      setAlertMessage('Please enter a valid email address.');
      setAlertSeverity('error');
      return;
    }

    // 4. Send email
    emailjs.send('service_e549eua', 'template_wywzmue', {
      from_name: safeName,
      reply_to: safeEmail,
      coming: coming ? 'Yes' : 'No',
      number_of_people: safeNumberOfPeople,
      street: safeStreet,
      allergies: allergies ? 'Yes' : 'No',
      allergy_details: safeAllergyDetails,
      contribution: 'See SignUpGenius',
    }, 'U2cyjMYTvV_mi5gJv')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setAlertMessage('RSVP sent successfully!');
       setAlertSeverity('success');
       
       // Reset form
       setName('');
       setEmail('');
       setComing(false);
       setNumberOfPeople('');
       setStreet('');
       setAllergies(false);
       setAllergyDetails('');
    }, (err) => {
       console.log('FAILED...', err);
       setAlertMessage('Failed to send RSVP. Please try again later.');
       setAlertSeverity('error');
    });
  };

  return (
    <Box
      className="rsvp-form"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2 className="life-savers-regular">Block Party RSVP</h2>
      {alertMessage && (
        <Alert severity={alertSeverity} sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}
      <Stack spacing={2}>
        <TextField
          required
          id="outlined-name"
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          id="outlined-email"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={coming}
              onChange={e => setComing(e.target.checked)}
            />
          }
          label="Will you be attending?"
        />
        {coming && (
          <TextField
            required
            id="outlined-number-of-people"
            label="Number of people attending"
            value={numberOfPeople}
            onChange={e => setNumberOfPeople(e.target.value)}
            type="number"
          />
        )}
        <TextField
          required
          id="outlined-street"
          label="Street you live on"
          value={street}
          onChange={e => setStreet(e.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={allergies}
              onChange={e => setAllergies(e.target.checked)}
            />
          }
          label="Does anyone have allergies?"
        />
        {allergies && (
          <TextField
            required
            id="outlined-allergy-details"
            label="Please describe the allergies"
            value={allergyDetails}
            onChange={e => setAllergyDetails(e.target.value)}
            multiline
            rows={4}
          />
        )}
        <FormControl required component="fieldset" sx={{ m: 1.5 }}>
          <FormLabel component="legend">
            We kindly ask that every family contribute in some way if they plan to attend. How would you like to contribute? Please click on the signup link below on what you are able to help out with.
          </FormLabel>
        </FormControl>
        
        <Button
            href="https://www.signupgenius.com/go/10C054CAEA62AA6FBC61-64900667-chester#/"
            target="_blank"
            variant="contained"
            size="large"
            sx={{
                backgroundColor: '#3d95ce',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#357ebd',
                },
                mt: 2,
            }}
            className="poppins-regular"
        >
            SignUp for what you can bring Here!
        </Button>

        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 4 }}>
          Submit RSVP
        </Button>
        <h3 className="poppins-regular">
          Thanks again! Looking forward to seeing everyone!
        </h3>
      </Stack>
    </Box>
  );
};

export default RSVPForm;
