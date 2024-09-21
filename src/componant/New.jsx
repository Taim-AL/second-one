import React from 'react';
export default({change})=>{
    return(<>
        <div style={{display:"flex",justifyContent:'center'}}>
            <button onClick={change} className='mt-5 btn btn-danger'>
                Click me
            </button>
        </div>
</>)}