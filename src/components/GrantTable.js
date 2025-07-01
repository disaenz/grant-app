import React from 'react';
import DataRow from './DataRow';

function GrantTable({ data, onUpdate }) {
  // `data` is an array of grants, already fetched by App.js

  if (!data || !Array.isArray(data)) {
    return <div>No grant data available.</div>;
  }

  return (
    <div className="table-responsive" style={{ overflowX: 'auto' }}>
      <table className="table table-bordered table-hover" style={{ minWidth: '1500px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Type</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Budget</th>
            <th className="notes-col">Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">No grants found.</td>
            </tr>
          ) : (
            data.map((grant, idx) => (
              <DataRow key={grant.id || idx} rowData={grant} onUpdate={onUpdate}/>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GrantTable;