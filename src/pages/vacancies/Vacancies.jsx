import "./Vacancies.css";

const Vacancies = () => {
  return (
    <>
      <div className="vacancies">
        <div className="vacancies-conclusive">
          <div>
            Если вы хотите присоединиться к нашей команде, пожалуйста, свяжитесь
            с администратором или позвоните по указанному номеру:
          </div>
          <div>
            <strong>Администратор:</strong> admin@nomercy.com
          </div>
          <div>
            Мы ищем активных, дружелюбных и талантливых сотрудников. Ждём ваших
            откликов
          </div>
        </div>
        <div>Открытые вакании:</div>
        <div className="vacancy-cards">
          <div className="vacancy-card">
            <div className="vy-c-status"></div>
            <div className="vy-c-data">
              <div className="vy-c-named">Официант</div>
              <div className="vy-c-schedule">график 2/2</div>
              <div className="vy-c-salary">
                {Intl.NumberFormat("ru-Ru").format(70000)} -{" "}
                {`${Intl.NumberFormat("ru-Ru").format(300000)} ₸`}
              </div>
            </div>
          </div>
          <div className="vacancy-card">
            <div className="vy-c-status"></div>
            <div className="vy-c-data">
              <div className="vy-c-named">Раннер</div>
              <div className="vy-c-schedule">график 5/2</div>
              <div className="vy-c-salary">
                {Intl.NumberFormat("ru-Ru").format(200000)} -{" "}
                {`${Intl.NumberFormat("ru-Ru").format(240000)} ₸`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancies;