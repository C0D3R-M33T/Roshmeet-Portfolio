import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="flex-grow-1" style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        <div>
          <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
            View
          </Button>
          {"\n"}
          {"\n"}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;