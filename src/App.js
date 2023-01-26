import {Home, LinkResult ,Login, Signup} from "./compenents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
