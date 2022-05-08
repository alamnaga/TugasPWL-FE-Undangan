import About from "./components/About";
import Frame1 from "./components/Frame1";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Fitur from "./components/Fitur";
import Fitur2 from "./components/Fitur2";
import Price from "./components/Price";
import Template from "./components/Template";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Navbar />
      <Frame1 />
      <About />
      <Fitur />
      <Fitur2 />
      <Template/>
      <Price />
      <Footer/>
    </div>
  );
}

export default App;
