import React from 'react';
import '../singleSummaryView/singleSummaryView.css'
import genSummary from './genSummary.json'

const InfoCard = () => {

    return (
        <div className='card__info'>
            <div className='info-name'>{genSummary.info.meetingName}</div>
            <div className='info-date'>{genSummary.info.meetingDate}</div>
            <div className='info-participants'>Participants:&nbsp;
                    {genSummary.info.participants.map(participant =>
                        <span key={participant}>{participant}, </span>
                    )}
            </div>
            <div><a href="1">{genSummary.info.meetingLink}</a></div>
        </div>
    );
};

export default InfoCard;