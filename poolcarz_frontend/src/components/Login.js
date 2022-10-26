import React, { Component } from 'react'
import './Login.css';
import axios from 'axios';
export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
             userName: '',
             password: '',
             message: '',
             textStyle: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            message:'',
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
  
        //console.log("Inside handle submit..!");
        if(this.state.userName =='' || this.state.password==''){
            this.setState({message:"All fields are mandatory", textStyle:"danger"})
        } 
        else {
            const data = { username: this.state.userName, password: this.state.password };
            axios.post('http://localhost:5000/login', data)
            .then((res) => {
                console.log(`Status: ${res.status}`);
                console.log('Student Info: ', res.data);
               if(res.data.message == 'valid'){
                console.log("Login Successfully...!");
                this.setState({message:"Looks good!",
                      textStyle:"success"
                        })
               }else{
                console.log('Wrong Creds', res.data);
                this.setState({message:"Please enter a valid Credentials",
                        textStyle:"danger"
                     })
               }
               
            }).catch((err) => {
                console.error(err);
               
            }); 

            
    }  
}

    render() {
        return (
            <>            

<div className='loginStyle'>
<div className="wrapper fadeInDown">
  <div id="formContent">
    <div className="fadeIn first">
    </div>
         <form onSubmit={this.handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="userName" placeholder="username"  onChange={this.handleChange}/>
            <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"  onChange={this.handleChange}/>
            {/* <input type="submit" className="fadeIn fourth" value="Log In" /> */}
            <button type="submit" className="btn btn-success" style={{    margin: "14px",
    width: "113px"}} >Login</button>
    {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br/>
         </form>

    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
            </div>  
            </>
        )
    }
}

export default Login
