import React from 'react';
import { Col, Row } from 'react-bootstrap';
/////////////component
import Card5 from './Card5';
/////////images\
import img1 from '../assets/images/team/1.jpg';
import img2 from '../assets/images/team/2.jpg';
import img3 from '../assets/images/team/3.jpg';
import img4 from '../assets/images/team/4.jpg';

export default ()=>{
    const data=[
        {
            img: img1,
            title:"Walter White",
            about:"Chief Executive Officer",
        },
        {
            img: img2,
            title:"Sarah Jhonson",
            about:"Product Manager",
        },
        {
            img: img3,
            title:"William Anderson",
            about:"CTO",
        },
        {
            img: img4,
            title:"Amanda Jepson",
            about:"Accountant",
        },
    ]
    return(<>
        <Row className='mx-0 ' style={{marginTop:"5vw"}}>
            <Col md='1'></Col>
            
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='3' className='d-flex  align-items-center'>
                        <h5 style={{color:"gray", fontFamily:"sans-serif"}}>TEAM</h5>
                        <div style={{width:'50%',height:"2px",backgroundColor:"#ffc451",marginBottom:"3px"}}></div>
                    </Col>
                </Row>
                <Row className='mx-0 mt-1'>
                    <Col md='6'>
                        <h1 style={{fontFamily:"sans-serif"}}>CHECK OUR TEAM</h1>
                    </Col>
                </Row>
                <Row className='mx-0'>
                    {data.map((e)=>{return(<>
                        <Col md='3'>
                            <Card5 img={e.img} title={e.title} about={e.about}/>
                        </Col>
                    </>)})}
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}