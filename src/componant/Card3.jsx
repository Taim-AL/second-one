import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////img
import img1 from '../assets/images/portfolio/4.jpg'
import img2 from '../assets/images/portfolio/7.jpg'
import img3 from '../assets/images/portfolio/8.jpg'
//////icon
import AddIcon from '@mui/icons-material/Add';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

export default ()=>{
    return(<>
        <Row className='mx-0'>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='4'>
                        <div className='container mt-3'>
                            <img src={img1} alt="" className='w-100  imag' />
                            <div className='overlay'>
                                <div className='text'>
                                    <h1>Card 2</h1>
                                    <p>CARD</p>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                        <AddIcon/>
                                        <AllInclusiveIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className='container mt-3'>
                            <img src={img2} alt="" className='w-100  imag' />
                            <div className='overlay'>
                                <div className='text'>
                                    <h1>Card 1</h1>
                                    <p>CARD</p>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                        <AddIcon/>
                                        <AllInclusiveIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className='container mt-3'>
                            <img src={img3} alt="" className='w-100  imag' />
                            <div className='overlay'>
                                <div className='text'>
                                    <h1>Card 3</h1>
                                    <p>CARD</p>
                                    <div style={{display:"flex",justifyContent:"space-around"}}>
                                        <AddIcon/>
                                        <AllInclusiveIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
</>)}