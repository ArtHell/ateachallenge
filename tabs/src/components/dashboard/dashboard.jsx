import React from 'react';
import "./dashboard.css";
import UploadTranscriptPopup from './uploadTranscriptPopup';
import { Button, ShareGenericIcon, EditIcon, EyeIcon, TrashCanIcon, Table, TableRow, TableCell, Popup } from '@fluentui/react-northstar'
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {
  MoreIcon
} from '@fluentui/react-icons-northstar';
import { getSummary } from '../../services/summaryService';
import { TeamsContext } from "../context";
import moment from 'moment';
import { AppContext } from '../context';
import SharePopup from '../sharingPopup/sharePopup';

export const Dashboard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const teamsContext = useContext(TeamsContext);
  const [context, setContext] = useContext(AppContext);
  const history = useHistory();

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

  const viewSummary = (i) => {
    const summary = data[i].item;
    setContext({...context, summary: summary.summary, meetingName: summary.meetingName, meetingLink: summary.meetingLink, participants: summary.participants});
    history.push("/view-summary");
  };

  const editSummary = (i) => {
    const summary = data[i].item;
    setContext({...context, summary: summary.summary, meetingName: summary.meetingName, meetingLink: summary.meetingLink, participants: summary.participants});
    history.push("/edit-summary");
  };

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
              <Button onClick={() => viewSummary(i)} iconOnly text icon={<EyeIcon />} title="View" />
              <Button onClick={() => editSummary(i)} iconOnly text icon={<EditIcon />} title="Edit" />
              <SharePopup triggerButton={<Button iconOnly text icon={<ShareGenericIcon />} title="Share" />} />
              <Button iconOnly text icon={<TrashCanIcon />} title="Remove" />
            </React.Fragment>

          } />} />
        </TableRow>)}
      </Table>
    </div>
  )
}