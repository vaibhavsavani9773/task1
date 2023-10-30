import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider';
import Checklist from './components/Checklist';
import LoginForm from './components/Loginform';
import Restapi from './components/Restapi';
import Counter from './components/Counter';
import ListComponent from './components/ListComponent';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
     
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Slider />}></Route>
        <Route path='/checklist' element={<Checklist />}></Route>
        <Route path='/Loginform' element={<LoginForm />}></Route>
        <Route path='/Restapi' element={<Restapi />}></Route>
        <Route path='/Counter'element={<Counter />}></Route>
        <Route path='/ListComponent'element={<ListComponent />}></Route>
        <Route path='/SearchFilter'element={<SearchFilter />}></Route>

      </Routes>
      </BrowserRouter>
  );
}
export default App;


