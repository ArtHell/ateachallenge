import React from 'react';
import './sharing.css'
import { Flex, Button, Dropdown } from '@fluentui/react-northstar'
import { FilesPdfIcon } from '@fluentui/react-icons-northstar'
import { useHistory } from 'react-router-dom';


const SharingForm = () => {

    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const inputItems = ['PERSON A', 'PERSON B', 'PERSON C', 'PERSON D', 'PERSON E']
    const getA11ySelectionMessage = {
        onAdd: item => `${item} has been selected.`,
        onRemove: item => `${item} has been removed.`,
    }




    return (
        <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '16px 0 8px 0' }}>Congrats! Your meeting summary is ready.</div>
            <div style={{ fontSize: '14px', marginBottom: '16px' }}>Save it for yourself or share it with your team.</div>
            <div style={{ fontSize: '12px' }}>Share by email with</div>
            <Dropdown
                size="smallest"
                fluid
                search
                multiple
                items={inputItems}
                placeholder="Start typing a name"
                getA11ySelectionMessage={getA11ySelectionMessage}
                noResultsMessage="We couldn't find any matches."
            />
            <Flex gap="gap.small" style={{ marginTop: '16px' }}>
                <Button primary onClick={handleClick}>Share</Button>
                <Button ><a href="./directory/summary.pdf" download><FilesPdfIcon />&nbsp;Download as PDF</a></Button>
            </Flex>
        </div>
    );
};

export default SharingForm;