import Logo from '../images/Logo.png'
import Voltahome from '../Voltahome/Voltahome';
import './Projetos.css'

function Projetos() {
    return (
        <>
            <header>
                <div className='projeto'>
                    <img src={Logo} alt='Logo' className='Img-logo' />
                    <h1>Meus Projetos</h1>
                </div>
                <footer>
                <Voltahome/> 
                    <div className='juncao'>
                        <div className='temaum'>
                            <h2>QuantumQuidditch</h2>
                            <button>Juntei-me à Liga de Quadribol
                                Quântico para transformar o esporte
                                mais emocionante do mundo bruxo
                                em uma experiência virtual inovadora.
                                O QuantumQuidditch é um projeto
                                que combina a adrenalina do
                                Quadribol com elementos de
                                realidade virtual e aumentada.
                                Prepare-se para montar sua vassoura
                                digital, lançar feitiços em 3D e
                                competir em partidas emocionantes,
                                tudo do conforto do seu computador.
                                Vamos levar o Quadribol a novos
                                patamares!
                            </button>
                        </div>
                        <div className='temadois'>
                            <h2>PotionCraft</h2>
                            <button>
                                O PotionCraft é um assistente digital
                                que torna a arte de criar poções
                                mágicas mais acessível a todos os
                                bruxos e bruxas. Com uma extensa
                                biblioteca de receitas, guias
                                interativos e sugestões
                                personalizadas com base nas
                                preferências do usuário, este projeto
                                visa simplificar a prática de preparar
                                poções. Deixe-me guiar você através
                                do fascinante mundo das misturas
                                mágicas, onde cada linha de código é
                                um ingrediente para o sucesso
                                alquímico!
                            </button>
                        </div>
                        <div className='tematres'>
                            <h2>CodeHogwarts</h2>
                            <button>
                                Na CodeHogwarts, estou trabalhando
                                para levar a magia da programação
                                para todos os bruxos e bruxas. Este
                                projeto é uma escola de magia virtual
                                onde os estudantes podem aprender e
                                aprimorar suas habilidades em
                                desenvolvimento web, feitiços de
                                codificação e encantamentos de
                                programação. Com cursos interativos
                                e desafios mágicos, estamos
                                formando a próxima geração de
                                desenvolvedores bruxos!

                            </button>
                        </div>
                    </div>
                </footer>
            </header>
        </>
    )
}

export default Projetos;