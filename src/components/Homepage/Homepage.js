import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Roshmeet Chakraborty</h2>
            <span></span>
            <Text />
            <strong>Building ArkTech || Ex intern @DRDO @Notion @ IBM @RedHat || Satellite Imagery Sensing || UX Interaction Designer || Product Designer</strong>
            <br></br>
            <button onClick={() => {
              window.open("https://github.com/C0D3R-M33T");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/roshmeet/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/RoshmeetChakra3");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
           
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
