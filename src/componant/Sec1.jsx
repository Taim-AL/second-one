import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from './Card';

export default()=>{
    const data =[{
        name:'homam',
        age:'20',
        description:"my name is homam bla bla bla"
    },
    {
        name:'taim',
        age:'20',
        description:"my name is taim bla bla bla"
    },
    {
        name:'ta7seen',
        age:'20',
        description:"my name is ta7seen bla bla bla"
    },
    {
        name:'morhaf',
        age:'20',
        description:"my name is morhaf bla bla bla"
    },
    {
        name:'rayan',
        age:'20',
        description:"my name is rayan bla bla bla"
    },
    {
        name:'fozy',
        age:'20',
        description:"my name is fozy bla bla bla"
    },
]
    return(<>
        <Row className='mx-0'>
            {data.map((e)=>{
                return(
                    <Col md="4" className='mt-3'>
                        <Card titel={e.name} age={e.age} description={e.description}/>
                    </Col>
                )})}
        </Row>
</>)}