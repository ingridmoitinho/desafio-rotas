import { Link } from 'react-router-dom'
import s from './header.module.scss'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.boxLogo}>
        <Link to='/'>
        <img src={logo} alt="Logo coração" />
        </Link>
        <Link to='/'>Médicos e Dentistas</Link>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/voluntario'>Seja Voluntário</Link>
      </nav>
    </header>
  )
}

export default Header;