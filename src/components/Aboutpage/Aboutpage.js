import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                        I am a dedicated professional with a strong background in product design and development. My expertise includes crafting impactful UI/UX solutions and developing comprehensive design systems. I’ve managed complex projects, from branding and user experience enhancements to server and database management. I’m passionate about bridging the gap between user needs and technology, consistently seeking innovative solutions to drive results. Outside of work, I enjoy exploring new technologies and engaging in creative projects, always striving to enhance user experiences and make a meaningful impact.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>Bootstrap | Tailwind</li>
                                    <li>JavaScript | TypeScript</li>
                                    <li>Python | C</li>
                                    <li>SQL | SQLite3 | MongoDB</li>
                                </Col>
                                <Col md={5}>
                                    <li>Figma | LOOM | Illustrator</li>
                                    <li>Docker | Kuberneties</li>
                                    <li>Jira - Agile/Scrum</li>
                                    <li>QGIS | ArcGIS | Seaborn</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
