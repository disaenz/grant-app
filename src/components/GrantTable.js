import React, { useState, useEffect } from 'react';
import DataRow from './DataRow';

function GrantTable({ data }) {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchGrants = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/grants');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGrants(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchGrants();
}, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="table-responsive" style={{ overflowX: 'auto' }}>
      <table className="table table-bordered table-hover" style={{ minWidth: '1500px'}}>
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
          {grants.map((grant, idx) => (
            <DataRow key={idx} rowData={grant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrantTable;
