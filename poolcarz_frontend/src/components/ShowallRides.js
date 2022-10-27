import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
const ShowallRides = () => {
    const [allRides,setAllrides] = useState([]);
    const [rideDetail,setRideDetails] = useState([]);
    const [rowstyle,setStyle] = useState(false);  
    const [id,setId] = useState('');
    const [book,showBook] = useState(false);
    const [cancel,showCancel] = useState(false);
    let [hoveStyle,setHoverStyle] = useState({
        background: ''
    })


 const [show, setShow] = useState(false);
 const handleShow = (rideDetail) => {
    //console.log(rideDetail)
    setRideDetails([rideDetail]);
    showBook(true);
    setAllrides([]);
    //setShow(true);
}
 const handleClose = () => setShow(false);

    useEffect(()=>{
        axios.get('http://localhost:5000/show_rides').then((res) => {
            console.log(res.data)
          
            setAllrides(res.data);            
        }).catch((err) => {
            console.log(err)
        })
    },[])


    const bookRide = () => {
        
       const data = { 'rider': rideDetail,
        'ridee':'admin'}
        console.log(data);
            axios.post('http://localhost:5000/book_ride',data)
            .then((res) => {
                console.log(res);
                setId(res.data.id)
                showBook(false);
                showCancel(true);
                //handleClose();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className='loginStyle'>
                   <div className='container' style={{                
                    height: '519px',
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
                      }} >Show All Rides</button>

                    <table style={{width:'100%',marginTop:'12px'}} className='table'>
                         {allRides.length != 0 && <thead className="thead-light">
                             <tr>
                                  <th>Start Point</th>
                                  <th>End Point</th>
                                  <th>Seats Available</th>
                             </tr>
                         </thead>
                         }
                         {
                          rideDetail != 0 && <thead className="thead-light">
                           <tr>
                                <th>name</th>
                                <th>pickUp</th>
                                <th>destination</th>
                                <th>car</th>
                                <th>seatsLeft</th>
                           </tr>
                       </thead> 
                         }
                         <tbody>
                            
                              {
                              allRides.length != 0 &&
                                allRides.map(ride => {
                                return (<tr key={ride.id}  onClick={ () => handleShow({_id:ride.id,id:ride.id,name:ride.name,pickUp: ride.pickUp,
                                   destination: ride.destination,car: ride.car,seatsLeft: ride.seatsLeft,__v: ride.__v
                                }) } >
                                        <td>{ride.pickUp}</td>
                                        <td>{ride.destination}</td>
                                        <td>{ride.seatsLeft}</td>
                                </tr>)
                        }) 
                             }
                             
                            {
                                rideDetail &&
                          
                                    rideDetail.map(ride => {
                                           return (<tr key={ride.id} >
                                             <td>{ride.name}</td>
                                             <td>{ride.pickUp}</td>
                                             <td>{ride.destination}</td>
                                             <td>{ride.car}</td>
                                             <td>{ride.seatsLeft}</td>
                                                  
                                           </tr>)
                                   })
                                   
                                 
                            }
                            
                         </tbody>
                    </table>
                            {
                                book && <button type="button" className='btn btn-primary' onClick={bookRide}>Book a Ride</button>
                            }
                {
                    cancel != 0 && <div>
                        <p style={{
                            marginTop: '43px',
                            textAlign: 'center',
                        }}>Ride booked. Id is {id}</p>
                    <button type="button" className='btn btn-danger' style={{
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        width: '15%',
                        position: 'absolute',
                        bottom: '106px',
                        left: '352px'
                  }}>Cancel Ride</button>
                  </div>
                 }   


                      <button type="button" className='btn btn-primary' style={{
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            width: '15%',
                            position: 'absolute',
                            bottom: '17px',
                            left: '352px',                            
                      }}>Offer a Rides!</button>
                    </div>
                
                </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{background: 'cornflowerblue'}}>
          <Modal.Title>Ride details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table style={{width:'100%',marginTop:'12px'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                 <th>Name</th>                             
                                  <th>Start Point</th>
                                  <th>End Point</th>
                                  <th>Car</th>
                                  <th>Seats Available</th>
                             </tr>
                         </thead>
                         <tbody>
                              {rideDetail ?
                              rideDetail.map(ride => {
                                     return (<tr key={ride.id} >
                                             <td>{ride.name}</td>
                                             <td>{ride.pickUp}</td>
                                             <td>{ride.destination}</td>
                                             <td>{ride.car}</td>
                                             <td>{ride.seatsLeft}</td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={bookRide}>Book a Ride</Button>
        </Modal.Footer>
      </Modal>
            </div>
        </>
    );
};

export default ShowallRides;