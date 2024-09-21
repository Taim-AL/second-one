import React from 'react';
/////////icon
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default ({img , title , about})=>{
    return(<>
        <div className='shadow'>
            <div className='container1 mt-3'>
                <img src={img} alt="" className='w-100  imag1' />
                <div className='overlay1'>
                    <div className='text1'>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <button className='icon-10' ><TwitterIcon/></button>
                            <button className='icon-10'><FacebookOutlinedIcon/></button>
                            <button className='icon-10'><InstagramIcon/></button>
                            <button className='icon-10'><TelegramIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='h4-10'>{title}</h4>
            <p className='p-2'>{about}</p>
        </div>           
</>)}