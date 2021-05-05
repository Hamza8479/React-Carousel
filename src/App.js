import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/SliderData'

function App() {
  return (
      <div className='container'>
      <div className='header'> 
      
      <div>
        <ul>
          <li>asd</li>
          <li>as</li>
          <li>asda</li>
        </ul>
      </div>

      </div>
      
      <ImageSlider slides={Data}/>

      <h1>Hamza </h1>
      </div>
  
  );
}

export default App;
