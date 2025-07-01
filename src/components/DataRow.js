import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { parse, isValid, format } from 'date-fns';

const TYPE_OPTIONS = ["Continuation", "Extended", "New", "Renewal"];
const STATUS_OPTIONS = ["Active", "Closed", "Pending"];

function DataRow({ rowData, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...rowData });

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const parsed = parse(dateStr, 'MM/dd/yyyy', new Date());
    return isValid(parsed) ? parsed : null;
  };
  
  const formatDate = (dateObj) => (dateObj ? format(dateObj, 'MM/dd/yyyy') : '');

  const handleShow = () => {
    setShowModal(true);
    setIsEditing(false);
    setTempData({ ...rowData });
  };

  const handleClose = () => {
    setShowModal(false);
    setIsEditing(false);
  };

  const handleEditClick = () => setIsEditing(true);

  const handleCancelClick = () => {
    setTempData({ ...rowData });
    setIsEditing(false);
  };


  const handleSaveSubmit = (e) => {
    e.preventDefault();
    onUpdate(tempData);
    setIsEditing(false);
    setShowModal(false);
  };


  const renderTextField = (fieldName, required = false) =>
    <Form.Control
      type="text"
      value={tempData[fieldName] || ''}
      onChange={e => setTempData({ ...tempData, [fieldName]: e.target.value })}
      required={required}
    />;

  const renderDropdownField = (fieldName, options, required = false) => {
    let currentValue = tempData[fieldName] ?? "";
    const isValidOption = options.includes(currentValue);
    return (
      <Form.Select
        value={isValidOption ? currentValue : ""}
        onChange={e => setTempData({ ...tempData, [fieldName]: e.target.value })}
        required={required}
      >
        <option value="">Select {fieldName}...</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </Form.Select>
    );
  };

  const renderDateField = (fieldName, required = false) =>
    <DatePicker
      selected={parseDate(tempData[fieldName])}
      onChange={date => setTempData({ ...tempData, [fieldName]: formatDate(date) })}
      dateFormat="MM/dd/yyyy"
      className="form-control"
      placeholderText="Select date"
      required={required}
      style={{ width: "100%" }}
    />;

  const renderNotesField = () =>
    <Form.Control
      as="textarea"
      rows={3}
      style={{ resize: 'none' }}
      value={tempData.notes || ''}
      onChange={e => setTempData({ ...tempData, notes: e.target.value })}
    />;

  return (
    <>
      <tr className="clickable-row" onClick={handleShow}>
        <td>{rowData.name}</td>
        <td>{rowData.program}</td>
        <td>{rowData.type}</td>
        <td>{rowData.status}</td>
        <td>{rowData.startDate}</td>
        <td>{rowData.deadline}</td>
        <td>{rowData.budgetRange}</td>
        <td className="notes-col">
          {rowData.notes && rowData.notes.length > 50
            ? rowData.notes.slice(0, 50) + "..."
            : rowData.notes}
        </td>
      </tr>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{rowData.name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEditing ? (
            <Form onSubmit={handleSaveSubmit}>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Name <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderTextField('name', true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Program <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderTextField('program', true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Type <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderDropdownField('type', TYPE_OPTIONS, true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Status <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderDropdownField('status', STATUS_OPTIONS, true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Start Date <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderDateField('startDate', true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Deadline <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderDateField('deadline', true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">
                  Budget Range <span style={{ color: "red" }}>*</span>
                </Col>
                <Col md={8}>{renderTextField('budgetRange', true)}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Notes</Col>
                <Col md={8}>{renderNotesField()}</Col>
              </Row>
              <div className="text-end">
                <Button variant="primary" type="submit" className="me-2">
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancelClick}>
                  Cancel
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Name</Col>
                <Col md={8}>{rowData.name}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Program</Col>
                <Col md={8}>{rowData.program}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Type</Col>
                <Col md={8}>{rowData.type}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Status</Col>
                <Col md={8}>{rowData.status}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Start Date</Col>
                <Col md={8}>{rowData.startDate}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Deadline</Col>
                <Col md={8}>{rowData.deadline}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Budget Range</Col>
                <Col md={8}>{rowData.budgetRange}</Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="fw-bold">Notes</Col>
                <Col md={8}>{rowData.notes}</Col>
              </Row>
              <div className="text-end">
                <Button variant="primary" onClick={handleEditClick} className="me-2">
                  Edit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DataRow;