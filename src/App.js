import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Header from "./components/Header";
import { Data } from "./components/SliderData";

// === != !== => <= >= =>
function App() {
  return (
    <div className="container">
      <Header />
      <ImageSlider slides={Data} />
    </div>
  );
}

export default App;
