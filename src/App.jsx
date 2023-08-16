import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navbar from "./routes/navbar/Navbar";
import Authentication from "./routes/Authentication/Authentication";

function Shop(){
  return(
    <div>Hi I am shop</div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} > 
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop/>} />
      <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App
