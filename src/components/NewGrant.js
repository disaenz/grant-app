import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const TYPE_OPTIONS = ["Continuation", "Extended", "New", "Renewal"];
const STATUS_OPTIONS = ["Active", "Closed", "Pending"];

function NewGrant({ onAddAward }) {
  const [showModal, setShowModal] = useState(false);

  const [newGrant, setNewGrant] = useState({
    name: '',
    program: '',
    type: '',
    status: '',
    startDate: null,
    deadline: null,
    budgetRange: '',
    notes: '',
  });

  const handleShow = () => setShowModal(true);

  const handleClose = () => {
    setShowModal(false);
    setNewGrant({
      name: '',
      program: '',
      type: '',
      status: '',
      startDate: null,
      deadline: null,
      budgetRange: '',
      notes: '',
    });
  };

  const handleChange = (field) => (e) => {
    setNewGrant({ ...newGrant, [field]: e.target.value });
  };

  const handleDateChange = (field) => (date) => {
    setNewGrant({ ...newGrant, [field]: date });
  };

  const formatDate = (date) => {
    if (!date) return '';
    return format(date, 'MM/dd/yyyy');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      'name', 'program', 'type', 'status', 'startDate', 'deadline', 'budgetRange'
    ];
    for (let field of requiredFields) {
      if (!newGrant[field] || (typeof newGrant[field] === 'string' && newGrant[field].trim() === '')) {
        alert('Please fill in all required fields.');
        return;
      }
    }

    const payload = {
      ...newGrant,
      startDate: formatDate(newGrant.startDate),
      deadline: formatDate(newGrant.deadline),
    };

    onAddAward(payload);
    handleClose();
  };

  return (
    <>
      <div className="d-flex justify-content-start justify-content-md-end mb-3">
        <Button
          className="new-grant-button"
          variant="success"
          onClick={handleShow}
        >
          + New Grant
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Grant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Name<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newGrant.name}
                  onChange={handleChange('name')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Program<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newGrant.program}
                  onChange={handleChange('program')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Type<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <Form.Select
                  value={newGrant.type}
                  onChange={handleChange('type')}
                  required
                >
                  <option value="">Select type...</option>
                  {TYPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Status<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <Form.Select
                  value={newGrant.status}
                  onChange={handleChange('status')}
                  required
                >
                  <option value="">Select status...</option>
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Start Date<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <DatePicker
                  selected={newGrant.startDate}
                  onChange={handleDateChange('startDate')}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                  placeholderText="Select date"
                  required
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Deadline<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <DatePicker
                  selected={newGrant.deadline}
                  onChange={handleDateChange('deadline')}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                  placeholderText="Select date"
                  required
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Budget Range<span style={{ color: "red" }}>*</span>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newGrant.budgetRange}
                  onChange={handleChange('budgetRange')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">
                Notes
              </Col>
              <Col md={9}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ resize: 'none' }}
                  value={newGrant.notes}
                  onChange={handleChange('notes')}
                  placeholder="Optional"
                />
              </Col>
            </Row>
            <div className="text-end">
              <Button variant="primary" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewGrant;