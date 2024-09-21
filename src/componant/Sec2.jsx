import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////////icon
import DoneAllIcon from '@mui/icons-material/DoneAll';
//////////images
import img from '../assets/images/about.jpg'

export default()=>{
    return(<>
        <Row className='mx-0 mt-5' style={{fontFamily:"-moz-initial"}}>
            <Col md='1'></Col>
            
            <Col md='5' >
                <h3>
                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                </h3>
                <div style={{color:"gray"}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div style={{display:"flex"}}>
                        <DoneAllIcon style={{color:"#ffc451"}}/><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='d-flex'>
                        <DoneAllIcon style={{color:"#ffc451"}}/><p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>
                    <div className='d-flex'>
                        <DoneAllIcon style={{color:"#ffc451"}}/><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <p className='p-2'>          
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                </div>
            </Col>
            
            <Col md='5'>
                <img className='w-100' src={img} alt="" />
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}