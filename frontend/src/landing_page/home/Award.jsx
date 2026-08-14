import React from 'react';

function Awards() {
    return ( 
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-6 mb-3">
                        <img src='media/images/homeAward.svg' alt='home-award' className='mb-5 mt-4 col-9 '></img>
                    </div>
                    <div className="col-6 mb-4 mt-4">
                        <h1 className="mb-3">Largest stock broker in india </h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all order volumes in india daily by trading and investing in:</p>

                        <div className="row  mt-4 mb-2">
                            <div className="col-6">
                                <ul>
                                    <li><p>Featurs and Options</p></li>
                                    <li><p>Commodity detivatives</p></li>
                                    <li><p>Currency detivatives</p></li>
                                </ul>
                            </div>

                            <div className="col-6">
                                <ul>
                                    <li><p>Stocks & IPOs</p></li>
                                    <li><p>Direct mutual funds</p></li>
                                    <li><p>Bonds and govt. securities</p></li>
                                </ul>
                            </div>

                            <img src="media/images/pressLogos.png" className="mt-3" style={{width:"90%"}}></img>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
     );
}

export default Awards;