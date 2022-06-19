import React, { useContext, useEffect } from 'react';
import '../singleSummaryView.css'
import InfoCard from '../infoCard'
import SectionCardEditable from './sectionCardEditable';
import SharePopup from '../../sharingPopup/sharePopup';
import { AppContext } from '../../context';
import { saveSummary } from '../../../services/summaryService';
import { useHistory } from "react-router-dom";
import { TeamsContext } from '../../context';

const SummaryEdit = () => {
  const [context, setContext] = useContext(AppContext);
  const teamsContext = useContext(TeamsContext);
  const history = useHistory();

  const createSummary = async () => {
    const result = await saveSummary({summary: context.summary, userId: teamsContext.userPrincipalName, meetingName: context.meetingName, meetingDate: context.meetingDate, meetingLink: context.meetingLink, participants: context.participants});
  }

  return (
    <div className='summary-view'>
      {Boolean(context) && <React.Fragment>
        <InfoCard meetingName={context.meetingName} meetingLink={context.meetingLink} meetingDate={context.meetingDate} participants={context.participants} />
        {context.summary.map(sec => <SectionCardEditable key={sec.sectionName} section={sec} />)}
        <div className='btn-right'>
          <SharePopup saveSummary={createSummary} />
          {/* <Button primary style={{ padding: '8px', width: 'fit-content' }}>Save changes</Button> */}
        </div>
      </React.Fragment>}
    </div>
  );
};

export default SummaryEdit;