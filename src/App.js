import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/SliderData'

function App() {
  return (
    
      <ImageSlider slides={Data}/>
  
  );
}

export default App;
