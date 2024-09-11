
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRouter from './Router/UserRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRouter/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
