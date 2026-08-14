import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <>
            <div className='container p-5 mb-5'>
                <div className='row text-center'>
                    <h1 className='mt-5 fs-2'>404 - Page NotFound </h1>
                    <p className='text-muted'>sorry, the page you are looking for does not exist. </p>
                    <Link to="/"><button className='p-1 mt-3 btn btn-primary fs-5' style={{width:"23%", margin:"0 auto"}}>Go To Home</button></Link>
                </div>
            </div>
        </>
     );
}

export default NotFound;