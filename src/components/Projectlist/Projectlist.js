import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={useradminpanel}
                isBlog={false}
                title="S.H.A.R.P"
                description="A simple helpful assistant for regular purpose, that can serve many handsfree operations without user action except voice commands that can control the entire system to provide seamless functionality."
                ghLink="https://bit.ly/SharpHome"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={olximage}
                isBlog={false}
                title="PassVault"
                description="This is an anonymous and secured credentials vault and encryption system for privacy and easy feasibility of credentials all over the web and keeping it safe and sound without the worry of "
                ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={netfliximage}
                isBlog={false}
                title="MedDetected"
                description="This software detects the medicine and it's expiry date and converts the image texts and it's image processing analysis to speech and voice response is given as feedback. Especially useful for grandparents and blind persons."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={gridlinesbuilders}
                isBlog={false}
                title="Anony's Journal"
                description="The safe and secured journal for private journalling and note taking. Let keep your secrets, a secret. Like Anne Frank said people can judge you, but a paper can never judge and it's the best lisner"
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={charlespizza}
                isBlog={false}
                title="I traced you"
                description="get live location of all your device and never lose then. "
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={todolist}
                isBlog={false}
                title="Headstart DSA"
                description="Want a job? Want to win Competetive Coding contests? Want to create applications? Want to make Website? Get hands on experience with Data Structures and algorithms."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
