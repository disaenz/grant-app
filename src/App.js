import React, { useEffect, useState } from 'react';
import NewGrant from './components/NewGrant';
import GrantTable from './components/GrantTable';
import { Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load grants from API
  const fetchGrants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/api/grants');
      if (!response.ok) throw new Error('Failed to fetch grants');
      const data = await response.json();
      setGrants(Array.isArray(data) ? data : data.grants);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrants();
  }, []);

  const handleNewGrant = async (payload) => {
    try {
      const response = await fetch('http://localhost:8000/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to add grant');
      await fetchGrants();
    } catch (err) {
      alert('Failed to add grant: ' + err.message);
    }
  };

  return (
    <div className="container my-5">
      <Row className="mb-4">
        <Col xs={6} md={8}>
          <h1 className="m-0">Grants</h1>
        </Col>
        <Col xs={6} md={4} className="text-end">
          <NewGrant onAddAward={handleNewGrant} />
        </Col>
      </Row>
      {loading ? (
        <div>Loading…</div>
      ) : error ? (
        <div className="text-danger">Error: {error}</div>
      ) : (
        <GrantTable data={grants} />
      )}
    </div>
  );
}

export default App;