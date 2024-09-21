import React from 'react';
import { Col, Row } from 'react-bootstrap';
////////////images
import img from '../assets/images/sec3.jpg';
///////////icon
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default()=>{
    return(<>
        <Row className='mx-0 mt-5'>
            <Col md='1'></Col>
            
            <Col md='5'>
                <img className='w-100' src={img} alt="" />
            </Col>
            
            <Col md='5' style={{fontFamily:"sans-serif"}}>
                <div className='d-flex'>
                    <LibraryBooksOutlinedIcon style={{color:'#ffc451',fontSize:'7vh'}}/>
                    <div>
                        <h5>Est labore ad</h5>
                        <p style={{color:'gray'}}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className='d-flex mt-5'>
                    <ViewInArIcon style={{color:'#ffc451',fontSize:'7vh'}}/>
                    <div>
                        <h5>Harum esse qui</h5>
                        <p style={{color:'gray'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <PhotoLibraryOutlinedIcon style={{color:'#ffc451',fontSize:'6.5vh'}}/>
                    <div>
                        <h5>Aut occaecati</h5>
                        <p style={{color:'gray'}}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                </div>
                <div className='d-flex mt-4'>
                    <ShieldOutlinedIcon style={{color:'#ffc451',fontSize:'7vh'}}/>
                    <div>
                        <h5>Beatae veritatis</h5>
                        <p style={{color:'gray'}}>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                </div>
            </Col>
            
            <Col md='1'></Col>
        </Row>
    </>)}