import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import moment from 'moment-with-locales-es6';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  TextareaAutosize,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Stack,
  Box,
  Button,
} from '@mui/material';

import styled from 'styled-components';

function Form({ meeting, onFormUpdate, validateForm }) {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState({
    title: '',
    location: '',
    activity: '',
    ageGroup: '',
    description: '',
    date: new Date(),
  });

  function validateForm() {
    const isValid = form.title && form.location && form.activity && form.date;

    setIsValid(isValid);
  }

  function handleFormChange(event) {
    const { name } = event.target;
    let value = event.target.value;

    if (value !== '' && name === 'title') {
      value = value.trimStart();
    }

    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (!meeting) {
      return;
    }

    onFormUpdate(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trimEnd() || '';
    const location = form.location || '';
    const activity = form.activity || '';
    const ageGroup = form.ageGroup || '';
    const description = form.description || '';
    const date = form.date || new Date();

    const newMeeting = {
      title,
      location,
      activity,
      ageGroup,
      description,
      date,
      id: nanoid(),
    };

    updateLocalStorage(newMeeting);

    toast.success('Dein Date ist erstellt worden...');

    setTimeout(() => router.push('/meetings'), 1000);
  }

  function updateLocalStorage(newMeeting) {
    const allMeetings = JSON.parse(localStorage.getItem('meetings')) || [];

    allMeetings.push(newMeeting);

    localStorage.setItem('meetings', JSON.stringify(allMeetings));
  }

  useEffect(() => {
    validateForm();
  }, [form]);

  useEffect(() => {
    setForm({ ...meeting });
  }, [meeting]);

  return (
    <form>
      <Stack direction="column" spacing={1}>
        <FormControl fullWidth>
          <TextField
            required
            label="Title"
            value={form.title || ''}
            name="title"
            onChange={handleFormChange}
            size="small"
          />
        </FormControl>
        <FormControl fullWidth>
          <Select
            value={form.location || ''}
            name="location"
            onChange={handleFormChange}
            labelId="location-select-label"
            id="location-select"
            displayEmpty
            required
            size="small"
          >
            <MenuItem disabled value="">
              Standort *
            </MenuItem>
            <MenuItem value="stadtpark">Stadtpark</MenuItem>
            <MenuItem value="elbe">Elbe</MenuItem>
            <MenuItem value="alster">Alster</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Select
            value={form.activity || ''}
            onChange={handleFormChange}
            name="activity"
            labelId="activity-select-label"
            id="activity-select"
            displayEmpty
            required
            size="small"
          >
            <MenuItem disabled value="">
              Aktivit??t *
            </MenuItem>
            <MenuItem value="gassigehen">Gassi gehen</MenuItem>
            <MenuItem value="sport">Sport</MenuItem>
            <MenuItem value="otherthings">Sonstiges</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <FormLabel id="radio-buttons-group-label">Altersgruppe</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-label"
            name="ageGroup"
            value={form.ageGroup || ''}
            onChange={handleFormChange}
          >
            <Stack direction="row" spacing={1}>
              <Box>
                <FormControlLabel
                  value="welpen"
                  control={<Radio />}
                  label="Welpen"
                />
                <FormControlLabel
                  value="junghunde"
                  control={<Radio />}
                  label="Junghunde"
                />
              </Box>
              <Box>
                <FormControlLabel
                  value="erwachsen"
                  control={<Radio />}
                  label="Erwachsen"
                />
                <FormControlLabel
                  value="senior"
                  control={<Radio />}
                  label="Senior"
                />
              </Box>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <StyledTextareaAutosize
            aria-label="empty textarea"
            placeholder="Beschreibung..."
            minRows={4}
            name="description"
            sx={{ borderRadius: '4px' }}
            style={{ resize: 'vertical' }}
            value={form.description || ''}
            onChange={handleFormChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="datetime-local"
            label="Datum und Uhrzeit *"
            type="datetime-local"
            name="date"
            value={form.date || ''}
            onChange={handleFormChange}
            size="small"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            InputProps={{
              inputProps: { min: moment().format('YYYY-MM-DDThh:00:00') },
            }}
          />
        </FormControl>
      </Stack>
      {!meeting && (
        <Box mt="24px" display="flex" justifyContent="center">
          <Button
            style={{ minWidth: '50%' }}
            variant="contained"
            endIcon={<Icon path={mdiSend} title="Send" size={1} />}
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Absenden
          </Button>
        </Box>
      )}
    </form>
  );
}

const StyledTextareaAutosize = styled(TextareaAutosize)`
  padding: 8px;
  margin-bottom: 5px;
`;

export default Form;
