import React from 'react';
import AdminLogin from '../Pages/AdminLogin';
import '../Styles/adminview.css';
function AdminView(props){
    const [employees,getEmployees]=React.useState([]);
    function getdetails(){
    fetch("https://crm-backendt.herokuapp.com/employee")
    .then(res=>res.json()
    ).then(data=>{getEmployees(data);console.log(data)})
    .catch(err=>console.log(err));}
    function handleLogout(){
        props.history.push("/");
        localStorage.clear();
    }
    const adminDetails=JSON.parse(localStorage.getItem("admin"));
    return(
        <>
        <div className="jumbotron"><h3>Welcome,{adminDetails.firstname}</h3><span><button onClick={()=>handleLogout()}>Logout</button></span><br/><br/><h5>Admin Portal</h5></div>
        <div className="middlezz">
            <div>Managers</div>
            <div>
            <button onClick={()=>getdetails()} className="btn btn-outline-secondary">Get Leads Details</button>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Employee ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Leads</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(emp=>{
                        return(
                            <tr>
                        <td>{emp._id}</td>
                        <td>{emp.firstname}</td>
                        <td>{emp.lastname}</td>
                        <td>{emp.email}</td>
                        <td>{emp.leads.map(lead=>{
                            return(<li>{lead}<span><select id="select">
                                <option>Contacted</option>
                                <option>Qualified</option>
                                <option>Cancelled</option>
                                <option>Confirmed</option>
                                <option>Lost</option>
                                </select>
                                <button>Edit</button></span></li>)
                        })}</td>
                        </tr>
                        )})}

                    
                
                </tbody>
            </table>
            </div>
        </div>
        </>

    )
}





export default AdminView;