import './App.css';
import Boton from './componentes/Boton';
import freecodeCampLogo from './imagenes/logo.jpg';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App () {

   const [nummClics,setNumClics] = useState(0);
     
  const manejarClic =() => {
    setNumClics(nummClics +1);

  }

  const reiniciarContador =()=> {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
         className='freecodecamp-logo'
         src={freecodeCampLogo}
         alt='logo'/>
        </div>
        <div className='contenedor'>
          <Contador numClics={nummClics} />
          <Boton
           texto='Clic'
           esBotonDeClic={true}
           manejarClic={manejarClic} />

            <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />

        </div>
      </div>
  );
}

export default App;

