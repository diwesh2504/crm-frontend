import React from 'react';

function ManagerLogin(){
    return (
        <form>
        <div className="form-group">
          <label for="managermail">Email ID</label>
          <input type="text" className="form-control" id="managermail" />
        </div>
        <div className="form-group">
          <label for="managerpass">Password</label>
          <input type="password" className="form-control" id="managerpass"/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )

}

export default ManagerLogin;