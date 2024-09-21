import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////////////imag
import img1 from '../assets/images/map.png';
////////icon
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/Call';

export default ()=>{
    return(<>
        <Row className='mx-0' style={{marginTop:"9vw"}}>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='3' className='d-flex  align-items-center'>
                        <h5 style={{color:"gray", fontFamily:"sans-serif"}}>CONTACT</h5>
                        <div style={{width:'50%',height:"2px",backgroundColor:"#ffc451",marginBottom:"3px"}}></div>
                    </Col>
                </Row>
                <Row className='mx-0 mt-1'>
                    <Col md='6'>
                        <h1 style={{fontFamily:"sans-serif"}}>CONTACT US</h1>
                    </Col>
                </Row>
                <img src={img1} className='w-100 mt-5' alt="" />
                <Row className='mx-0 mt-5'>
                    <Col md='4'>
                        <div className='d-flex'>
                            <AddLocationOutlinedIcon style={{color:'black',fontSize:'6vh',backgroundColor:"#ffc451",padding:"1vh",borderRadius:"5px",marginRight:"8px"}}/>
                            <div>
                                <h5>Location:</h5>
                                <p style={{color:'gray'}}>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <EmailOutlinedIcon style={{color:'black',fontSize:'6vh',backgroundColor:"#ffc451",padding:"1vh",borderRadius:"5px",marginRight:"8px"}}/>
                            <div>
                                <h5>Email:</h5>
                                <p style={{color:'gray'}}>info@example.com</p>
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <CallIcon style={{color:'black',fontSize:'6vh',backgroundColor:"#ffc451",padding:"1vh",borderRadius:"5px",marginRight:"8px"}}/>
                            <div>
                                <h5>Call:</h5>
                                <p style={{color:'gray'}}>+1 5589 55488 55s</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='8'>
                        <Row className='mx-0 '>
                            <Col md='6 mt-1'>
                                <input className='inp-1' type="text" placeholder='Your Name' />
                            </Col>
                            <Col md='6 mt-1'>
                                <input className='inp-1' type="email" placeholder='Your Email' />
                            </Col>
                        </Row>
                        <Row className='mx-0'>
                            <Col md='12 mt-3'>
                                <input type="text" placeholder='Subject' className='inp-1'/>
                            </Col>
                        </Row>
                        <Row className='mx-0'>
                            <Col md='12 mt-3'>
                                <textarea name="Message" id="" cols="30" rows="3" className='inp-1'>Message</textarea>
                            </Col>
                        </Row>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1vw"}}>
                            <button className='but-11'>Send message</button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md='1'></Col>
        </Row>
    </>)}