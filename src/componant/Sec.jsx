import React from 'react';
import { Col, Row } from 'react-bootstrap';
///////icon
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddchartIcon from '@mui/icons-material/Addchart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import TollIcon from '@mui/icons-material/Toll';
///////component
import Card1 from './Card1';

export default ()=>{
    const data=[
        {
            icon: <StorefrontIcon style={{fontSize:"5vh"}}/> ,
            titel:"Lorem Ipsum",
        },
        {
            icon:< AddchartIcon style={{fontSize:"5vh"}}/> ,
            titel:"Dolor Sitema",
        },
        {
            icon: <CalendarMonthIcon style={{fontSize:"5vh"}}/> ,
            titel:"Sedare Perspiciatis",
        },
        {
            icon:< FormatPaintIcon style={{fontSize:"5vh"}}/> ,
            titel:"Magni Dolores",
        }, {
            icon: <TollIcon style={{fontSize:"5vh"}}/> ,
            titel:"Nemos Enimade",
        },
    ]
    return(
        <>
        <div className='div-1'>
            <Row className='mx-0'>
                <Col md='4'></Col>
                
                <Col md='4'>
                    <h1 className='h1-1 text-center'>
                        Powerful Digital Solutions With Gp.
                    </h1>
                    <p className='p-1 text-center'>We are team of talented digital marketers</p>
                </Col>
                
                <Col md='4'></Col>
            </Row>
            <Row className='mx-0' >
                <Col md="2"></Col>
            
                <Col md="9 ">
                    <Row className='mx-0'>
                         {data.map((e)=>{
                            return(<>
                                <Col md='2'>
                                    <Card1 icon={e.icon} titel={e.titel}/>
                                </Col>
                            </>
                                )})}
                        <Col md='1'></Col>
                    </Row>
                </Col>
           </Row>
        </div>
        </>
    )

}