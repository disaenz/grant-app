import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { parse, isValid, format } from 'date-fns';

const TYPE_OPTIONS = ["Closed", "Continuation", "Extended", "New", "Renewal"];
const STATUS_OPTIONS = ["Active", "Closed", "Pending"];

function DataRow({ rowData, onUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...rowData });
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const parsed = parse(dateStr, 'MM/dd/yyyy', new Date());
    return isValid(parsed) ? parsed : null;
  };

  const formatDate = (dateObj) => {
    if (!dateObj) return '';
    return format(dateObj, 'MM/dd/yyyy');
  };

  const renderTextField = (fieldName) =>
    isEditing ? (
      <Form.Control
        type="text"
        value={tempData[fieldName] || ''}
        onChange={(e) =>
          setTempData({ ...tempData, [fieldName]: e.target.value })
        }
      />
    ) : (
      <span>{rowData[fieldName]}</span>
    );

  const renderNotesField = () =>
    isEditing ? (
      <Form.Control
        as="textarea"
        rows={3}
        style={{ resize: 'none' }}
        value={tempData.notes || ''}
        onChange={(e) =>
          setTempData({ ...tempData, notes: e.target.value })
        }
      />
    ) : (
      <span>
        {rowData.notes && rowData.notes.length > 50
          ? rowData.notes.slice(0, 50) + '...'
          : rowData.notes}
      </span>
    );

  const renderDropdownField = (fieldName, options) => {
    let currentValue = tempData[fieldName] ?? "";
    const isValidOption = options.includes(currentValue);
    return isEditing ? (
      <Form.Select
        value={isValidOption ? currentValue : ""}
        onChange={e =>
          setTempData({ ...tempData, [fieldName]: e.target.value })
        }
        required
      >
        <option value="">Select {fieldName}...</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </Form.Select>
    ) : (
      <span>{rowData[fieldName]}</span>
    );
  };

  const renderDateField = (fieldName) => {
    return isEditing ? (
      <DatePicker
        selected={parseDate(tempData[fieldName])}
        onChange={date =>
          setTempData({ ...tempData, [fieldName]: formatDate(date) })
        }
        dateFormat="MM/dd/yyyy"
        className="form-control"
        placeholderText="Select date"
        required
        style={{ width: "100%" }}
      />
    ) : (
      <span>{rowData[fieldName]}</span>
    );
  };

  const handleShow = () => {
    setShowModal(true);
    setIsEditing(false);
    setTempData({ ...rowData });
  };

  const handleClose = () => {
    setShowModal(false);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(tempData);
    setIsEditing(false);
    setShouldShowAlert(true);
    setShowModal(false);
  };

  const handleCancelClick = () => {
    setTempData({ ...rowData });
    setIsEditing(false);
  };

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

      <Modal
        show={showModal}
        onHide={handleClose}
        onExited={() => {
          if (shouldShowAlert) {
            alert('Record was successfully updated!');
            setShouldShowAlert(false);
          }
        }}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{rowData.name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Name</Col>
            <Col md={8}>{renderTextField('name')}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Program</Col>
            <Col md={8}>{renderTextField('program')}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Type</Col>
            <Col md={8}>{renderDropdownField('type', TYPE_OPTIONS)}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Status</Col>
            <Col md={8}>{renderDropdownField('status', STATUS_OPTIONS)}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Start Date</Col>
            <Col md={8}>{renderDateField('startDate')}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Deadline</Col>
            <Col md={8}>{renderDateField('deadline')}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Budget Range</Col>
            <Col md={8}>{renderTextField('budgetRange')}</Col>
          </Row>
          <Row className="mb-3">
            <Col md={4} className="fw-bold">Notes</Col>
            <Col md={8}>{renderNotesField()}</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {isEditing ? (
            <>
              <Button variant="primary" onClick={handleSaveClick}>
                Save
              </Button>
              <Button variant="secondary" onClick={handleCancelClick}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={handleEditClick}>
                Edit
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DataRow;