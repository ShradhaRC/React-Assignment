import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'salary', headerName: 'Salary', type: 'number', width: 90 },
  { field: 'add', headerName: 'Add', type: 'number', width: 90 },
];

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30, salary:'2.5L',add:'Banglore' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25,salary:'1.0L',add:'Bidar'  },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35, salary:'3.0L',add:'Tumkur'  },
  { id: 4, firstName: 'Bob', lastName: 'Johnson', age: 35, salary:'3.0L',add:'Tumkur'  },
  { id: 5, firstName: 'Bob', lastName: 'Johnson', age: 35, salary:'3.0L',add:'Tumkur'  },
  // Add more rows as needed
];

function CustomDatagrid() {
  return (
    <div style={{ height: 400, width: '95%' }}>
      <DataGrid style={{ color: 'white',background:'rgb(56 52 52)' }} rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

export default CustomDatagrid;
