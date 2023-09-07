import './App.css';

import SeuNome from './components/SeuNome';
import {useState} from 'react';
import Saudacao from './components/Saudacao';

function App() {
   // eslint-disable-next-line no-unused-vars
   const  [nome, setNome] = useState()

   return (
      <div className="App">

         <h1>State Lift</h1>
         <SeuNome setNome={setNome} />
         <Saudacao nome={nome}/>
      </div>
  );
}

export default App;
