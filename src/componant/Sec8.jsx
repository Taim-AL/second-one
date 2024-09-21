import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../assets/images/sec8.jpg';
//////icon
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export default ()=>{
    return(<>
        <hr />
        <Row className='mx-0 ' style={{marginTop:"8vw"}}>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='5'>
                        <img src={img} className='btn-5' alt="" />
                    </Col>
                    <Col md='7'>
                        <h2 className='mt-3'>
                            Voluptatem dignissimos provident quasi
                        </h2>
                        <p style={{color:"gray",fontFamily:"sans-serif",padding:"5px",marginBottom:"2vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                        <Row className='mx-0'>
                            <Col md='6'>
                                <div className='d-flex'>
                                    <SentimentSatisfiedOutlinedIcon style={{color:'#ffc451',fontSize:'7vh',marginTop:"0.5vw"}}/>
                                    <div>
                                        <h2>65</h2>
                                        <p style={{color:'gray',fontSize:"2vh"}}>Happy Clients consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='d-flex'>
                                    <TextSnippetOutlinedIcon style={{color:'#ffc451',fontSize:'7vh',marginTop:"0.5vw"}}/>
                                    <div>
                                        <h2>85</h2>
                                        <p style={{color:'gray',fontSize:"2vh"}}>Projects adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='d-flex'>
                                    <WatchLaterOutlinedIcon style={{color:'#ffc451',fontSize:'7vh',marginTop:"0.5vw"}}/>
                                    <div>
                                        <h2>35</h2>
                                        <p style={{color:'gray',fontSize:"2vh"}}>Years of experience aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='d-flex'>
                                    <WorkspacePremiumOutlinedIcon style={{color:'#ffc451',fontSize:'7vh',marginTop:"0.5vw"}}/>
                                    <div>
                                        <h2>20</h2>
                                        <p style={{color:'gray',fontSize:"2vh"}}>Awards rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}