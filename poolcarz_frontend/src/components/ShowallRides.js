import axios from 'axios'
import React, { Component } from 'react'

export class ShowallRides extends Component {

    constructor(props) {
        super(props)
        this.state = {
             allRides: [],
             isShow: false,
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/show_rides').then((res) => {
            console.log(res.data)
            this.setState({
                allRides: res.data,
                isShow: true,
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
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
                         <thead className="thead-light">
                             <tr>
                                  <th>Start Point</th>
                                  <th>End Point</th>
                                  <th>Seats Available</th>
                             </tr>
                         </thead>
                         <tbody>
                              {this.state.allRides ?
                              this.state.allRides.map(ride => {
                                     return (<tr key={ride.id}>
                                             <td>{ride.pickUp}</td>
                                             <td>{ride.destination}</td>
                                             <td>{ride.seatsLeft}</td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table>




                      <button type="button" className='btn btn-primary' style={{
                            paddingLeft: '0px',
                            paddingRight: '0px',
                            width: '15%',
                            position: 'absolute',
                            bottom: '17px',
                            left: '352px'
                      }}>Offer a Rides!</button>
                    </div>
                
                </div>
            </div>
        </>
            )  
    }
}

export default ShowallRides
