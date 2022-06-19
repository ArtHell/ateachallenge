import React from 'react';
import './sharing.css'

const SharingHeader = () => {
    return (
        <div style={{display: 'flex'}}>
            <div className='logo-box'/>
            <div>
                <div style={{fontSize: '14px'}}>Transcript</div>
                <div style={{fontSize: '12px', fontWeight: 'normal'}}>Meeting name</div>
            </div>
        </div>
    );
};

export default SharingHeader;