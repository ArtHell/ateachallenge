import React from 'react';
import '../singleSummaryView.css'

const Sectioncard = ({ section }) => {
    return (
        <div className='card__section'>
            <div className='section-title'>{section.sectionName}</div>
            <ul>
                {section.summary.map(el =>
                    <li className='section-item'>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Sectioncard;