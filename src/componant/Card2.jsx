import React from 'react';

export default({icon , title , about})=>{
    return(<>
        <div className='text-center card card-2 mt-3'>
            <div style={{display:"flex",justifyContent:"center" , alignItems:"center"}}>
                <div className='con-icon'> 
                    {icon}
                </div>
            </div>
            <h3 className='text-center h3-1' >{title}</h3>
            <p className='text-center ' style={{color:"gray",fontFamily:"sans-serif",padding:"5px",marginBottom:"2vw"}}>{about}</p>
        </div>
</>)}