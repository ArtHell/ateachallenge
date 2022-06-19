import { Button, Dialog } from '@fluentui/react-northstar'
import React, { useState, useContext } from 'react'
import UploadForm from './uploadform'
import { useHistory } from "react-router-dom";
import { uploadTranscript } from '../../services/transcriptService';
import { AppContext } from '../context';
// import { useState } from 'react';

const UploadTranscriptPopup = ({}) => {

  const [meetName, setMeetName] = useState('')
  const [meetLink, setMeetLink] = useState('')
  const [file, setFile] = useState();
  const [context, setContext] = useContext(AppContext);

  let history = useHistory();

  const submitForm = async () => {
    const formData = new FormData();
    formData.append(
      "transcript",
      file,
      file.name
    );
    const result = await uploadTranscript(formData);
    const data = result.data.map(x => ({...x, part: x.part.split('\r').join('')}))
    const participants = [...new Set(data.map(x => x.person))];
    setContext({...context, transcript: data, meetingName: meetName, meetingLink: meetLink, participants: participants});
    history.push("/config-transcript");
  };

  return (
    <Dialog
      cancelButton="Cancel"
      confirmButton={'Next'}
      header="Transcript"
      content={<UploadForm setName={setMeetName} setLink={setMeetLink} setFile={setFile} />}
      trigger={<Button content="Create summary" primary style={{ width: '100%' }} />}
      onConfirm={submitForm}
    />
  )
}

export default UploadTranscriptPopup