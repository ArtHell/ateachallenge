import React from 'react';
import {
    Box, List, ListItem,
} from '@fluentui/react-northstar'
import transcriptRaw from './transcriptRaw.json'


const TranscriptList = () => {
    return (
        <Box>
            <List selectable defaultSelectedIndex={0} style={{backgroundColor: '#fafafa'}}>
                {transcriptRaw.map((x, i) =>
                    <ListItem key={i} header={x.person} headerMedia={x.start} content={x.part} style={{margin: '16px 0'}}/>
                )}
            </List>
        </Box>
    );
};

export default TranscriptList;