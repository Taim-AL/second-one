import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////////component
import Splide2 from './Splide2';

export default ()=>{
    return(<>
        <Row className='mx-0 sec9'>
            <Col md='1'></Col>
            
            <Col md='10' >
                <Splide2/>
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}