import React from 'react';
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import varalika from '../../Assets/Abstract.svg';
//import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png';
//import olximage from '../../Assets/olx-clone image.png';
//import netfliximage from '../../Assets/React-App-netflix-clone.png';
//import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png';
//import charlespizza from '../../Assets/Charlestown-Pizza.png';
//import todolist from '../../Assets/todolist.png';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={varalika}
                isBlog={false}
                title="Varalika Developers"
                description="Varalika Developers' Emerald Heights offers 3 and 4 BHK luxury housing with top-class amenities in a prime location. The website provides comprehensive details about amenities, features, flooring, planning, and architecture."
                ghLink="https://www.figma.com/design/iHNK6myuRI1Alavs66OdJT/Varalika-Developers?t=ExfmVlvwbyoddMe5-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={olximage}
                isBlog={false}
                title="SAAS Dashboard Figma"
                description="Base provides a comprehensive employee management SaaS dashboard, streamlining HR processes with features like real-time analytics, performance tracking, and automated tasks to enhance productivity and organizational success."
                ghLink="https://www.figma.com/design/09XZ9jWhYotOCQk9ndVgGB/Saas-Dashboard?node-id=0-1&t=QKVNn7zuC9QzQO0r-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={netfliximage}
                isBlog={false}
                title="WorkIT Ltd. Design System"
                description="WorkIt is a project management app with a comprehensive design system created in Figma, featuring intuitive interfaces, consistent UI components, and seamless user experiences to boost productivity and collaboration."
                ghLink="https://www.figma.com/design/SFPNlYY2lPmdi9nRWkmnue/Design-systems?node-id=309-5208&t=KYbPBGL9upcYuFMs-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={gridlinesbuilders}
                isBlog={false}
                title="Dash Stack E-Commerce Dashboard"
                description="Dash Stack is an integrated dashboard for e-commerce and employee management, offering real-time analytics, inventory tracking, product management, and HR tools to streamline operations and boost efficiency."
                ghLink="https://www.figma.com/design/BIXiDFPv2c0wUlSIqkYeU3/Dash-Stack?node-id=0-40222&t=Rtg3f34MlGSiMndc-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={charlespizza}
                isBlog={false}
                title="Pro Fitness App"
                description="Pro Fitness is an app for tracking workouts, planning diets, setting fitness goals, and scheduling activities. It offers personalized plans, progress monitoring, and reminders to optimize fitness routines."
                ghLink="https://www.figma.com/design/0mrzCbYlO1tm3H4iRwnyqO/Pro-Fitness-App?node-id=0-1&t=Qg4TbUOBKAH6poTc-1"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={todolist}
                isBlog={false}
                title="Headstart DSA"
                description="Want a job? Want to win Competitive Coding contests? Want to create applications? Want to make a website? Get hands-on experience with Data Structures and algorithms."
                ghLink="https://roshmeet.notion.site/Data-Structures-4ad422595f1e46afb9e56a0d36203859"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={todolist}
                isBlog={false}
                title="Lofi With Meet"
                description="Lofi with Meet is an aesthetic platform for soft lofi music, featuring a cute video with customizable weather and day modes. It offers ASMR sounds like rain, fireplace, and more, alongside music, a Pomodoro timer, and a to-do list for productivity and organization."
                ghLink="https://lofiwithmeet.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={todolist}
                isBlog={false}
                title="PassVault"
                description="PassVault is a secure password generator and database that uses encrypted RSA and salt hashing to protect and store passwords safely, ensuring high-level security and privacy for sensitive information."
                ghLink="https://github.com/C0D3R-M33T/PassVault-2.0"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                //imgPath={todolist}
                isBlog={false}
                title="QGIS Earth Engine"
                description="The QGIS Earth Engine Plugin integrates Google Earth Engine with QGIS, enabling users to access, analyze, and visualize Earth Engine's satellite imagery and geospatial data directly within QGIS."
                ghLink="https://github.com/C0D3R-M33T/QGIS-Earth-Engine"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;