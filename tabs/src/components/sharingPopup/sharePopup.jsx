import React from 'react'
import './sharing.css'

import { Button, Dialog } from '@fluentui/react-northstar'
import { CloseIcon } from '@fluentui/react-icons-northstar'
import { useState } from 'react'
import SharingForm from './sharingForm'
import SharingHeader from './sharingHeader'

export const SharePopup = ({triggerButton}) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      open={open}
      onOpen={() => setOpen(true)}
      onCancel={() => setOpen(false)}
      content={<SharingForm />}
      header={<SharingHeader/>}
      headerAction={{
        icon: <CloseIcon />,
        title: 'Close',
        onClick: () => setOpen(false),
      }}
      trigger={triggerButton}
    />
  )
}

export default SharePopup