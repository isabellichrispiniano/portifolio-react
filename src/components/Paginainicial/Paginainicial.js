import Logo from '../images/Logo.png';
import './Paginainicial.css';
import Voltahome from '../Voltahome/Voltahome'
import {Link} from 'react-router-dom';

function Paginainicial() {
  return (
    <>
      <main>
        <div>
          <h1>Oi, me chamo <span>Isabelli</span></h1>
          <p>Sou desenvolvedora front-end</p>
        </div>
        <img src={Logo} alt='logo' className='img-logo'/>
      </main>
      <footer>
       <div className='textfooter'>
         {/* <button>Sobre mim</button>
         <button>Meus projetos</button>
         <button>Habilidades</button>
         <button>Contato</button> */}
         <Link to="sobremim">Sobre mim</Link>
         <Link to="projetos">Meus projetos</Link>
         <Link to="habilidades">Habilidades</Link>
         <Link to="contato">Contato</Link>
       </div>
      </footer>
    </>
  )
}


export default Paginainicial;