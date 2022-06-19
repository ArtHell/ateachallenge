import React from 'react';
import {
  Box, List, ListItem,
} from '@fluentui/react-northstar'


const TranscriptList = ({ transcript, currentSection, setCurrentSection }) => {
  return (
    <Box>
      {Boolean(currentSection) && <List selectable style={{ backgroundColor: '#fafafa' }}>
        {transcript.map((x, i) =>
          <ListItem key={i} onClick={() => {
            const isThere = currentSection.messagesSelected.indexOf(i) !== -1;
            setCurrentSection({ ...currentSection, messagesSelected: isThere ? currentSection.messagesSelected.filter(x => x !== i) : currentSection.messagesSelected.concat([i].sort((a, b) => a - b)) })
          }} selected={currentSection.messagesSelected.indexOf(i) !== -1} header={x.person} headerMedia={x.start} content={x.part} style={{ margin: '16px 0', borderRadius: '8px' }} />
        )}
      </List>}
    </Box>
  );
};

export default TranscriptList;