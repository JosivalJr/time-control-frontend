import '../styles/components/home.sass';

export default function Home() {
  return (
    <>
      <div className="home_container flex-center no-margin-padding fullscreen">
        <div className="home_content column">
          <h1>
            Ponto <span>Ilumeo</span>
          </h1>
          <form className="form_sigin_content column">
            <div className="sign_container column full-pattern-size">
              <label className="full-pattern-size" htmlFor="employee_id">
                Código do Usuário
              </label>
              <input
                type="text"
                id="employee_id"
                name="employee_id"
                className="full-pattern-size"
                required
              />
            </div>

            <button type="submit">Confirmar</button>
          </form>
        </div>
      </div>
    </>
  );
}
