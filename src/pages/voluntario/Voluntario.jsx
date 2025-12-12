import s from './voluntario.module.scss'
import VolunteerForm from "../../components/form/VolunteerForm";

const Voluntario = () => {
  return (
    <main>
      <section className={s.volunteerSection}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>

        <div className={s.volunteerCards}>
          <article>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </article>
          <article>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </article>
          <article>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </article>
        </div>
      </section>

      <section className={s.form}>
        <VolunteerForm />
      </section>
    </main>
  )
}

export default Voluntario;
