import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';


function App() {
  const { theme } = useContext(AuthContext);
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div data-theme={theme} className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
