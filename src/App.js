
import './App.css';
import BoxBar from './components/BoxBar';

function App() {
  return (
    <div className="App">
      <BoxBar top={100} left={5} background={true} porcent={0}/>
      <BoxBar top={80} left={450} background={true} porcent={20}/>
      <BoxBar top={490} left={250} background={true} porcent={40}/>
      <BoxBar top={40} left={1500} porcent={50}/>
      <BoxBar top={120} left={1150} porcent={70}/>
      <BoxBar top={320} left={1150} porcent={90}/>
      <BoxBar top={580} left={900} porcent={100}/>
    </div>
  );
}

export default App;
