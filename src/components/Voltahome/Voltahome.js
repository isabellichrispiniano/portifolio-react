import { useNavigate } from "react-router-dom";

function Voltahome(){
    const navigate = useNavigate();

    const handleHome = () => {
        return navigate("/");
    }

    const handleContato = () => {
        return navigate("/Contato")
    }
    const handSobremim = () =>{
        return navigate ("/Sobremim")
    }
    const handProjetos = () =>{
        return navigate ("/Projetos")
    }
    const hanHabilidades = () =>{
        return navigate ("/Habilidades")
    }

     return(
        <div>
            <button onClick={handleHome}>Home</button>
        </div>
     )
}
export default Voltahome;