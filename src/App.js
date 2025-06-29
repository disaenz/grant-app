import React from 'react';
import NewGrant from './components/NewGrant';
import GrantTable from './components/GrantTable';
import { Row, Col } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <div className="container my-5">
      <Row className="mb-4">
        <Col xs={6} md={8}>
          <h1 className="m-0">Grants</h1>
        </Col>
        <Col xs={6} md={4} className="text-end">
          <NewGrant />
        </Col>
      </Row>
      <GrantTable />
    </div>
  );
}

export default App;