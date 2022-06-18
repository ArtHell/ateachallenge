import React from 'react';
import '../singleSummaryView.css'
import Sectioncard from './sectionCard';
import InfoCard from '../infoCard'
import genSummary from '../genSummary.json'

const SummaryView = () => {
    return (
        <div className='summary-view'>
            <InfoCard />
            {genSummary.sections.map(sec => <Sectioncard section={sec}/>)}
        </div>
    );
};

export default SummaryView;