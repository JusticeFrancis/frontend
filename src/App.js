import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from './Main';
import Dashboard from './Dashboard';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
