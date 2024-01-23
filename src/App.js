import './App.css';
import Paginainicial from './components/Paginainicial/Paginainicial.js';
import Sobremim from './components/Sobremim/Sobremim.js';
import Projetos from './components/Projetos/Projetos.js';
import Habilidades from './components/Habilidades/Habilidades.js';
import Contato from './components/Contato/Contato.js'
import Voltahome from './components/Voltahome/Voltahome.js';
import Reactinfo from './components/React/Reacttinfo.js';
import Javapagina from './components/Javascriptpagina/Javascriptpagina.js';
import Csspagina from './components/Infocss/Infocss.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Paginainicial/>
  },
  {
    path:"sobremim",
    element: <Sobremim/>
  },
  {
    path:"projetos",
    element: <Projetos/>
  },
  {
    path:"habilidades",
    element:<Habilidades/>
  },
  {
    path:"contato",
    element:<Contato/>
  },
  {
    path:"descricao-react",
    element:<Reactinfo/>
  },
  {
    path:"descricao-javascript",
    element:<Javapagina/>
  },
  {
    path:"descricao-css",
    element:<Csspagina/>                                                                                                                                                                                                                                                                                                                                                                                                                               
  }
])

function App() {
  return (
     <>
       <RouterProvider router={router}/>
     </>   
  );
}

export default App;
