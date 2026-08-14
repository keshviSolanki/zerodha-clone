import React from 'react';

function Education() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row mt-5 mb-5">
                    <div className="col-6 mt-5">
                        <img className='mt-2' src='media/images/education.svg' alt='education'></img>
                    </div>
                    <div className="col-6 mt-5">
                        <h1 className='mb-2 mt-4 fs-2'>Free and open market education</h1>

                        <p className='mb-3'>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading.
                        </p>

                        <a href="#" className="d-block mb-5" style={{textDecoration:"none"}}>
                            Varsity <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        <p className='mb-3'>
                            TradingQ&A, the most active trading and investment market related queries.
                        </p>

                        <a href="#" className="d-block" style={{textDecoration:"none"}}>
                            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Education;