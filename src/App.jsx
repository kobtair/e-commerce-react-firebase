import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navbar from "./routes/navbar/Navbar";
import Shop from "./routes/Shop/Shop";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />}  />
      </Route>
    </Routes>
  );
}

export default App;
