import React from 'react';
import "./dashboard.css";
import UploadTranscriptPopup from './uploadTranscriptPopup';
import { Button, ShareGenericIcon, EditIcon, EyeIcon, TrashCanIcon, Table, TableRow, TableCell, Popup } from '@fluentui/react-northstar'
import { useState, useEffect, useContext } from 'react';
import {
  MoreIcon
} from '@fluentui/react-icons-northstar';
import { getSummary } from '../../services/summaryService';
import { TeamsContext } from "../context";
import moment from 'moment';

export const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const teamsContext = useContext(TeamsContext);

  useEffect(() => {
    if(!teamsContext) return;
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await getSummary(teamsContext.userPrincipalName);
        setData(response.data);
        console.log('resp');
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [teamsContext]);

  return (
    <div style={{ paddingLeft: '280px', paddingRight: '280px', paddingTop: '20px' }}>
      
      <Table
        variables={{
          cellContentOverflow: 'none',

        }}
      >

        <TableRow key={'header'} header style={{ fontWeight: '800', backgroundColor: '#F5F5F5' }}>
          <TableCell key={'meeting-name-header'} content={'Meeting Name'} />
          <TableCell key={'meeting-participants-header'} content={'Meeting Participants'} />
          <TableCell key={'meeting-date-header'} content={'Meeting Date'} />
          <TableCell key={'meeting-action-header'} style={{ justifyContent: 'right' }} content={<UploadTranscriptPopup />} />
        </TableRow>
        {!data || !data.length ? '' : data.map((x, i) => <TableRow key={`summary-row-${i}`} style={{ backgroundColor: '#F5F5F5' }}>
          <TableCell key={`meeting-name-${i}`} content={x.item.meetingName} />
          <TableCell style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}} key={`meeting-participants-${i}`} content={x.item.participants? x.item.participants.join(', ') : ''} />
          <TableCell key={`meeting-date-${i}`} content={moment(x.item.meetingDate).toLocaleString()} />
          <TableCell key={`meeting-action-${i}`} style={{ justifyContent: 'right' }} content={<Popup trigger={<Button iconOnly text icon={<MoreIcon />} title="Show popup" />} content={
            <React.Fragment>
              <Button iconOnly text icon={<EyeIcon />} title="View" />
              <Button iconOnly text icon={<EditIcon />} title="Edit" />
              <Button iconOnly text icon={<ShareGenericIcon />} title="Share" />
              <Button iconOnly text icon={<TrashCanIcon />} title="Remove" />
            </React.Fragment>

          } />} />
        </TableRow>)}
      </Table>
    </div>
  )
}