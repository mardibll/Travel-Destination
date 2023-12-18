import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Services from "./components/view/services/Services";
import Home from "./components/view/home/Home";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      {/* <Services/> */}
      <Footer />
    </div>
  );
}

export default App;
