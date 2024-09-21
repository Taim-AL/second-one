import React from 'react';
import { Col, Row } from 'react-bootstrap';
//////////////icon
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PublicIcon from '@mui/icons-material/Public';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
////////////////component
import Card2 from './Card2';

export default ()=>{
    const data=[
        {
            icon:<SportsBasketballOutlinedIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Lorem Ipsum",
            about:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        },
        {
            icon:<DescriptionOutlinedIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Sed ut perspiciatis",
            about:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            icon:<SpeedOutlinedIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Magni Dolores",
            about:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        },
        {
            icon:<PublicIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Nemo Enim",
            about:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        },
        {
            icon:<OndemandVideoIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Dele cardo",
            about:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
        },
        {
            icon:<AccountBalanceOutlinedIcon style={{fontSize:"6vh",padding:"5px"}}/>,
            title:"Divera don",
            about:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
        },
    ]
    return(<>
        <Row className='mx-0 mt-5'>
            <Col md='1'></Col>
            
            <Col md='10' className='mt-5'>
                <Row className='mx-0'>
                    <Col md='3' className='d-flex  align-items-center'>
                        <h5 style={{color:"gray", fontFamily:"sans-serif"}}>SERVICES</h5>
                        <div style={{width:'50%',height:"2px",backgroundColor:"#ffc451",marginBottom:"3px"}}></div>
                    </Col>
                </Row>
                <Row className='mx-0 mt-1'>
                    <Col md='5'>
                        <h1 style={{fontFamily:"sans-serif"}}>CHECK OUR SERVICES</h1>
                    </Col>
                </Row>
                <Row className='mx-0'>
                    {data.map((e)=>{
                        return(
                            <>
                            <Col md='4'>
                                <Card2 icon={e.icon} title={e.title} about={e.about}/>
                            </Col>
                            </>)})}
                </Row>
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}