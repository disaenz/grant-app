import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

function DataRow({ rowData }) {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...rowData });
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

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
    console.log('Saving data:', tempData);
    setIsEditing(false);
    setShouldShowAlert(true);
    setShowModal(false);
  };

  const handleCancelClick = () => {
    setTempData({ ...rowData });
    setIsEditing(false);
  };

  const renderTextField = (fieldName) => {
    return isEditing ? (
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
  };

  const renderNotesField = () => {
    return isEditing ? (
      <Form.Control
        as="textarea"
        rows={3}
        style={{ resize: 'none' }}
        value={tempData.notes || ''}
        onChange={(e) => setTempData({ ...tempData, notes: e.target.value })}
      />
    ) : (
      <span>{rowData.notes}</span>
    );
  };

  return (
    <>
      <tr className="clickable-row" onClick={handleShow}>
        <td className="blue-column">{rowData.grantMakingProcess}</td>
        <td>{rowData.program}</td>
        <td>{rowData.competitive}</td>
        <td>{rowData.typesOfApplication}</td>
        <td>{rowData.internalOrExternalReview}</td>
        <td>{rowData.eGrantsOrNewSystem}</td>
        <td>{rowData.expectedApplicants}</td>
        <td>{rowData.deadlineForKickOff}</td>
        <td>{rowData.systemPrepDate}</td>
        <td>{rowData.outreachStartDate}</td>
        <td>{rowData.recommendationPlanDate}</td>
        <td>{rowData.publishDevelopment}</td>
        <td>{rowData.applicationDueDate}</td>
        <td>{rowData.reviewPeriod}</td>
        <td>{rowData.applicantClarification}</td>
        <td>{rowData.oroClarification}</td>
        <td>{rowData.programPrepForDecision}</td>
        <td>{rowData.awardDecision}</td>
        <td>{rowData.applicantNotification}</td>
        <td>{rowData.finishTerms}</td>
        <td>{rowData.oroAwardProcessing}</td>
        <td>{rowData.budgetOfficeFundCommitment}</td>
        <td>{rowData.ogaAwardProcessing}</td>
        <td>{rowData.awardTarget}</td>
        <td className="notes-col">
            {rowData.notes && rowData.notes.length > 50
                ? rowData.notes.slice(0, 50) + "..."
                : rowData.notes
            }
        </td>
      </tr>

      <Modal show={showModal} 
        onHide={() => setShowModal(false)} 
        onExited={() => {
          if (shouldShowAlert) {
            alert('Record was successfully updated!');
            setShouldShowAlert(false);
          }
        }}
        size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{rowData.grantMakingProcess} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col md={3} className="fw-bold">Grant Making Process</Col>
            <Col md={3}>{renderTextField('grantMakingProcess')}</Col>
            <Col md={3} className="fw-bold">Program</Col>
            <Col md={3}>{renderTextField('program')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Competitive</Col>
            <Col md={3}>{renderTextField('competitive')}</Col>
            <Col md={3} className="fw-bold">Types of Application</Col>
            <Col md={3}>{renderTextField('typesOfApplication')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Internal or External Review</Col>
            <Col md={3}>{renderTextField('internalOrExternalReview')}</Col>
            <Col md={3} className="fw-bold">eGrants or New System</Col>
            <Col md={3}>{renderTextField('eGrantsOrNewSystem')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Expected Applicants</Col>
            <Col md={3}>{renderTextField('expectedApplicants')}</Col>
            <Col md={3} className="fw-bold">Deadline for Kick-Off</Col>
            <Col md={3}>{renderTextField('deadlineForKickOff')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">System Prep Date</Col>
            <Col md={3}>{renderTextField('systemPrepDate')}</Col>
            <Col md={3} className="fw-bold">Outreach Start Date</Col>
            <Col md={3}>{renderTextField('outreachStartDate')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Recommendation Plan Date</Col>
            <Col md={3}>{renderTextField('recommendationPlanDate')}</Col>
            <Col md={3} className="fw-bold">Publish Development</Col>
            <Col md={3}>{renderTextField('publishDevelopment')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Application Due Date</Col>
            <Col md={3}>{renderTextField('applicationDueDate')}</Col>
            <Col md={3} className="fw-bold">Review Period</Col>
            <Col md={3}>{renderTextField('reviewPeriod')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Applicant Clarification</Col>
            <Col md={3}>{renderTextField('applicantClarification')}</Col>
            <Col md={3} className="fw-bold">ORO Clarification</Col>
            <Col md={3}>{renderTextField('oroClarification')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Program Prep for Decision</Col>
            <Col md={3}>{renderTextField('programPrepForDecision')}</Col>
            <Col md={3} className="fw-bold">Award Decision</Col>
            <Col md={3}>{renderTextField('awardDecision')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Applicant Notification</Col>
            <Col md={3}>{renderTextField('applicantNotification')}</Col>
            <Col md={3} className="fw-bold">Finish Terms</Col>
            <Col md={3}>{renderTextField('finishTerms')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">ORO Award Processing</Col>
            <Col md={3}>{renderTextField('oroAwardProcessing')}</Col>
            <Col md={3} className="fw-bold">Budget Office Fund Commitment</Col>
            <Col md={3}>{renderTextField('budgetOfficeFundCommitment')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">OGA Award Processing</Col>
            <Col md={3}>{renderTextField('ogaAwardProcessing')}</Col>
            <Col md={3} className="fw-bold">Award Target</Col>
            <Col md={3}>{renderTextField('awardTarget')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="fw-bold">Notes</Col>
            <Col md={9}>{renderNotesField()}</Col>
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
