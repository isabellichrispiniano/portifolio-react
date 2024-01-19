import Logo from '../images/Logo.png';
import './Paginainicial.css';

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
         <button>Sobre mim</button>
         <button>Meus projetos</button>
         <button>Habilidades</button>
         <button>Contato</button>
       </div>
      </footer>
    </>
  )
}


export default Paginainicial;