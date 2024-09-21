import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default ()=>{
    return(<>
        <Row className='mx-0 mt-5 sec-6'>
            <Col md='1'></Col>
            <Col md='10' className='mt-5'>
                <h1 className='h1-6'>Call To Action</h1>
                <p className='p-6'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <button className='but-call'>Call To Action</button>
                </div>
            </Col>
            <Col md='1'></Col>
        </Row>
    </>)}