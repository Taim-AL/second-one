import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
///////////component
import All from './All';
import App1 from './App1';
import Card3 from './Card3';
import Web from './Web';

export default ()=>{
    const [color1,Setcolor1]=useState("#ffc551d3");
    const [color2,Setcolor2]=useState("white");
    const [color3,Setcolor3]=useState("white");
    const [color4,Setcolor4]=useState("white");
    const [but,Setbut]=useState("1");
    return(<>
        <Row className='mx-0'>
            <Col md='1'></Col>
            <Col md='10'>
                <Row className='mx-0'>
                    <Col md='3' className='d-flex  align-items-center'>
                        <h5 style={{color:"gray", fontFamily:"sans-serif"}}>PORTFOLIO</h5>
                        <div style={{width:'50%',height:"2px",backgroundColor:"#ffc451",marginBottom:"3px"}}></div>
                    </Col>
                </Row>
                <Row className='mx-0 mt-1'>
                    <Col md='6'>
                        <h1 style={{fontFamily:"sans-serif"}}>CHECK OUR PORTFOLIO</h1>
                    </Col>
                </Row>
            </Col>
            <Col md='1'></Col>
            <Row className='mx-0'>
                <Col md='4'></Col>
                <Col md='4'>
                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <button className='but-use' style={{backgroundColor:color1}} onClick={()=>{
                            Setbut("1")
                            Setcolor1("#ffc551d3")
                            Setcolor2("white")
                            Setcolor3("white")
                            Setcolor4("white")
                        }}>ALL</button>
                        <button className='but-use' style={{backgroundColor:color2}} onClick={()=>{
                            Setbut("2")
                            Setcolor2("#ffc551d3")
                            Setcolor1("white")
                            Setcolor3("white")
                            Setcolor4("white")
                        }}>APP</button>
                        <button className='but-use' style={{backgroundColor:color3}} onClick={()=>{
                            Setbut("3")
                            Setcolor3("#ffc551d3")
                            Setcolor1("white")
                            Setcolor2("white")
                            Setcolor4("white")
                        }}>CARD</button>
                        <button className='but-use' style={{backgroundColor:color4}} onClick={()=>{
                            Setbut("4")
                            Setcolor4("#ffc551d3")
                            Setcolor1("white")
                            Setcolor2("white")
                            Setcolor3("white")
                        }}>WEB</button>
                    </div>
                </Col>
                <Col md='4'></Col>
            </Row>
            {but ==="1"?<All/> : ""}
            {but ==="2"?<App1/> : ""}
            {but ==="3"?<Card3/> : ""}
            {but ==="4"?<Web/> : ""}
        </Row>
    </>)}