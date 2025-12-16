import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import logo from '../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={s.header}>
      <div className={s.boxLogo}>
        <Link to='/'>
          <img src={logo} alt="Logo coração" />
        </Link>
        <Link to='/'>Médicos e Dentistas</Link>
      </div>

      {/* Botão Hambúrguer */}
      <button 
        className={s.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    
      <nav className={`${s.navDesktop} ${menuOpen ? s.active : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/voluntario'>Seja Voluntário</Link>
      </nav>
    </header>
  )
}

export default Header