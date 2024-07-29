"use client";
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { ColDef } from 'ag-grid-community'; // Import ColDef type
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from './button';
import Display from './Display';

const Grid = () => {
    const [rowData, setRowData] = useState([
        { clas: "cs", '8-9': { subject: 'Science', teacher: 'Mr. A', room: '101' }, '9-10': { subject: 'Math', teacher: 'Ms. B', room: '102' }, '10-11': { subject: 'English', teacher: 'Mr. C', room: '103' }, '11-12': { subject: 'History', teacher: 'Ms. D', room: '104' }, '12-1-00': { subject: 'Urdu', teacher: 'Mr. E', room: '105' } },
        { clas: "bba", '8-9': { subject: 'Economics', teacher: 'Mr. F', room: '201' }, '9-10': { subject: 'Accounting', teacher: 'Ms. G', room: '202' }, '10-11': { subject: 'Marketing', teacher: 'Mr. H', room: '203' }, '11-12': { subject: 'Management', teacher: 'Ms. I', room: '204' }, '12-1-00': { subject: 'Finance', teacher: 'Mr. J', room: '205' } },
        { clas: "cs", '8-9': { subject: 'Science', teacher: 'Mr. A', room: '101' }, '9-10': { subject: 'Math', teacher: 'Ms. B', room: '102' }, '10-11': { subject: 'English', teacher: 'Mr. C', room: '103' }, '11-12': { subject: 'History', teacher: 'Ms. D', room: '104' }, '12-1-00': { subject: 'Urdu', teacher: 'Mr. E', room: '105' } },
        { clas: "bba", '8-9': { subject: 'Economics', teacher: 'Mr. F', room: '201' }, '9-10': { subject: 'Accounting', teacher: 'Ms. G', room: '202' }, '10-11': { subject: 'Marketing', teacher: 'Mr. H', room: '203' }, '11-12': { subject: 'Management', teacher: 'Ms. I', room: '204' }, '12-1-00': { subject: 'Finance', teacher: 'Mr. J', room: '205' } },
        { clas: "cs", '8-9': { subject: 'Science', teacher: 'Mr. A', room: '101' }, '9-10': { subject: 'Math', teacher: 'Ms. B', room: '102' }, '10-11': { subject: 'English', teacher: 'Mr. C', room: '103' }, '11-12': { subject: 'History', teacher: 'Ms. D', room: '104' }, '12-1-00': { subject: 'Urdu', teacher: 'Mr. E', room: '105' } },
        { clas: "bba", '8-9': { subject: 'Economics', teacher: 'Mr. F', room: '201' }, '9-10': { subject: 'Accounting', teacher: 'Ms. G', room: '202' }, '10-11': { subject: 'Marketing', teacher: 'Mr. H', room: '203' }, '11-12': { subject: 'Management', teacher: 'Ms. I', room: '204' }, '12-1-00': { subject: 'Finance', teacher: 'Mr. J', room: '205' } },
        // Add more rows as needed
    ]);
   

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState<ColDef[]>([
        { field: "clas",filter:true, sortable:true
        ,cellRenderer:(params:any)=><Button  className='uppercase w-full'>{params.value}</Button>    ,flex:0.7 },
        { field: "8-9", filter:true, sortable:true, cellRenderer:(params:any)=><Button className='h-full text-xs w-full' >{params.value.subject}<br/>{params.value.teacher}<br/>
        {params.value.room}
        </Button> ,flex:1 },
        { field: "9-10", filter:true, sortable:true,cellRenderer:(params:any)=><Button className='h-full text-xs w-full' >{params.value.subject}<br/>{params.value.teacher}<br/>
        {params.value.room}
        </Button> ,flex:1 },
        { field: "10-11",filter:true, sortable:true , cellRenderer:(params:any)=><Button className='h-full text-xs w-full' >{params.value.subject}<br/>{params.value.teacher}<br/>
        {params.value.room}
        </Button> ,flex:1 },
        { field: "11-12",filter:true, sortable:true , cellRenderer:(params:any)=><Button className='h-full text-xs w-full' >{params.value.subject}<br/>{params.value.teacher}<br/>
        {params.value.room}
        </Button> ,flex:1 },
        { field: "12-1-00",filter:true, sortable:true ,cellRenderer:(params:any)=><Button className='h-full text-xs w-full' >{params.value.subject}<br/>{params.value.teacher}<br/>
        {params.value.room}
        </Button> ,flex:1 }
    ]);

    return (
        <div>
            <div
                className=" text-sm ag-theme-quartz  h-[500px] px-2" // applying the Data Grid theme
                // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    rowHeight={60}
                    
                />
            </div>
        </div>
    );
}

export default Grid;