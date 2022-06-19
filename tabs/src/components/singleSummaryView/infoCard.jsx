import React from 'react';
import '../singleSummaryView/singleSummaryView.css'

const InfoCard = ({meetingName, meetingDate, meetingLink, participants}) => {

    return (
        <div className='card__info'>
            <div className='info-name'>{meetingName}</div>
            <div className='info-date'>{meetingDate}</div>
            <div className='info-participants'>Participants:&nbsp;
                    {participants && participants.map(participant =>
                        <span key={participant}>{participant}, </span>
                    )}
            </div>
            <div><a href="1">{meetingLink}</a></div>
        </div>
    );
};

export default InfoCard;