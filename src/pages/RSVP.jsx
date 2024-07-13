import React, { useState } from 'react';
import { Box, TextField, Stack, Button, FormControlLabel, Checkbox, FormControl, Alert, FormLabel, FormGroup } from '@mui/material';
import emailjs from 'emailjs-com';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coming, setComing] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [street, setStreet] = useState('');
  const [allergies, setAllergies] = useState(false);
  const [allergyDetails, setAllergyDetails] = useState('');
  const [contributions, setContributions] = useState({
    donateMoney: false,
    bringFood: false,
    bringItems: false
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleCheckboxChange = (event) => {
    setContributions({
      ...contributions,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { donateMoney, bringFood, bringItems } = contributions;
    if (!name || !email || !street || (coming && !numberOfPeople) || (allergies && !allergyDetails) || (!donateMoney && !bringFood && !bringItems)) {
      setAlertMessage('Please fill in all required fields.');
      setAlertSeverity('error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setAlertMessage('Please enter a valid email address.');
      setAlertSeverity('error');
      return;
    }

    const contributionList = [
      donateMoney ? 'Donate money ($5 per person)' : '',
      bringFood ? 'Bring food' : '',
      bringItems ? 'Bring items needed for the party' : ''
    ].filter(Boolean).join(', ');

    emailjs.send('service_e549eua', 'template_wywzmue', {
      from_name: name,
      reply_to: email,
      coming: coming ? 'Yes' : 'No',
      number_of_people: numberOfPeople,
      street: street,
      allergies: allergies ? 'Yes' : 'No',
      allergy_details: allergyDetails,
      contribution: contributionList,
    }, 'U2cyjMYTvV_mi5gJv')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setAlertMessage('RSVP sent successfully!');
       setAlertSeverity('success');
       setName('');
       setEmail('');
       setComing(false);
       setNumberOfPeople('');
       setStreet('');
       setAllergies(false);
       setAllergyDetails('');
       setContributions({
         donateMoney: false,
         bringFood: false,
         bringItems: false
       });
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
            We ask that every family contribute in some way if they plan to attend. How would you like to contribute?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={contributions.donateMoney} onChange={handleCheckboxChange} name="donateMoney" />}
              label="Donate money (suggested contribution is $5 per person)"
            />
            <FormControlLabel
              control={<Checkbox checked={contributions.bringFood} onChange={handleCheckboxChange} name="bringFood" />}
              label="Bring food"
            />
            <FormControlLabel
              control={<Checkbox checked={contributions.bringItems} onChange={handleCheckboxChange} name="bringItems" />}
              label="Bring items needed for the party"
            />
          </FormGroup>
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit RSVP
        </Button>
      </Stack>
    </Box>
  );
};

export default RSVPForm;
