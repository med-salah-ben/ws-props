import './App.css';
import mercedes from "./assets/Gclass.jpg";
import panamera from './assets/panamera.jpg';
import ferrari from './assets/ferrari.jpeg'
import CarList from './components/CarList';

function App() {

  const products = [
    {
      name :"Mercedes",
      price :"170 000 $",
      imgSrc: mercedes
    },
    
    {
      name :"Panamera",
      price :"110 000 $",
      imgSrc: panamera
    },
    
    {
      name :"Ferrari",
      price :"100 000 $",
      imgSrc: ferrari
    }
  ];

  const testCallBack = name => alert(`hello ${name}` )

  return (
   <div>
        <h1>Car List</h1>
       <CarList products={products} testProp="hello world!!!" testCallBack={testCallBack} />
   </div>
  );
}

export default App;
