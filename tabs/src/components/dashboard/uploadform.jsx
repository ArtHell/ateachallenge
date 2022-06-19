import React, { useState } from 'react';
import { Form, FormField, Button, Label, FormLabel, FormInput } from '@fluentui/react-northstar'

const UploadForm = ({ setName, setLink, setFile }) => {
    const [fileName, setFileName] = useState('')

    const onFileChange = (event) => {
      const file = event.target.files[0];
      setFile(file);
      setFileName(file.name);
    }

    return (
        <Form >
            <FormLabel>{'Meeting name'}</FormLabel>
            <FormInput
                fluid
                required
                showSuccessIndicator={false}
                onChange={(event) => setName(event.target.value)}
                style={{ marginTop: '-16px'}}
            />
            <FormLabel>{'Meeting link'}</FormLabel>
            <FormInput
                fluid
                showSuccessIndicator={false}
                onChange={(event) => setLink(event.target.value)}
                style={{ marginTop: '-16px'}}
            />
            {fileName ? <FormLabel>{fileName}</FormLabel> : <FormLabel>{'Choose transcript file'}</FormLabel>} 
            <Button primary style={{ width: '100%', marginBottom: '80px', marginTop: '-20px'}} onClick={() => document.getElementById('file-input').click()}>{"Upload transcript"}<input id='file-input' type="file" hidden onChange={onFileChange} /></Button>
            
        </Form>
    )

};

export default UploadForm;