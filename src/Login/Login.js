import React from "react";

function UserLogin(){

    const submitHandle =(e) =>{

        e.preventDefault()
        const data ={
            user_name:"fun",
            password:"123456"
        }

        fetch("http://localhost:8080/API/getEmployee",
        {
            method:"GET",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(data)
          }).then(res=>res.json()).then(val=>console.log(val))   
        
    }

    return (

        <div className="formDiv">
            <form>
            <input type="text" placeholder="userName" /><br/>
            <input type="password" placeholder="password" /><br/>
            <button onClick={submitHandle}>Submit</button>
            </form>

        </div>


    );

    
 

}

export default UserLogin();