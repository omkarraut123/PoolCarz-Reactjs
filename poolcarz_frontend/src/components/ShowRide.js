import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowRide = () => {
    let navigate = useNavigate();
    return (
             <>
        <div className='loginStyle'>
               <div className='container' style={{                
                height: '238px',
                width: '54rem',
                position: 'fixed',
                top: '100px',
                left: '348px',}}>
            
            <div className="card card-body  h-10 p-1" style={{background:'cornflowerblue'}}>           
            <p className='card-title'>Book a Ride</p>
            </div>
                <div className="card card-body  h-100" style={{}}>           
                  <p className='card-text'>PoolCarz is a web application for car-pooling. The application allows users to share ride with others. User can either book a ride or offer a ride</p>
                  <button type="button" className='btn btn-primary' style={{
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        width: '15%',
                        margin: '0 auto',
                  }} onClick={ () => navigate('/show_rides/all')}>Show All Rides</button>

                  <button type="button" className='btn btn-primary' style={{
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        width: '15%',
                        marginTop: '36px',
                        marginLeft: '21rem'
                  }}>Offer a Rides!</button>
                </div>
            
            </div>
        </div>
    </>
    
    );
};

export default ShowRide;
