
import './App.css';
import BoxBar from './components/BoxBar';

function App() {
  return (
    <div className="App">
      <BoxBar top={15} left={4}     background={true} porcent={0} tank={0} product={'40055256'} plant='Tank Farm 1' barID={1}/>
      <BoxBar top={60}  left={10}   background={true} porcent={20} tank={10} product2={'40055327'} plant='Insecticide' barID={2}/>
      <BoxBar top={6} left={25}   background={true} porcent={40} tank={30} product={'40055110'} plant='Tank Farm 2' barID={3}/>
      <BoxBar top={65}  left={42}  background={false} porcent={50} tank={50} product2={'40055157'} plant='Herbicides 1' barID={4}/>
      <BoxBar top={50} left={65}  background={false} porcent={70} tank={70} product={'40055204'} plant='Herbicides 3' barID={5}/>
      <BoxBar top={16} left={60}  background={false} porcent={90} tank={80} product2={'40055219'} plant='Herbicides 2' barID={6}/>
      <BoxBar top={30} left={80}   background={true} porcent={100} tank={100} product2={'40055219'} plant='BioRational'  barID={7}/>
    </div>
  );
}

export default App;
