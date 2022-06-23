import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment-with-locales-es6';
import Image from 'next/image';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Icon } from '@mdi/react';
import {
  mdiCalendar,
  mdiMapMarker,
  mdiDogService,
  mdiAccountDetails,
  mdiDog,
  mdiPencil,
  mdiDeleteForever,
  mdiDotsVertical,
} from '@mdi/js';

import { getLocationImageUrl } from '../utils/getLocationImageUrl';
import { capitalFirstLetter } from '../utils/capitalize';

import Form from './Form';

function MeetingDetails({ meeting }) {
  const router = useRouter();

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [pendingMeeting, setPendingMeeting] = useState({ ...meeting });
  const [currentMeeting, setCurrentMeeting] = useState({ ...meeting });
  const [imageUrl, setImageUrl] = useState('');
  const [isValid, setIsValid] = useState(false);

  function validateForm() {
    const isValid =
      pendingMeeting.title &&
      pendingMeeting.location &&
      pendingMeeting.activity &&
      pendingMeeting.date;

    setIsValid(isValid);
  }

  function saveMeetingUpdate() {
    const allMeetings = JSON.parse(localStorage.getItem('meetings')) || [];

    if (allMeetings.length === 0) {
      return;
    }

    const meetingIndex = allMeetings.findIndex(
      foundMeeting => foundMeeting.id === pendingMeeting.id
    );

    if (meetingIndex < 0) {
      return;
    }

    allMeetings.splice(meetingIndex, 1, pendingMeeting);

    localStorage.setItem('meetings', JSON.stringify(allMeetings));

    setCurrentMeeting({ ...allMeetings[meetingIndex] });

    const url = getLocationImageUrl(allMeetings[meetingIndex].location);

    setImageUrl(url);

    setOpenEdit(false);
  }

  function saveMeetingDelete() {
    const allMeetings = JSON.parse(localStorage.getItem('meetings')) || [];

    if (allMeetings.length === 0) {
      return;
    }

    const meetingIndex = allMeetings.findIndex(
      foundMeeting => foundMeeting.id === pendingMeeting.id
    );

    if (meetingIndex < 0) {
      return;
    }

    allMeetings.splice(meetingIndex, 1);

    localStorage.setItem('meetings', JSON.stringify(allMeetings));
  }

  function updateMeeting(name, value) {
    setPendingMeeting(prevMeeting => ({
      ...prevMeeting,
      [name]: value,
    }));
  }

  function handleDeleteMeeting() {
    saveMeetingDelete();

    toast.error('Dein Date wurde gelöscht!');

    router.push('/meetings');
  }

  useEffect(() => {
    validateForm();
  }, [pendingMeeting]);

  useEffect(() => {
    if (!meeting) {
      return;
    }

    setPendingMeeting(meeting);
    setCurrentMeeting(meeting);

    const url = getLocationImageUrl(meeting.location);

    setImageUrl(url);
  }, [meeting]);

  return (
    currentMeeting && (
      <>
        <CardContent key={currentMeeting.id}>
          {imageUrl && (
            <CardImage>
              <Image
                src={imageUrl}
                width={16}
                height={10}
                layout="responsive"
              />
              <ImageLocation>
                <IconWrapper>
                  <Icon path={mdiMapMarker} size={1} />
                </IconWrapper>
                <p>{capitalFirstLetter(currentMeeting.location)}</p>
              </ImageLocation>
            </CardImage>
          )}

          <CardTextWrapper>
            <CardTitle>{currentMeeting.title}</CardTitle>
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
              <SpeedDial
                ariaLabel="Meetings Detail SpeedDial"
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  right: 0,
                }}
                FabProps={{ size: 'small' }}
                icon={<Icon path={mdiDotsVertical} size={1} />}
                direction="up"
              >
                <SpeedDialAction
                  key="SpeedDialAction--edit"
                  icon={<Icon path={mdiPencil} size={1} />}
                  tooltipTitle="Bearbeiten"
                  onClick={() => setOpenEdit(true)}
                />
                <SpeedDialAction
                  key="SpeedDialAction--delete"
                  icon={<Icon path={mdiDeleteForever} size={1} />}
                  tooltipTitle="Löschen"
                  onClick={() => setOpenDelete(true)}
                />
              </SpeedDial>
            </Box>
            <CardElement>
              <IconWrapper>
                <Icon path={mdiDogService} size={1} />
              </IconWrapper>
              <p>{capitalFirstLetter(currentMeeting.activity)}</p>
            </CardElement>
            <CardElement>
              <IconWrapper>
                <Icon path={mdiDog} size={1} />
              </IconWrapper>
              <p>{capitalFirstLetter(currentMeeting.ageGroup)}</p>
            </CardElement>
            <CardElement>
              <IconWrapper>
                <Icon path={mdiAccountDetails} size={1} />
              </IconWrapper>
              <p>{currentMeeting.description}</p>
            </CardElement>
            <CardElement>
              <IconWrapper>
                <Icon path={mdiCalendar} size={1} />
              </IconWrapper>
              <p>{moment(currentMeeting.date).locale('de').format('LLL')}</p>
            </CardElement>
            <CardElement>
              <IconWrapper>
                <Icon path={mdiMapMarker} size={1} />
              </IconWrapper>
              <p>{capitalFirstLetter(currentMeeting.location)}</p>
            </CardElement>
          </CardTextWrapper>
        </CardContent>
        <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
          <DialogTitle>Bearbeite dein Meeting</DialogTitle>
          <DialogContent>
            <FormWrapper>
              <Form meeting={currentMeeting} onFormUpdate={updateMeeting} />
            </FormWrapper>
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setOpenEdit(false)}
            >
              Abbrechen
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={saveMeetingUpdate}
              disabled={!isValid}
            >
              Speichern
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
          <DialogTitle>Meeting wirklich Löschen?</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDelete(false)}>Abbrechen</Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleDeleteMeeting}
            >
              Löschen
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}

const CardContent = styled.div`
  border: 1px solid black;
  border-radius: 4px;
`;

const CardImage = styled.div`
  position: relative;
`;

const ImageLocation = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 3px 0;
  display: flex;
  left: 0;
  padding: 1px 5px 1px 0;
  position: absolute;
  top: 0;
`;

const IconWrapper = styled.div``;

const CardTextWrapper = styled.div`
  padding: 5px;
`;

const CardTitle = styled.h3`
  padding-bottom: 6px;
`;

const CardElement = styled.div`
  align-items: center;
  display: flex;

  p {
    margin-left: 2px;
  }
`;

const FormWrapper = styled.div`
  padding-top: 20px;
`;

export default MeetingDetails;
