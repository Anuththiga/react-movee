import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
