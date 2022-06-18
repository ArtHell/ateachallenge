import React from 'react';
import { Form, FormInput, RadioGroup } from '@fluentui/react-northstar'

const UploadForm = ({ name, type }) => {


    return (
        <Form >
            <FormInput
                styles={{ width: '500px' }}
                placeholder='Link to the meeting'
                name="meetingname"
                id="meeting-name"
                required
                showSuccessIndicator={false}
                onChange={(event) => name(event.target.value)}
            />
            <RadioGroup
                onCheckedValueChange={(e, data) => type(data.label)}
                vertical
                defaultCheckedValue="1"
                items={[
                    {
                        key: '1',
                        label: 'Standard meeting',
                        value: '1',
                    },
                    {
                        key: '2',
                        label: 'Standup',
                        value: '2',
                    },
                    {
                        key: '3',
                        label: 'Retro',
                        value: '3',
                    }
                ]}
            />
            <input type="file" />
        </Form>
    )

};

export default UploadForm;