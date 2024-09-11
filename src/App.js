
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRouter from './Router/UserRouter';
import UseSingleProduct from './Pages/User/UseSingleProduct';
import AdminRouter from './Router/AdminRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouter/>}/>
        <Route path='/product/:id*' element={<UseSingleProduct/>}/>
        <Route path='/admin/*' element={<AdminRouter/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
