import s from "./volunteerForm.module.scss"

export default function VolunteerForm() {
  return (
    <section className={s.volunteerForm}>
      <div className={s.formContainer}>
        <h2>Inscrição para Voluntários</h2>

        <form>
          <div className={s.formSection}>
            <h3>Dados Pessoais</h3>
           
            <div className={s.inputRow}>
              <input type="text" placeholder="Seu Nome *" />
              <input type="tel" placeholder="Seu Telefone *" />
            </div>            
            <input type="email" placeholder="Seu Email *" />
          </div>

          <div className={s.formSection}>
            <h3>Mensagem Adicional</h3>

            <textarea placeholder="Conte-nos porque você quer ser voluntário..." />
          </div>

          <p className={s.infoNote}>Entraremos em contato para mais informações</p>

          <button type="submit" className={s.submitBtn}>
            Enviar Inscrição
          </button>
        </form>
      </div>
    </section>
  );
}