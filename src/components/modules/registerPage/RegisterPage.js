import React from 'react';

const RegisterPage = () => {
    return ( 
        <div className='container-fluid'>
            <form>
                <div className='form-group'>
                <label for='name'>Name</label>
                <imput type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                <label for='email'>Email Id</label>
                <imput type='email' className='form-control'></imput>
                </div>
                
            </form>
            {/* <form>
             <div className="form-group">
             <label for="email">Email address:</label>
             <input type="email" className="form-control" id="email">
              </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd">
  </div>
  <div className="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form> */}
        </div>
     );
}
 
export default RegisterPage;