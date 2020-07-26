import React from 'react';
import { useHistory } from "react-router-dom";
function EmployeeLogin(){
  const [employeeDetails,setEmployeeDetails]=React.useState({});
  const history=useHistory();
  
  function onSubmit(e){
    e.preventDefault();
    let id=document.getElementById("employeemail").value;
    let pass=document.getElementById("employeepass").value;
    fetch(`https://crm-backendt.herokuapp.com/${id}`)
    .then(res=>res.json()
    ).then(data=>{
      if(data==null)
        return;
      else
      {
        
        if(pass==data.password)
          {alert("Login Success!")
          setEmployeeDetails(data);
          localStorage.setItem("employee",JSON.stringify(data));
          history.push("/employeeview");
          
        }
        else
          alert("Password Invalid")
      }
    }).catch(err=>alert("Email Not Found"));
    
  }
    
    return(
        <form onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <label for="employeemail">Email ID</label>
          <input type="text" className="form-control" id="employeemail" />
        </div>
        <div className="form-group">
          <label for="employeepass">Password</label>
          <input type="password" className="form-control" id="employeepass"/>
        </div>
        <button type="submit" className="btn btn-primary" >Login</button>
      </form>
    )
}
export default EmployeeLogin;