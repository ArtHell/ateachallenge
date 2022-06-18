import { Button, Dialog } from '@fluentui/react-northstar'
import React, { useState } from 'react'
import UploadForm from './uploadform'
import { useHistory } from "react-router-dom";
// import { useState } from 'react';

const DialogExample = ({ data, setData, actions }) => {

  const [meetName, setMeetName] = useState('')
  const [meetType, setMeetType] = useState('')

  let history = useHistory();
  function handleClick() {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    const dateString = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

    const newMeeting = {
      key: data.length + 1,
      items: [
        {
          content: meetName,
          key: `${data.length + 1}-1`,
          id: 'name-3',
        },
        {
          content: meetType,
          key: `${data.length + 1}-2`,
        },
        {
          content: dateString,
          key: `${data.length + 1}-3`,
        },
        {
          key: `${data.length + 1}-4`,
          ...actions,
        }
      ],
      'aria-labelledby': `name-${data.length + 1}`,
    }
    console.log(newMeeting)
    setData([...data, newMeeting])
    history.push("/tab");
  }


  return (
    <Dialog
      cancelButton="Cancel"
      confirmButton={<Button content="Start" primary fluid onClick={handleClick} />}
      header="Transcript upload"
      content={<UploadForm name={setMeetName} type={setMeetType}/>}
      trigger={<Button content="Create summary" primary />}
    />
  )
}

export default DialogExample