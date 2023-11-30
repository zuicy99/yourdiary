import styled from "@emotion/styled";
import "./styles/index.css";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Layout">
      <div className="wrap">
        <Header></Header>

        <mian></mian>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
