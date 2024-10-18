import "./App.css";
import Header from "./components/Header";
import Home1Scenario from "./components/Home1Scenario";
import Footer from "./components/Footer";
import BackgroundBubbleCombine from "./components/BackgroundBubbleCombine";

function App() {
  return (
    <div className="App">
      <div className="home1">
        {/* <BackgroundBubbleCombine /> */}
        <Header />
        <Home1Scenario />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
