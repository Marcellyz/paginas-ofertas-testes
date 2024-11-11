
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../components/css/Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className='container-footer'>
        <div className='box-user'>
            <h3>Minha Conta</h3>
            <ul>
                <li><a href="#">Cadastro</a></li>
                <li><a href="#">Pedidos</a></li>
                <li><a href="#">Endereço</a></li>
                <li><a href="#">Senha Perdida</a></li>
            </ul>
        </div>
        <div className='box-atendimento'>
            <h3>Atendimento</h3>
            <ul>
                <li><a href="#">Dúvidas frequentes</a></li>
                <li><a href="#">Central de Atendimento</a></li>
            </ul>
        </div>
        <div className='box-termos'>
            <h3>Termos</h3>
            <ul>
                <li><a href="#">Termos e condições</a></li>
                <li><a href="#">Política e privacidade</a></li>
            </ul>
        </div>
        <div className='box-redes-sociais'>
            <h3>Siga nossas Paginas</h3>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaLinkedin/></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer