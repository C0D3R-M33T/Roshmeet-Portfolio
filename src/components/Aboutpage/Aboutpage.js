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
                            I'm an explorer in this world who never settles for less. Extracting information and knowledge from everywhere I can get my hands on. Data is the new fuel and I'm using it efficiently to become better and better everyday. 
If I talk about myself, I'm Roshmeet Charkaborty. I'm doing my Major in Computer Science and Applications, and my interest and personal choice I'm exploring Data Science and DevOps for my future goals. 
Quick Trivia - I love light mode and I don't like to stay at home, unless I have to.
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
