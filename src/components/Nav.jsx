import { IoMenu } from 'react-icons/io5'
import '../components/css/Nav.css'

const Nav = () => {
  return (
    <div>
        <nav className='nav'>
            <br />
            <div className='nav-menu'>
                <IoMenu/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href="#">Todas as categorias</a></li>
                    <li><a href="#">Ficção cientifica</a></li>
                    <li><a href="#">Literatura brasileira</a></li>
                    <li><a href="#">Literatura internacional</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Autoajuda</a></li>
                </ul>
            </div>
            <br />
        </nav>
    </div>
  )
}

export default Nav