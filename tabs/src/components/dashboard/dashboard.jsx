import React from 'react';
import "./dashboard.css";
import StaticTable from './mstable';
import DialogExample from './msdialog';
import { Button, Flex, ShareGenericIcon, EditIcon, EyeIcon, TrashCanIcon } from '@fluentui/react-northstar'
import {
    gridCellMultipleFocusableBehavior,
} from '@fluentui/accessibility'
import { useState } from 'react';

export function Dashboard(props) {

    
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

    const rowsPlain = [
        {
            key: 1,
            items: [
                {
                    content: 'Teams notes 1',
                    key: '1-1',
                    id: 'name-1',
                },
                {
                    content: 'Brainstorm',
                    key: '1-2',
                },
                {
                    content: '2022-06-18',
                    key: '1-3',
                },
                {
                    key: '1-4',
                    ...moreActionCell,
                }
            ],
            'aria-labelledby': 'name-1',
        },
        {
            key: 2,
            items: [
                {
                    content: 'Teams notes 2',
                    key: '2-1',
                    id: 'name-2',
                },
                {
                    content: 'Brainstorm',
                    key: '2-2',
                },
                {
                    content: '2022-05-01',
                    key: '2-3',
                },
                {
                    key: '2-4',
                    ...moreActionCell,
                }
            ],
            'aria-labelledby': 'name-2',
        },
        {
            key: 3,
            items: [
                {
                    content: 'Teams notes 3',
                    key: '3-1',
                    id: 'name-3',
                },
                {
                    content: 'Brainstorm',
                    key: '3-2',
                },
                {
                    content: '2022-06-15',
                    key: '3-3',
                },
                {
                    key: '3-4',
                    ...moreActionCell,
                }
            ],
            'aria-labelledby': 'name-3',
        }
    
    ]

    const [rowData, setRowData] = useState(rowsPlain)

    return (
        <div>
            <div className='btn-spacing'>
                <DialogExample data={rowData} setData={setRowData} actions={moreActionCell}/>
            </div>
            <StaticTable data={rowData} />
        </div>
    )
}