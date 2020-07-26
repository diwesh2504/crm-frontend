import React from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
function AdminLogin(){
    const [adminDetails,setAdminDetails]=React.useState({});
    const history=useHistory();
    
    function onSubmit(e){
      e.preventDefault();
      let id=document.getElementById("adminmail").value;
      let pass=document.getElementById("adminpass").value;
      fetch(`https://crm-backendt.herokuapp.com/${id}`)
      .then(res=>res.json()
      ).then(data=>{
        if(data==null)
          return;
        else
        {
          
          if(pass==data.password)
            {alert("Login Success!")
            setAdminDetails(data);
            localStorage.setItem("admin",JSON.stringify(data));
            history.push("/adminview");
            
          }
          else
            alert("Password Invalid")
        }
      }).catch(err=>alert("Email Not Found"));
      
    }
     
    
    return(
          <>
        <form onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <label for="adminmail">Email ID</label>
          <input type="email" className="form-control" id="adminmail" />
        </div>
        <div className="form-group">
          <label for="adminpass">Password</label>
          <input type="password" className="form-control" id="adminpass"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
     
      
      </>
    )
}
export default AdminLogin;
