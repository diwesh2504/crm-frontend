import React from 'react';
import '../Styles/landingpage.css';
import AdminLogin from './AdminLogin';
import EmployeeLogin from './EmployeeLogin';
import ManagerLogin from './ManagerLogin';
//const database="mongodb://localhost:27017"

function LandingPage(){
    const [view,setView]=React.useState("admin");
    
    // To Enter Details to DB.
    function postDetails(e){
      e.preventDefault();
      let toCheck=document.getElementById("inputState").value;
      let fname=document.getElementById("firstname").value;
      let lname=document.getElementById("lastname").value;
      let newemail=document.getElementById("newemail").value;
      let pass=document.getElementById("newpass").value;
      let json_data={
        "email":newemail,
        "firstname":fname,
        "lastname":lname,
        "password":pass
      }
      
      let flag=0;
     //To Check if User already present
      fetch(`https://crm-backendt.herokuapp.com/${toCheck}`)
      .then(res=>res.json())
      .then(data=>{
        data.map(each=>{
          
          if(each.email==newemail)
            flag=1;
        })
        check();
      })
      .catch(err=>console.log(err));
      const check=async ()=>{if(flag===1)
      {
        alert("Email Already Registered");
        return;
      }
     else{
        let a="new"+toCheck;
        console.log(json_data);
        fetch(`https://crm-backendt.herokuapp.com/${a}`,{
            method:'POST',
            body:JSON.stringify(json_data),
            headers:{
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(data=>console.log(data))
        .catch(err=>alert("Something went"))
      }
    }
    }
    const Register=()=>{
        return(
            <form onSubmit={(e)=>postDetails(e)}>
            <div className="form-group">
              <label for="newemail">Enter Email ID</label>
              <input type="text" className="form-control" id="newemail" />
            </div>
            <div className="form-group">
              <label for="firstname">First Name</label>
              <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="form-group">
              <label for="lastname">Last Name</label>
              <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="form-group">
              <label for="newpass">Password</label>
              <input type="password" className="form-control" id="newpass"/>
            </div>
            <div className="form-group ">
                <label for="inputState">User Type</label>
                <select id="inputState" className="form-control">
                     <option>admin</option>
                    <option>manager</option>
                    <option>employee</option>
                </select>
             </div>
           <button type="submit" className="btn btn-primary">Register</button>
          </form>
        )
    }
    return(
        <>
    <div className="top">CRM Software </div>
    <div className="middle">
        <div></div>
        <div className="box">
            <div>
               <button className="btn btn-outline-dark" onClick={()=>setView("admin")}>Admin Login</button>
               <button className="btn btn-outline-dark" onClick={()=>setView("manager")}>Manager Login</button>
               <button className="btn btn-outline-dark" onClick={()=>setView("employee")}>Employee Login</button>
            {view==="admin"?<AdminLogin/>:""}
            {view==="manager"?<ManagerLogin/>:""}
            {view==="employee"?<EmployeeLogin/>:""}
            {view==="register"?<Register/>:""}
            <div style={{textAlign:"center"}}>
                New User?
                <button className="btn btn-secondary" onClick={()=>setView("register")}>Register</button>

            </div>
            </div>
        </div>
        <div></div>
    </div>
    </>
    );
}


export default LandingPage;