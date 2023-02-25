import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>}/> 
          <Route path="/update/:id" element={<Update/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
