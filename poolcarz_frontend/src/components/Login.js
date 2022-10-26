import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
 const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [textStyle, setTextStyle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log("Inside handle submit..!");
    if(userName =='' || password==''){
        setMessage("All fields are mandatory");
        setTextStyle("danger");
    } 
    else {
        const data = { username: userName, password: password };
        axios.post('http://localhost:5000/login', data)
        .then((res) => {
            console.log(`Status: ${res.status}`);
            console.log('Student Info: ', res.data);
           if(res.data.message == 'valid'){
            console.log("Login Successfully...!");         
        setMessage("Looks good!");
        setTextStyle("success");
        navigate('/show_rides')
           }else{
            console.log('Wrong Creds', res.data);
        setMessage("Please enter a valid Credentials");
        setTextStyle("danger");
           }
        }).catch((err) => {
            console.error(err);
           
        }); 
       
        
}  
}
    return (
        <>            

        <div className='loginStyle'>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
            </div>
                 <form onSubmit={handleSubmit}>
                    <input type="text" id="login" className="fadeIn second" name="userName" placeholder="username"  onChange={(e) => {setUserName(e.target.value)}}/>
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"  onChange={(e) => {setPassword(e.target.value)}}/>
                    {/* <input type="submit" className="fadeIn fourth" value="Log In" /> */}
                    <button type="submit" className="btn btn-success" style={{    margin: "14px",
            width: "113px"}} >Login</button>
            { message !== '' && <div className={`text text-${textStyle}`}>{message}</div>}<br/>
                 </form>
        
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
        
          </div>
        </div>
        </div>  
                    </>
    );
};

export default Login;