import React, { useState } from 'react';

export default ({titel , age , description})=>{
    const [homam,Sethomam] = useState(false)
    return(
        <>
        <div className='card shadow'>
            <h1 className='text-center card-haeder'>{titel}</h1>
            <div className='card-body'>
            <h5 className='text-center'>Age = {age}</h5>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button className='btn btn-dark ' onClick={()=>{Sethomam(Prev => !Prev)}} >
            description
            </button>
            </div>
            
            <p className='text-center'>
            { homam && description }
            </p>
            
            </div>

        </div>
        </>
    )
}