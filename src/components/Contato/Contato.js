import Logo from '../images/Logo.png'
import Email from '../images/Email.png'
import Linkedin from '../images/LInkedin.png'
import Github from '../images/github.png'
import './Contato.css'


function Contato() {
    return (
        <>
            <header>
                <div className='home'>
                    <img src={Logo} alt='Logo' className='logotipo' />
                    <h1>Contato</h1>
                </div>

                <footer>
                    <div className='elements'>
                    <div className='icone1'>
                        <img src={Email}/>
                        <p>chrispiniano@gmail.com</p>
                    </div>

                    <div className='icone2'>
                        <img src={Linkedin}/>
                        <p>linkedin.com/in/harrypotterdev</p>
                    </div>

                    <div className='icone3'>
                        <img src={Github}/>
                        <p>github.com/hpotterwizard</p>
                    </div>
                    </div>
                </footer>

            </header>
        </>
    )
}

export default Contato;