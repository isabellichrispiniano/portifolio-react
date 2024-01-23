import Reactt from '../images/React.png';
import './reacttinfo.css';

function React() {
    return (
        <>
            <header>
                <img src={Reactt} />
                    
                <div className='react-tema'>
                <h4>O que é o React e para que serve?</h4>
                <button> O React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação. Isso torna mais fácil manter e expandir uma aplicação à medida que ela cresce, e permite que equipes de desenvolvimento trabalhem de forma mais eficiente juntas.</button>
                </div>
            </header>
        </>
    )
}

export default React;