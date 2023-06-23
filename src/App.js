import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Resultado from "./pages/Resultado";

const App = () => {

  

  return (
   <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Resultado" element={<Resultado/>}/>
        </Routes>  
   </Router>
  );
};

export default App;
