import s from './footer.module.scss';
import logo from '../../assets/logo.png';
import iconeEmail from '../../assets/email.png';
import iconeTelefone from '../../assets/telefone.png';
import iconeLocal from '../../assets/local.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <section className={s.column}>
                    <div className={s.logoArea}>
                        <img src={logo} alt="Logo coração" />
                        <h2>Médicos & Dentistas</h2>
                    </div>
                    <p className={s.description}>Saúde e cuidado sem barreiras para toda comunidade.</p>
                </section>
                <section className={s.column}>
                    <h3>Contato</h3>
                    <ul className={s.contactList}>
                        <li>
                            <img src={iconeEmail} alt="Ícone email" />
                            contato@medico-dentista.org
                        </li>
                        <li>
                            <img src={iconeTelefone} alt="Ícone telefone" />
                            (11) 3000-0000
                        </li>
                        <li>
                            <img src={iconeLocal} alt="Ícone localização" />
                            São Paulo, Brasil
                        </li>
                    </ul>
                </section>

                <section className={s.column}>
                    <h3>Redes Sociais</h3>
                    <ul className={s.socialList}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </section>
            </div>

            <div className={s.note}>
                <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;