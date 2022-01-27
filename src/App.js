import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shop from './Shop';

function App() {
  return (
    <>
    <Router>
   <Navbar />
   <div className="container">
     <Shop />
     <Routes>
       <Route>

       </Route>
     </Routes>
     </div>
     </Router>
      
    </>
  );
}

export default App;
