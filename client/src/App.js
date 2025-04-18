import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './Signup';
import Signin from './Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>} ></Route>
        <Route path='/' element={<Signin/>} ></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
