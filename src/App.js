
import './App.css';
import BoxBar from './components/BoxBar';


function App() {
  return (
    <div className="App">
        <BoxBar top={15}  left={4}   background={false} porcent={0}   tank={0}  product2={'40055134'} plant='EC Plant' barID={1}/>
        <BoxBar top={60}  left={10}  background={false} porcent={20}  tank={10} product2={'40055214'} plant='SC1 Plant' barID={2}/>
        <BoxBar top={6}   left={25}  background={false} porcent={40}  tank={30} product2={'40055234'} plant='SC2 Plant' barID={3}/>
        <BoxBar top={65}  left={42}  background={false} porcent={50}  tank={50} product2={'40055286'} plant='H1 Plant' barID={4}/>
        <BoxBar top={50}  left={65}  background={false} porcent={70}  tank={70} product2={'40065007'} plant='H3 Plant' barID={5}/>
        <BoxBar top={16}  left={60}  background={false} porcent={90}  tank={80} product2={'40980002'} plant='H2 Plant' barID={6}/>
        <BoxBar top={30}  left={80}  background={false} porcent={100} tank={100} product2={'40980002'} plant='Bio Plant'  barID={7}/>
    </div>
  );
}

export default App;
