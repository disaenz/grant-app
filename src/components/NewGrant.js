import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

function NewGrant({ onAddAward }) {
  const [showModal, setShowModal] = useState(false);

  const [newAward, setNewAward] = useState({
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
    setNewAward({
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
    setNewAward({ ...newAward, [field]: e.target.value });
  };

  const handleDateChange = (field) => (date) => {
    setNewAward({ ...newAward, [field]: date });
  };

  // Converts a Date object to MM/DD/YYYY string
  const formatDate = (date) => {
    if (!date) return '';
    return format(date, 'MM/dd/yyyy');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert Date objects to MM/DD/YYYY before saving
    const payload = {
      ...newAward,
      startDate: formatDate(newAward.startDate),
      deadline: formatDate(newAward.deadline),
    };
    onAddAward(payload);
    handleClose();
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Button className="new-grant-button" variant="success" onClick={handleShow}>
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
              <Col md={3} className="fw-bold">Name</Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newAward.name}
                  onChange={handleChange('name')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Program</Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newAward.program}
                  onChange={handleChange('program')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Type</Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newAward.type}
                  onChange={handleChange('type')}
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Status</Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newAward.status}
                  onChange={handleChange('status')}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Start Date</Col>
              <Col md={9}>
                <DatePicker
                  selected={newAward.startDate}
                  onChange={handleDateChange('startDate')}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                  placeholderText="Select date"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Deadline</Col>
              <Col md={9}>
                <DatePicker
                  selected={newAward.deadline}
                  onChange={handleDateChange('deadline')}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                  placeholderText="Select date"
                  required
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Budget Range</Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  value={newAward.budgetRange}
                  onChange={handleChange('budgetRange')}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Notes</Col>
              <Col md={9}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{ resize: 'none' }}
                  value={newAward.notes}
                  onChange={handleChange('notes')}
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