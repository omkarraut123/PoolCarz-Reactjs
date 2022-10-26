import React from 'react';

const NavBar = () => {
    return (
        <>
    <div>
        <nav style={{padding: "1px 16px",backgroundColor:'black'}}>
            <h3 style={{color: "white"}}>PoolCarz</h3>
        </nav> 
        <div style={{paddingTop: "1px",backgroundColor:'gray'}}>
            <h3 style={{color: "white",position: "relative",fontSize: "24px",textAlign: "center",marginBottom: "0px"}}>Friends don't let friends ride alone.</h3>
        </div> 
        </div>       
        </>
    );
};

export default NavBar;