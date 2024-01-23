import Logo from '../images/Logo.png'
import site from '../images/React.png'
import Javascript from '../images/javascript.png'
import Css from '../images/css3.png'
import Html from '../images/html5.png'
import DBRelacional from '../images/dbrelacional.png'
import NodeJS from '../images/Nodejs.png'
import Voltahome from '../Voltahome/Voltahome'
import {Link} from 'react-router-dom';
import './Habilidades.css'

function Habilidades(){
    return(
        <>
           <header>
            <div className='home'>
                  <img src={Logo} alt='Logo' className='logotipo'/>
                  <h1>Habilidades</h1>
            </div>
           </header>
           <footer>
            <div className='icones'>

            <div className='component'>
            <h3>React</h3>
            <Link to="/descricao-react"><img src={site}/></Link>
            </div>

            <div className='component2'>
            <h3>Javascript</h3>
            <Link to="/descricao-javascript"><img src={Javascript}/></Link>
            </div>

            <div className='component3'>
                <h3>Css 3</h3>
               <Link to="/descricao-css"><img src={Css}/></Link> 
            </div>

            <div className='component4'>
                <h3>Html 5</h3>
                <img src={Html}/>
            </div>

            <div className='component5'>
                <h3>DB Relacional</h3>
                <img src={DBRelacional}/>
            </div>

            <div className='component6'>
                <h3>NodeJS</h3>
                <img src={NodeJS}/>
            </div>
            </div>
            <Voltahome/> 
           </footer>
        </>
    )
}

export default Habilidades;