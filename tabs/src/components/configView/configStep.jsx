import React from 'react';
import TranscriptList from './transcriptList';
import { Checkbox, Dropdown, Form, FormInput, FormButton, Input } from '@fluentui/react-northstar'
import './configView.css'
import { useState } from 'react';

const ConfigStep = () => {

    const inputItems = [
        'Topic 1',
        'Topic 2',
        'Topic 3'
    ]

    const [topics, setTopics] = useState(inputItems)
    
    function updateTopic(event) {
        console.log(event.target.value);
    }

    return (
        <div className='config-view'>
            <div style={{ fontSize: '24px', fontWeight: 'semibold' }}>Create sections</div>
            <Dropdown
                style={{ padding: '16px 0' }}
                fluid
                items={topics}
                placeholder="Select topic to edit"
                checkable
                getA11ySelectionMessage={{
                    onAdd: item => `${item} has been selected.`,
                }}
            />
            <Input fluid placeholder="Provide new topic name & click enter..."
                onKeyPress={event => updateTopic(event)} />
            { <Form
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: '0'
                }}
            >
                <FormInput
                    style={{ margin: '14px 0' }}
                    name="newtopic"
                    id="new-topic"
                    placeholder='new topic name'
                    showSuccessIndicator={false}
                    onKeyPress={(event) => setTopics([...topics, event.target.value])}
                />
                <FormButton content="Add" primary />
            </Form> }
            <Checkbox label="Select all records" labelPosition="end" toggle style={{ paddingTop: '16px', borderTop: '2px solid #0078D7' }} />
            <TranscriptList />
        </div>
    );
};

export default ConfigStep;