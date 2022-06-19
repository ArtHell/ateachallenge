import React from 'react';
import "./dashboard.css";
import DialogExample from './msdialog';
import { Button, Flex, ShareGenericIcon, EditIcon, EyeIcon, TrashCanIcon, Table, TableRow, TableCell, Toolbar, ToolbarItem, ToolbarMenu, ToolbarMenuItem, Popup } from '@fluentui/react-northstar'
import {
  gridCellMultipleFocusableBehavior,
} from '@fluentui/accessibility'
import { useState, useEffect, useContext } from 'react';
import {
  MoreIcon,
  PauseIcon,
  PlayIcon,
  StrikeIcon,
  ItalicIcon,
} from '@fluentui/react-icons-northstar';
import { buildSummary, getSummary } from '../../services/summaryService';
import { TeamsContext } from "../context";

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


  const [menuOpen, setMenuOpen] = React.useState(false)
  const moreActionCell = {
    content: (
      <Flex gap="gap.small" vAlign="center">
        <Button icon={<EyeIcon />} iconOnly title="View" />
        <Button icon={<EditIcon />} iconOnly title="Edit" />
        <Button icon={<ShareGenericIcon />} iconOnly title="Share" />
        <Button icon={<TrashCanIcon />} iconOnly title="Remove" />
        {/* table layout not support now more content in the cell */}
        {/* <Button tabIndex={-1} icon="edit" circular text iconOnly title="edit tags" /> */}
      </Flex>
    ),
    accessibility: gridCellMultipleFocusableBehavior,
  }

  const summariesMock = [
    {
      id: '1',
      meetingName: 'Brainstorm 1',
      meetingLink: '',
      meetingDate: new Date(),
      owner: 'Person A',
      host: 'Person A',
      participants: ['Participant A']
    },
    {
      id: '2',
      meetingName: 'Brainstorm 2',
      meetingLink: '',
      meetingDate: new Date(),
      owner: 'Person B',
      host: 'Person B',
      participants: ['Participant A', 'Participant B']
    },
    {
      id: '3',
      meetingName: 'Brainstorm 3',
      meetingLink: '',
      meetingDate: new Date(),
      owner: 'Person C',
      host: 'Person B',
      participants: ['Participant A', 'Participant B']
    },
    {
      id: '4',
      meetingName: 'Brainstorm 4',
      meetingLink: '',
      meetingDate: new Date(),
      owner: 'Person A',
      host: 'Person A',
      participants: ['Participant C', 'Participant A']
    }];

  const [summaries, setSummaries] = useState(summariesMock);

  const onMenuOpenChange = (e, { menuOpen }) => setMenuOpen(menuOpen);

  return (
    <div style={{ paddingLeft: '280px', paddingRight: '280px', paddingTop: '20px' }}>
      
      <Table
        variables={{
          cellContentOverflow: 'none',

        }}
      >

        <TableRow key={'header'} header style={{ fontWeight: '800', backgroundColor: '#F5F5F5' }}>
          <TableCell key={'meeting-name-header'} content={'Meeting Name'} />
          <TableCell key={'meeting-host-header'} content={'Meeting Host'} />
          <TableCell key={'meeting-date-header'} content={'Meeting Date'} />
          <TableCell key={'meeting-action-header'} style={{ justifyContent: 'right' }} content={<DialogExample />} />
        </TableRow>
        {!data || !data.length ? '' : data.map((x, i) => <TableRow key={`summary-row-${i}`} style={{ backgroundColor: '#F5F5F5' }}>
          <TableCell key={`meeting-name-${i}`} content={x.meetingName} />
          <TableCell key={`meeting-host-${i}`} content={x.host} />
          <TableCell key={`meeting-date-${i}`} content={x.meetingDate.toString()} />
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