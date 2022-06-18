import React from 'react';
import '../singleSummaryView.css'

const SectionCardEditable = ({section}) => {
    return (
        <div className='card__section'>
            <input className='section-title' type="text" defaultValue={section.sectionName}/>
            <ul>
                {section.summary.map(el =>
                    <li className='edit-section-item'><textarea cols={85} rows={3} defaultValue={el}/></li>
                )}
            </ul>
        </div>
    );
};

export default SectionCardEditable;