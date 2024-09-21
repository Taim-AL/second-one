import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
////////icon
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default ()=>{
    return(<>
        <Row style={{backgroundColor:"#151515" ,borderBottom:"1px solid #222222", padding:"60px 0 30px 0",marginTop:"5vw"}} className='mx-0'>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='3' className='mb-3'>
                        <div style={{display:"flex",fontFamily:"-moz-initial"}}>
                            <h1 style={{color:"white"}}>GP</h1>
                            <h1 style={{color:"gold"}}>.</h1>
                        </div>
                        <p className='p-foot'>
                            A108 Adam Street <br/>
                            NY 535022, USA<br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                        </p>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:"1vw"}}>
                            <button className='icon-foot' ><TwitterIcon/></button>
                            <button className='icon-foot'><FacebookOutlinedIcon/></button>
                            <button className='icon-foot'><InstagramIcon/></button>
                            <button className='icon-foot'><TelegramIcon/></button>
                            <button className='icon-foot'><LinkedInIcon/></button>
                        </div>
                    </Col>
                    
                    <Col md='4'>
                        <Row className='mx-0'>
                            <Col md='6' className='mb-3'>
                                <h4 className='h4-foot'>Useful Links</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Home
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            About us
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Services
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Terms of service
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Privacy policy
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                            
                            <Col md='6' className='mb-3'>
                                <h4 className='h4-foot'>Our Services</h4>
                                <ul style={{listStyle:"none"}}>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                             Web Design 
                                        </p>   
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Web Development
                                        </p>    
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Product Management
                                        </p>    
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Marketing
                                        </p>
                                    </li>
                                    <li>
                                        <p className='li-foot'>
                                            <strong style={{color:"#ffc451"}}>#</strong>
                                            Graphic Design
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col md='5'className='mb-3'>
                        <h4 className='h4-foot'>
                            Our Newsletter
                        </h4>
                        <p className='p-foot' style={{fontSize:"18px",padding:"1vw"}}>
                            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                        </p>
                        <Form className="d-flex mt-3">
                            <Form.Control
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                            />
                                <button className='but-foot'>Subscribe</button>
                        </Form>
                    </Col>
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
        <Row className='mx-0 ' style={{backgroundColor:"black"}}>
            <Col md='4'></Col>
            
            <Col md='4' className='text-center mt-5 mb-3'>
                <h4 className='h4-foot'>
                    © Copyright <strong> Gp. </strong>  All Rights Reserved
                </h4>
                <p className='p-foot'>Designed by <strong style={{color:"#ffc451"}}> Taim AL</strong></p>
            </Col>
            
            <Col md='4'></Col>
        </Row>
</>)}