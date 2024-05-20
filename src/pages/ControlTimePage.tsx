import '../styles/components/controltime.sass';

export const ControlPage: React.FC = () => {
  return (
    <>
      <div className="control_container flex-center no-margin-padding fullscreen">
        <div className="control_content column">
          <div className="control_header_content">
            <div className="control_header_infos_container">
              <div className="control_header_infos_content">
                <h3>Relógio de ponto</h3>

                <div>
                  <h1>0h 00m</h1>
                  <p>Horas de hoje</p>
                </div>
              </div>

              <div className="control_timer_employee_id">
                <h2>#4SXXFMF</h2>
                <p>Usuário</p>
              </div>
            </div>

            <div className="control_time_button_container">
              <button>Hora de entrada</button>
            </div>
          </div>

          <div className="control_history_container">
            <h1>Dias anteriores</h1>
            <div className="control_history_content">
              <div className="control_history_day_container">
                <p>05/11/23</p>
                <h4>07h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>

              <div className="control_history_day_container">
                <p>04/11/23</p>
                <h4>08h 30m</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
