import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../Assets/logo.png'

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className='h-[60vh] flex items-center'>
            <div className="w-16 h-16 border-4 border-amber-200 border-dashed rounded-full animate-spin  mx-auto">
              <img src={logo} alt="" />
            </div>
          </div>
        );
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivateRouter;