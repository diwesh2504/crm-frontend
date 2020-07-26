import React from 'react';
import {useHistory} from 'react-router-dom';
function EmployeeView(){
    const [leads,getLeads]=React.useState([]);
    let history=useHistory();
    let employeeDetails=JSON.parse(localStorage.getItem("employee"));
    let email=employeeDetails.email;
    function getdetails(){
        console.log(email);
        fetch(`https://crm-backendt.herokuapp.com/getemployee/${email}`)
        .then(res=>res.json()
        ).then(data=>{getLeads(prev=>prev.concat(data.leads));console.log("leads",data)})
        .catch(err=>console.log(err));}
        function handleLogout(){
            history.push("/");
            localStorage.clear();
        }
        
        return(
            <>
            <div className="jumbotron">
                <h3>Welcome,{employeeDetails.firstname}</h3><span><button onClick={()=>handleLogout()}>Logout</button></span>
                <br/><br/><h5>Employee Portal</h5>
            </div>
            <div><button className="btn btn-outline-secondary" onClick={()=>getdetails()}>Get Status</button>
                <table className="table">
                    <thead className="thread-dark">
                        <th scope="col">My Leads</th>
                        <th scope="col">Status</th>
                    </thead>
                    <tbody>
                        {leads.map(lead=>{
                            return(
                                <tr>
                                    <td>{lead}</td>
                                    <td>
                                        <select>
                                            <option>New</option>
                                            <option>Contacted</option>
                                            <option>Qualified</option>
                                            <option>Cancelled</option>
                                            <option>Confirmed</option>
                                            <option>Lost</option>
                                            </select>
                                        <span><button>Edit</button>
                                        <button>Delete</button></span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )

}

export default EmployeeView;