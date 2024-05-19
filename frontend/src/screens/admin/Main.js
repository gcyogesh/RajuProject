import React from 'react'

const AdminMain = () => {
  return (
      <div>
      <div className='container'>
            <form >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">UserName</label>
                    <input type="text" className="form-control" name='name' id="name" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" />
                </div>
               

                <button type="submit" className="m-3 btn btn-success">Enter as Admin</button>
               
            </form>
        </div>
      </div>
  )
}

export default AdminMain