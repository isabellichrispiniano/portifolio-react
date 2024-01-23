import Logo from '../images/Logo.png';
import Voltahome from '../Voltahome/Voltahome';
import './Sobremim.css';


function Sobremim(){
    return(
        <>
         <header>
            <div className='sobre'>
            <img src={Logo} alt='Logo' className='Img-logo'/>
            <h1>Sobre mim</h1>
            </div>
            <footer>
                <h3 >Como um bruxo do mundo mágico, mergulhei nas profundezas encantadas da
programação e do desenvolvimento web. Meu nome é Harry Potter, e assim como domino
feitiços em Hogwarts, também domino as linguagens de programação. Com uma varinha e
um teclado, conjuro códigos mágicos que transformam linhas de texto em experiências
mágicas online. Da Sala Precisa aos servidores na nuvem, minha jornada como
Desenvolvedor Full Stack é tão épica quanto derrotar Lord Voldemort. Desafios são como
Horcruxes, e estou determinado a resolvê-los com a mesma coragem que usei para
enfrentar as trevas. Lumos no código e avante, para construir um mundo digital repleto de
possibilidades!</h3>
  <Voltahome/> 
            </footer>
            
         </header>
        </>
    )
}

export default Sobremim;