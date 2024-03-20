import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import './styles.css';

function ProjectModal({ show, onHide, project }) {

  if (!project) {
    return null; // If project is null or undefined, return null to prevent rendering
  }
  console.log(project)
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Row>
      <Col md={5}>
        <Image className="modal-image" src={project.ProjectPic}/>
      </Col>
      <Col md={7}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.ProjectName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <span class="badge badge-primary">Primary</span>
       <h6>{project.Customer}</h6>
       <small>{project.approach}</small>
        {/* Add more project details here as needed */}
        <hr className="bottom-hr"/>
        <a href={project.github}><Button className="modal-button" variant="outline-secondary">Github</Button></a>
        <a href={project.ProjectInfoURL}><Button className="modal-button" variant="outline-secondary">Project Info</Button></a>
        <a href={project.Demo}><Button className="modal-button" variant="outline-secondary">Demo</Button></a>

      </Modal.Body>
      </Col>
    </Row>
    </Modal>
  );
}

function Cards({ challengesInfo }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!challengesInfo || challengesInfo.length === 0) {
    return null; // or return a placeholder message or loading indicator
  }

  return (
    <>
      <Container className="all-cards" >
        <Row xs={1} md={3} className="g-4">
          {challengesInfo.map((challenge, index) => (
            <Col key={index} onClick={() => {
                    setSelectedProject(challenge);
                    setModalShow(true);
                  }}>
              <Card border="dark">
                <Card.Header>{challenge.Category}</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" className="card-img" src={challenge.ProjectPic} />
                  <Card.Title>{challenge.ProjectName}</Card.Title>
                  <Card.Text>
                    <small>{challenge.ShortInfo.length > 100 ? challenge.ShortInfo.slice(0, 100) + '...' : challenge.ShortInfo}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={selectedProject}
      />
    </>
  );
}

export default Cards;