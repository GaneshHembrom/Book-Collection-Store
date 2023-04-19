import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Show from "./pages/Show";
import Addedit from "./pages/Addedit";
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer position='top-centre' />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addbook" element={<Addedit/>} />
        <Route exact path="/update/:id" element={<Addedit/>} />
        <Route exact path="/show/:id" element={<Show/>} />
        </Routes>
        {/* <Home/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
