import { Button, Dialog } from '@fluentui/react-northstar'
import React, { useState } from 'react'
import UploadForm from './uploadform'
import { useHistory } from "react-router-dom";
// import { useState } from 'react';

const DialogExample = ({}) => {

  const [meetName, setMeetName] = useState('')
  const [meetType, setMeetType] = useState('')

  let history = useHistory();
  function handleClick() {
    history.push("/tab");
  }


  return (
    <Dialog
      cancelButton="Cancel"
      confirmButton={<Button content="Start" primary fluid onClick={handleClick} />}
      header="Transcript upload"
      content={<UploadForm name={setMeetName} type={setMeetType}/>}
      trigger={<Button content="Create summary" primary style={{width: '100%'}} />}
    />
  )
}

export default DialogExample