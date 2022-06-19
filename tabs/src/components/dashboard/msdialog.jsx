import { Button, Dialog } from '@fluentui/react-northstar'
import React, { useState, useContext } from 'react'
import UploadForm from './uploadform'
import { useHistory } from "react-router-dom";
import { uploadTranscript } from '../../services/transcriptService';
import { AppContext } from '../context';
// import { useState } from 'react';

const DialogExample = ({ }) => {

  const [meetName, setMeetName] = useState('')
  const [meetType, setMeetType] = useState('')
  const [file, setFile] = useState();
  const [context, setContext] = useContext(AppContext);

  let history = useHistory();
  function handleClick() {
    history.push("/tab");
  }

  const submitForm = async () => {
    const formData = new FormData();
    formData.append(
      "transcript",
      file,
      file.name
    );
    const result = await uploadTranscript(formData);
    setContext({...context, transcript: result.data});
    history.push("/configuration");
  }


  return (
    <Dialog
      cancelButton="Cancel"
      confirmButton={<Button content="Start" primary fluid onClick={submitForm} />}
      header="Transcript"
      content={<UploadForm setName={setMeetName} setType={setMeetType} setFile={setFile} />}
      trigger={<Button content="Create summary" primary style={{ width: '100%' }} />}
    />
  )
}

export default DialogExample