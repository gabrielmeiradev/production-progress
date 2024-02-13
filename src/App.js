
import './App.css';
import BoxBar from './components/BoxBar';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  const [plant1_index, setPlant1_index] = useState('');
  const [plant2_index, setPlant2_index] = useState('');
  const [plant3_index, setPlant3_index] = useState('');
  const [plant4_index, setPlant4_index] = useState('');
  const [plant5_index, setPlant5_index] = useState('');
  const [plant6_index, setPlant6_index] = useState('');
  const [plant7_index, setPlant7_index] = useState('');
  const [error, setError] = useState('');
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const token = params.get('token');


  useEffect(() => {
    const getData = async () => {
      // eslint-disable-next-line
      const response = await fetch(
        `https://sumitomo.palmapp.com.br/rest/AppPcp06Painel?OPER=CONSULTA&token=${token}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log('dados', data)
          if (!data.Erro && data.code != 500) {
            setData(data)
            const plant1_index = data.plants.findIndex((elemento) => elemento.id == 'I1')
            const plant2_index = data.plants.findIndex((elemento) => elemento.id == 'I2');
            const plant3_index = data.plants.findIndex((elemento) => elemento.id == 'I3');
            const plant4_index = data.plants.findIndex((elemento) => elemento.id == 'H1');
            const plant5_index = data.plants.findIndex((elemento) => elemento.id == 'H2');
            const plant6_index = data.plants.findIndex((elemento) => elemento.id == 'M1');
            const plant7_index = data.plants.findIndex((elemento) => elemento.id == 'B1');

            setPlant1_index(plant1_index)
            setPlant2_index(plant2_index)
            setPlant3_index(plant3_index)
            setPlant4_index(plant4_index)
            setPlant5_index(plant5_index)
            setPlant6_index(plant6_index)
            setPlant7_index(plant7_index)

          } else {
            setError(data.Erro)
            console.log('[ERRO]- '+data)
          }


        })
        .catch(function (err) {
          console.log("error", err);
        });
    };

    getData();
    const interval = setInterval(() => {
      getData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {
        data?.plants && (
          <>

            <div className="App">
              <img src={'static/media/Plants.e9f623a5c4aaa03886c2.png'} className='backImg' alt='plants location'/>
              <BoxBar top={15} left={4} background={false} porcent={0} tank={0} product2={'40055134'} plant='EC Plant' barID={1} data={data.plants[plant1_index]} />
              <BoxBar top={60} left={10} background={false} porcent={20} tank={10} product2={'40055214'} plant='SC1 Plant' barID={2} data={data.plants[plant2_index]} />
              <BoxBar top={6} left={25} background={false} porcent={40} tank={30} product2={'40055234'} plant='SC2 Plant' barID={3} data={data.plants[plant3_index]} />
              <BoxBar top={65} left={42} background={false} porcent={50} tank={50} product2={'40055286'} plant='H1 Plant' barID={4} data={data.plants[plant4_index]} />
              <BoxBar top={50} left={64} background={false} porcent={70} tank={70} product2={'40065007'} plant='H3 Plant' barID={5} data={data.plants[plant5_index]} />
              <BoxBar top={18} left={58} background={false} porcent={90} tank={80} product2={'40980002'} plant='H2 Plant' barID={6} data={data.plants[plant6_index]} />
              <BoxBar top={30} left={80} background={false} porcent={90} tank={100} product2={'40980002'} plant='Bio Plant' barID={7} data={data.plants[plant7_index]} />
            </div>
          </>
        )
      }
      {
        error && (
          <div className='error-message'>
            <div className='error-div'>
              <p>{`Erro : ${error}`}</p>
            </div>
          </div>
        )
      }

    </>
  );
}

export default App;
