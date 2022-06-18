import React from 'react';
import '../singleSummaryView.css'
import InfoCard from '../infoCard'
import SectionCardEditable from './sectionCardEditable';
import genSummary from '../genSummary.json'
// import { Button } from '@fluentui/react-northstar';
import SharePopup from '../../sharingPopup/sharePopup';

const SummaryEdit = () => {
    return (
        <div className='summary-view'>
            <InfoCard />
            {genSummary.sections.map(sec => <SectionCardEditable key={sec.sectionName} section={sec} />)}
            <div className='btn-right'>
            <SharePopup />
                {/* <Button primary style={{ padding: '8px', width: 'fit-content' }}>Save changes</Button> */}
            </div>

        </div>
    );
};

export default SummaryEdit;