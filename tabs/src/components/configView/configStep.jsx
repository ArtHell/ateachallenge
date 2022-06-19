import React, { useContext, useEffect } from 'react';
import TranscriptList from './transcriptList';
import { Checkbox, Dropdown, Form, FormInput, FormButton, Input, Button } from '@fluentui/react-northstar';
import { useHistory } from "react-router-dom";
import './configView.css';
import { useState } from 'react';
import { AppContext } from '../context';
import { buildSummary } from '../../services/summaryService';

const ConfigStep = () => {
  const [context, setContext] = useContext(AppContext);
  const [sections, setSections] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);
  const history = useHistory();

  const makeSummary = async () => {
    const lastSections = sections.filter(x => x.sectionName !== currentSection.sectionName).concat([currentSection]);
    const payload = lastSections.map(x => {
      return {
        sectionName: x.sectionName,
        content: x.messagesSelected.map(y => context.transcript[y].part).join(' ')
      }
    });
    console.log(payload);
    const result = await buildSummary(payload);
    setContext({...context, summary: result.data});
    history.push("/edit-summary");
  }

  useEffect(() => {
    if (!context) return;
    const defaultSection = {
      sectionName: context.meetingName,
      messagesSelected: [...Array(context.transcript.length).keys()]
    };
    setSections([defaultSection]);
    setCurrentSection(defaultSection);
  }, [context]);

  const addSection = () => {
    const sectionName = document.getElementById('new-topic').value;
    setSections(sections.concat([{ sectionName: sectionName, messagesSelected: [...Array(context.transcript.length).keys()] }]));
  }

  const isMixed = currentSection ?
    (currentSection.messagesSelected.length === context.transcript.length ||
      (currentSection.messagesSelected.length ? 'mixed' : false)) : false;

  return (<React.Fragment>
    <div className='config-view'>
      {Boolean(context) && <React.Fragment><div style={{ fontSize: '24px', fontWeight: 'semibold' }}>{'Configuration'}</div>
        <Form
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'left',
            gap: '20px',
            margin: '0'
          }}
        >
          <Dropdown
            style={{ padding: '12px 0' }}
            fluid
            items={sections.map(x => x.sectionName)}
            placeholder="Topics"
            onChange={(_, event) => {
              if (!event.value) return;
              const sectionToSet = sections.filter(x => x.sectionName === event.value)[0];
              if (currentSection) {
                setSections(sections.filter(x => x.sectionName !== currentSection.sectionName).concat([currentSection]))
              }
              setCurrentSection(sectionToSet)
            }}
          />
          <FormInput
            fluid
            style={{ margin: '12px 0' }}
            name="newtopic"
            id="new-topic"
            placeholder='New topic...'
            showSuccessIndicator={false}
          />
          <FormButton content="Add topic" primary onClick={addSection} />
        </Form>
        <Checkbox checked={isMixed} onChange={(e, { checked }) => { setCurrentSection({ ...currentSection, messagesSelected: checked ? [...Array(context.transcript.length).keys()] : [] }) }} label="Select all" labelPosition="end" style={{ paddingTop: '16px', borderTop: '2px solid #0078D7' }} />
        <TranscriptList transcript={context.transcript} currentSection={currentSection} setCurrentSection={setCurrentSection} /> </React.Fragment>}
    </div>
    <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '296px' }}><Button content="Next" onClick={makeSummary} primary style={{ width: '100%' }} /></div>
  </React.Fragment>
  );
};

export default ConfigStep;