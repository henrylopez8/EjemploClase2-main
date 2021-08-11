import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setdolar] = useState(1);
  const [euros, seteuros] = useState(0);
  const [bitcoin, setbitcoin] = useState(0);
  

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setdolar((total * tipo)*1.17);
    seteuros((total)*tipo);
    setbitcoin((total * tipo)*(13/50000));


  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de dolares</h1>

      <p>dolar: {dolar}</p>
      <p>euros: {euros}</p>
      <p>bitcoin: {Math.round(bitcoin,4)}</p>


      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={(1/1.17)}>dolar</option>
        <option value={1}>euros</option>
        <option value={(50000/13)}>bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
