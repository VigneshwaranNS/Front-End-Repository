import React from "react";

function UserLogin(){

    const submitHandle =(e) =>{

        e.preventDefault()
        const data ={
            user_name:e.target.userName.value,
            password:e.target.password.value
        }
        const data2 = JSON.stringify(data)

        console.log(data2)
        debugger
        fetch("http://localhost:8080/API/getEmployee",
        {
            method:"POST",
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            
            body:data2
          }).then(res=>res.json()).then(val=>console.log(val))   
        
    }

    return (

        <div className="formDiv">
            <form onSubmit={(e)=>submitHandle(e)}>
            <input name="userName" type="text" placeholder="userName" /><br/>
            <input name="password" type="password" placeholder="password" /><br/>
            <button>Submit</button>
            </form>

        </div>


    );

    
 

}

export default UserLogin();