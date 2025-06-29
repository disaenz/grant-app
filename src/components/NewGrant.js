import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';

function NewGrant({ onAddAward }) {
  const [showModal, setShowModal] = useState(false);

  const [newAward, setNewAward] = useState({
    grantMakingProcess: '',
    program: '',
    competitive: '',
    typesOfApplication: '',
    internalOrExternalReview: '',
    eGrantsOrNewSystem: '',
    expectedApplicants: '',
    deadlineForKickOff: '',
    systemPrepDate: '',
    outreachStartDate: '',
    recommendationPlanDate: '',
    publishDevelopment: '',
    applicationDueDate: '',
    reviewPeriod: '',
    applicantClarification: '',
    oroClarification: '',
    programPrepForDecision: '',
    awardDecision: '',
    applicantNotification: '',
    finishTerms: '',
    oroAwardProcessing: '',
    budgetOfficeFundCommitment: '',
    ogaAwardProcessing: '',
    awardTarget: '',
    notes: '',
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setNewAward({
      grantMakingProcess: '',
      program: '',
      competitive: '',
      typesOfApplication: '',
      internalOrExternalReview: '',
      eGrantsOrNewSystem: '',
      expectedApplicants: '',
      deadlineForKickOff: '',
      systemPrepDate: '',
      outreachStartDate: '',
      recommendationPlanDate: '',
      publishDevelopment: '',
      applicationDueDate: '',
      reviewPeriod: '',
      applicantClarification: '',
      oroClarification: '',
      programPrepForDecision: '',
      awardDecision: '',
      applicantNotification: '',
      finishTerms: '',
      oroAwardProcessing: '',
      budgetOfficeFundCommitment: '',
      ogaAwardProcessing: '',
      awardTarget: '',
      notes: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAward(newAward);
    handleClose();
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Button className="new-grant-button" variant="success" onClick={handleShow}>
          + New Grant
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add New Award</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Grant Making Process</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.grantMakingProcess}
                  onChange={(e) =>
                    setNewAward({ ...newAward, grantMakingProcess: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Program</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.program}
                  onChange={(e) =>
                    setNewAward({ ...newAward, program: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Competitive</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.competitive}
                  onChange={(e) =>
                    setNewAward({ ...newAward, competitive: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Types of Application</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.typesOfApplication}
                  onChange={(e) =>
                    setNewAward({ ...newAward, typesOfApplication: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Internal/External Review</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.internalOrExternalReview}
                  onChange={(e) =>
                    setNewAward({ ...newAward, internalOrExternalReview: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">eGrants or New System</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.eGrantsOrNewSystem}
                  onChange={(e) =>
                    setNewAward({ ...newAward, eGrantsOrNewSystem: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Expected Applicants</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.expectedApplicants}
                  onChange={(e) =>
                    setNewAward({ ...newAward, expectedApplicants: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Deadline for Kick-Off</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.deadlineForKickOff}
                  onChange={(e) =>
                    setNewAward({ ...newAward, deadlineForKickOff: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">System Prep Date</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.systemPrepDate}
                  onChange={(e) =>
                    setNewAward({ ...newAward, systemPrepDate: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Outreach Start Date</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.outreachStartDate}
                  onChange={(e) =>
                    setNewAward({ ...newAward, outreachStartDate: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Recommendation Plan Date</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.recommendationPlanDate}
                  onChange={(e) =>
                    setNewAward({ ...newAward, recommendationPlanDate: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Publish Development</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.publishDevelopment}
                  onChange={(e) =>
                    setNewAward({ ...newAward, publishDevelopment: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Application Due Date</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.applicationDueDate}
                  onChange={(e) =>
                    setNewAward({ ...newAward, applicationDueDate: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Review Period</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.reviewPeriod}
                  onChange={(e) =>
                    setNewAward({ ...newAward, reviewPeriod: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Applicant Clarification</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.applicantClarification}
                  onChange={(e) =>
                    setNewAward({ ...newAward, applicantClarification: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">ORO Clarification</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.oroClarification}
                  onChange={(e) =>
                    setNewAward({ ...newAward, oroClarification: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Program Prep for Decision</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.programPrepForDecision}
                  onChange={(e) =>
                    setNewAward({ ...newAward, programPrepForDecision: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Award Decision</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.awardDecision}
                  onChange={(e) =>
                    setNewAward({ ...newAward, awardDecision: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">Applicant Notification</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.applicantNotification}
                  onChange={(e) =>
                    setNewAward({ ...newAward, applicantNotification: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Finish Terms</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.finishTerms}
                  onChange={(e) =>
                    setNewAward({ ...newAward, finishTerms: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">ORO Award Processing</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.oroAwardProcessing}
                  onChange={(e) =>
                    setNewAward({ ...newAward, oroAwardProcessing: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Budget Office Fund Commitment</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.budgetOfficeFundCommitment}
                  onChange={(e) =>
                    setNewAward({ ...newAward, budgetOfficeFundCommitment: e.target.value })
                  }
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3} className="fw-bold">OGA Award Processing</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.ogaAwardProcessing}
                  onChange={(e) =>
                    setNewAward({ ...newAward, ogaAwardProcessing: e.target.value })
                  }
                />
              </Col>
              <Col md={3} className="fw-bold">Award Target</Col>
              <Col md={3}>
                <Form.Control
                  type="text"
                  value={newAward.awardTarget}
                  onChange={(e) =>
                    setNewAward({ ...newAward, awardTarget: e.target.value })
                  }
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
                  onChange={(e) =>
                    setNewAward({ ...newAward, notes: e.target.value })
                  }
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <>
                <Button variant="primary" type="submit">
                    Save
                </Button> 
                <Button variant="secondary" onClick={handleClose} className="me-2">
                    Cancel
                </Button>
            </>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewGrant;
