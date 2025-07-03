import React, { useEffect, useState } from 'react';
import NewGrant from './components/NewGrant';
import GrantTable from './components/GrantTable';
import { Row, Col, Spinner } from 'react-bootstrap';
import './App.css';

function App() {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE = process.env.REACT_APP_GRANT_API_URL || 'http://localhost:8000';

  // Load grants from API
  const fetchGrants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE}/api/grants`);
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
    // eslint-disable-next-line
  }, []);

  const handleNewGrant = async (payload) => {
    try {
      const response = await fetch(`${API_BASE}/api/grants`, {
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

  const handleUpdateGrant = async (updatedGrant) => {
    try {
      const response = await fetch(
        `${API_BASE}/api/grants/${updatedGrant.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedGrant)
        }
      );
      if (!response.ok) throw new Error('Failed to update grant');
      await fetchGrants();
    } catch (err) {
      alert('Failed to update grant: ' + err.message);
    }
  };

  return (
    <div className="app-root d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">
        <Row className="mb-4 align-items-center">
          <Col xs={12} md={8}>
            <h1 className="display-4 fw-bold mb-0" style={{ letterSpacing: "1px" }}>
              Grant Dashboard
            </h1>
            <p className="text-muted" style={{ fontSize: "1.0rem", marginTop: 8 }}>
              Manage, track, and review all grants in one place
            </p>
          </Col>
          <Col>
            <NewGrant onAddAward={handleNewGrant} />
          </Col>
        </Row>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading grants…</span>
            </Spinner>
          </div>
        ) : error ? (
          <div className="text-danger">Error: {error}</div>
        ) : (
          <GrantTable data={grants} onUpdate={handleUpdateGrant} />
        )}
      </div>
      <footer className="text-center mt-4 mb-2 small text-muted">
        © {new Date().getFullYear()} Daniel Saenz. All rights reserved.
      </footer>
    </div>
  );
}

export default App;