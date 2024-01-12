import './App.css';
import Home from './components/home';
import Create from './components/create';
import Update from './components/update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/update' element={<Update />}></Route>
            <Route exact path='/create' element={<Create />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;