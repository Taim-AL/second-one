import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default({img , name , about })=>{
    return(<>
        <Row className='mx-0'>
            <Col md='4'></Col>
                
            <Col md='4' style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                <div className='con-avatar'>
                    <img className='avatar' src={img} alt="" />
                </div>
            </Col>
            <Col md='4'></Col>
        </Row>
        <h2 className='h2-9'>{name}</h2>
        <h5 className='h5-9'>{about}</h5>
        <p className='p-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente tempore nisi, maiores laboriosam in reiciendis quo, voluptatum dolorum possimus dolorem nulla animi aliquid, exercitationem quisquam accusamus vel nam perspiciatis!</p>
</>)}