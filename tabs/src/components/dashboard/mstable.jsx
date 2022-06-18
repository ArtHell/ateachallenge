/* eslint-disable no-unused-vars */
import { Table, Button, Flex, MenuButton, ShareGenericIcon, EditIcon, EyeIcon, TrashCanIcon } from '@fluentui/react-northstar'
import {
    gridNestedBehavior,
    gridCellWithFocusableElementBehavior,
    gridCellMultipleFocusableBehavior,
} from '@fluentui/accessibility'
import React from 'react'

// function handleRowClick(index) {
//     alert(`OnClick on the row ${index} executed.`)
// }

const header = {
    key: 'header',
    items: [
        {   
            content: 'Meeting name',
            key: 'name',
        },
        {
            content: 'Meeting type',
            key: 'type',
        },
        {
            content: 'Date',
            key: 'date',
        },
        {
            content: 'Actions',
            key: 'tags',
        }
    ],
}

// const moreActionCell = {
//     content: (
//         <Flex gap="gap.small" vAlign="center">
//             <Button icon={<EyeIcon />} iconOnly title="View" />
//             <Button icon={<EditIcon />} iconOnly title="Edit" />
//             <Button icon={<ShareGenericIcon />} iconOnly title="Share" />
//             <Button icon={<TrashCanIcon />} iconOnly title="Remove" />
//             {/* table layout not support now more content in the cell */}
//             {/* <Button tabIndex={-1} icon="edit" circular text iconOnly title="edit tags" /> */}
//         </Flex>
//     ),
//     accessibility: gridCellMultipleFocusableBehavior,
// }
// const contextMenuItems = ['View', 'Edit', 'Share', 'Remove']
// const rowsPlain = [
//     {
//         key: 1,
//         items: [
//             {
//                 content: 'Teams notes 1',
//                 key: '1-1',
//                 id: 'name-1',
//             },
//             {
//                 content: 'Brainstorm',
//                 key: '1-2',
//             },
//             {
//                 content: '2022-06-18',
//                 key: '1-3',
//             },
//             {
//                 key: '1-4',
//                 ...moreActionCell,
//             }
//         ],
//         // onClick: () => handleRowClick(1),
//         'aria-labelledby': 'name-1',
//         // children: (Component, { key, ...rest }) => (
//         //     <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />} />
//         // ),
//     },
//     {
//         key: 2,
//         items: [
//             {
//                 content: 'Teams notes 2',
//                 key: '2-1',
//                 id: 'name-2',
//             },
//             {
//                 content: 'Brainstorm',
//                 key: '2-2',
//             },
//             {
//                 content: '2022-05-01',
//                 key: '2-3',
//             },
//             {
//                 key: '2-4',
//                 ...moreActionCell,
//             }
//         ],
//         // onClick: () => handleRowClick(2),
//         'aria-labelledby': 'name-2',
//         // children: (Component, { key, ...rest }) => (
//         //     <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />} />
//         // ),
//     },
//     {
//         key: 3,
//         items: [
//             {
//                 content: 'Teams notes 3',
//                 key: '3-1',
//                 id: 'name-3',
//             },
//             {
//                 content: 'Brainstorm',
//                 key: '3-2',
//             },
//             {
//                 content: '2022-06-15',
//                 key: '3-3',
//             },
//             {
//                 key: '3-4',
//                 ...moreActionCell,
//             }
//         ],
//         // onClick: () => handleRowClick(3),
//         'aria-labelledby': 'name-3',
//         // children: (Component, { key, ...rest }) => (
//         //     <MenuButton menu={contextMenuItems} key={key} contextMenu trigger={<Component {...rest} />} />
//         // ),
//     }

// ]

const StaticTable = ({data}) => (
    <Table
        variables={{
            cellContentOverflow: 'none',
        }}
        header={header}
        rows={data}
        aria-label="Nested navigation"
        accessibility={gridNestedBehavior}
    />
)

export default StaticTable