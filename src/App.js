import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default App;
