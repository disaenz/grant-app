import React, { useState, useEffect } from 'react';
import DataRow from './DataRow';

function GrantTable({ data }) {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGrants = async () => {
      try {
        console.log("Ready to make http call");
        const response = await fetch('http://localhost:8000/api/grants?year=2024');
        console.log("Response: ",response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGrants(data.grants);
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
            <th>Grantmaking Process</th>
            <th>Program</th>
            <th>Competitive or Noncompetitive</th>
            <th>Types of Application</th>
            <th>Internal or External Review Model</th>
            <th>In eGrants or new system</th>
            <th>
              <abbr title="and Expected Number of Awards">
                Expected Number of Applicants
              </abbr>
            </th>
            <th>Deadline to kick-off Coordination Meetings</th>
            <th>Funding Opportunity Webpage and System Prep Due</th>
            <th>
              <abbr title="Publish Notice, Open Opportunity in System">
                Outreach Start Date
              </abbr>
            </th>
            <th>Review and Recommendation Plan and Protocol Due</th>
            <th>Internal Guidance Publish development</th>
            <th>
              <abbr title="(Planning/Outreach End Date) (Review Prep Start)">
                Application Due Date 
              </abbr>
            </th>
            <th>
              <abbr title="(includes internal and external review and all risk assessment elements, such as due diligence, past performance, OFMS, etc)">
                Review Period
              </abbr>
            </th>
            <th>Applicant Clarification</th>
            <th>ORO Clarificaton Response Review</th>
            <th>
              <abbr title="(includes time for OGC and OGA review of memos, when applicable)">
                Program Prep for Decision 
              </abbr>
            </th>
            <th>
              <abbr title="(Decision meetings happen 2 days earlier)">
                Awards Decision Documentation Approval Deadline
              </abbr>
            </th>
            <th>Applicant Notification</th>
            <th>Finish Terms and Conditions, Cert Chart</th>
            <th>Resolution and ORO Award Processing</th>
            <th>Budget Office Fund Commitment</th>
            <th>OGA Award Processing</th>
            <th>Award Target</th>
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
