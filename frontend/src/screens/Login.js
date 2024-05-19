import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
    <div className='container'>
    <form >
        
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email" />
            
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password" />
        </div>
        

        <button type="submit" className="m-3 btn btn-success">Login</button>
        <Link to="/creatuser" className="m-3 btn btn-danger">SignUp First</Link>
    </form>
</div>
    </div>
  )
}
