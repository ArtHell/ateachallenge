import React, { useContext, useEffect } from 'react';
import '../singleSummaryView.css'
import SectionCard from './sectionCard';
import InfoCard from '../infoCard'
import { AppContext } from '../../context';

const SummaryView = () => {
  const [context, setContext] = useContext(AppContext);

  return (
    <div className='summary-view'>
      {Boolean(context) && <React.Fragment>
        <InfoCard meetingName={context.meetingName} meetingLink={context.meetingLink} meetingDate={context.meetingDate} participants={context.participants} />
        {context.summary.map(sec => <SectionCard key={sec.sectionName} section={sec} />)}
      </React.Fragment>}
    </div>
  );
};

export default SummaryView;