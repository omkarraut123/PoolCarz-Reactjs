import axios from 'axios';
import React from 'react';
import { useState } from 'react';
const OfferRide = () => {
    const [name, setName] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [destination,setDestination] = useState("");
    const [car, setCar] = useState("");
    const [seatsLeft, setSeatsLeft] = useState("");
    const [message,setMessage] = useState("")
    

  
    function handleSubmit(event) {
      event.preventDefault();
      const data = {name: name, pickUp: pickUp, destination: destination, car: car,  seatsLeft: seatsLeft }
       axios.post('http://localhost:5000/offer_ride',data)
       .then((res) => {
        console.log(res.data);
        document.getElementById('submit').setAttribute("style","display:none;")
        setMessage(res.data.message)
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
                    <p className='card-title'>Car Ride Registration Form</p>
                    </div>
                    <div className="card card-body  h-100" style={{}}>  
        <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"   style={{
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            marginLeft: '65px',
                        }} value={name}
                        onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickUp">Start Location</label>
                        <input type="text" className="form-control" id="pickUp"  style={{
                            paddingLeft: '0px',
                            paddingRight: '0px', 
                            marginLeft: '6px',       
                        }} value={pickUp}
                        onChange={(e) => setPickUp(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Destination</label>
                        <input type="text" className="form-control" id="destination"  style={{
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            marginLeft: '26px',
                        }} value={destination}
                        onChange={(e) => setDestination(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Car</label>
                        <input type="text" className="form-control" id="car"  style={{
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            marginLeft: '82px',
                        }} value={car}
                        onChange={(e) => setCar(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="seatsLeft">Seats Available</label>
                        <input type="text" className="form-control" id="seatsLeft" value={seatsLeft}
                                onChange={(e) => setSeatsLeft(e.target.value)} required/>
                      </div>
            <button type="submit" id = "submit" className="btn btn-primary">Submit</button>
            { message !== '' && <div className= 'text text-success'>{message}</div>}
        </form>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default OfferRide;