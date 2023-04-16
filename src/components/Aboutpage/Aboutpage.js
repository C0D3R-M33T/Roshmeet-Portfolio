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
                            My name is Roshmeet Chakraborty
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>C/C++ </li>
                                </Col>
                                <Col md={5}>
                                    <li>MySQL/SQLite3/PostgreSQL</li>
                                    <li>Docker/Kuberneties</li>
                                    <li>Linux and Distributions</li>
                                    <li>Ui/Ux</li>
                                    <li>DevOps - Git</li>
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