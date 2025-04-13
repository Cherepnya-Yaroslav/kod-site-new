import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Button from "../components/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/Card"
// Обновляем импорт CSS
import "../styles/pages/PersonalPartiesPage.css"

const PersonalPartiesPage = () => {
  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        {/* Hero Section */}
        <section className="parties-hero-section">
          <div className="container">
            <div className="parties-hero-content">
              <h1 className="parties-hero-title">Персональные вечеринки</h1>
              <p className="parties-hero-description">
                Организуем незабываемые мероприятия для любого повода и компании
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              <Card className="service-card">
                <CardHeader>
                  <div className="service-icon party-icon"></div>
                  <CardTitle>Тематические вечеринки</CardTitle>
                  <CardDescription>
                    Организуем праздник в любой тематике: от супергероев до ретро-вечеринок
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Полное оформление пространства</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Тематические активности и игры</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Костюмы и реквизит</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <div className="service-icon location-icon"></div>
                  <CardTitle>Выездные мероприятия</CardTitle>
                  <CardDescription>Привезем праздник в любую локацию: дом, офис, парк или ресторан</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Мобильное оборудование</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Профессиональные ведущие</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Адаптация под любое пространство</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <div className="service-icon gift-icon"></div>
                  <CardTitle>Выпускные</CardTitle>
                  <CardDescription>Особенные праздники для выпускников детских садов, школ и вузов</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Специальные программы по возрасту</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Фото и видеосъемка</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Памятные подарки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <div className="service-icon team-icon"></div>
                  <CardTitle>Тимбилдинги</CardTitle>
                  <CardDescription>
                    Корпоративные мероприятия для сплочения команды и повышения мотивации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Командообразующие игры</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Квесты и соревнования</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Индивидуальный сценарий</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardHeader>
                  <div className="service-icon venue-icon"></div>
                  <CardTitle>Аренда пространства</CardTitle>
                  <CardDescription>Сдаем наше пространство для ваших мероприятий</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="service-list">
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Современное оборудование</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Гибкие условия аренды</span>
                    </li>
                    <li className="service-item">
                      <span className="check-icon"></span>
                      <span>Возможность кейтеринга</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="quiz-section">
          <div className="container">
            <div className="quiz-container">
              <div className="quiz-header">
                <h2 className="section-title">Подберем идеальный вариант</h2>
                <p className="section-description">
                  Ответьте на несколько вопросов, и мы предложим оптимальный формат праздника
                </p>
              </div>
              <Card className="quiz-card">
                <CardContent>
                  <form className="quiz-form">
                    <div className="form-group">
                      <label className="form-label">Какой повод для праздника?</label>
                      <div className="radio-group">
                        <div className="radio-item">
                          <input type="radio" id="birthday" name="occasion" value="birthday" defaultChecked />
                          <label htmlFor="birthday">День рождения</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="corporate" name="occasion" value="corporate" />
                          <label htmlFor="corporate">Корпоратив</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="graduation" name="occasion" value="graduation" />
                          <label htmlFor="graduation">Выпускной</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="other" name="occasion" value="other" />
                          <label htmlFor="other">Другое</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Количество гостей</label>
                      <div className="radio-group">
                        <div className="radio-item">
                          <input type="radio" id="small" name="guests" value="small" defaultChecked />
                          <label htmlFor="small">До 10 человек</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="medium" name="guests" value="medium" />
                          <label htmlFor="medium">10-20 человек</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="large" name="guests" value="large" />
                          <label htmlFor="large">Более 20 человек</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Предпочтительная локация</label>
                      <div className="radio-group">
                        <div className="radio-item">
                          <input type="radio" id="kod" name="location" value="kod" defaultChecked />
                          <label htmlFor="kod">В пространстве K.O.D.</label>
                        </div>
                        <div className="radio-item">
                          <input type="radio" id="external" name="location" value="external" />
                          <label htmlFor="external">Выездное мероприятие</label>
                        </div>
                      </div>
                    </div>

                    <Button className="quiz-submit">Подобрать вариант</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="booking-section">
          <div className="container">
            <div className="booking-container">
              <div className="booking-header">
                <h2 className="section-title">Забронировать вечеринку</h2>
                <p className="section-description">Заполните форму, и мы свяжемся с вами для обсуждения деталей</p>
              </div>
              <Card className="booking-card">
                <CardContent>
                  <form className="booking-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          Ваше имя
                        </label>
                        <input type="text" id="name" className="form-input" placeholder="Иван Иванов" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Телефон
                        </label>
                        <input type="tel" id="phone" className="form-input" placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input type="email" id="email" className="form-input" placeholder="example@mail.ru" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="event-type">
                        Тип мероприятия
                      </label>
                      <input
                        type="text"
                        id="event-type"
                        className="form-input"
                        placeholder="День рождения, корпоратив и т.д."
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="date">
                          Предпочтительная дата
                        </label>
                        <input type="date" id="date" className="form-input" />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="guests">
                          Количество гостей
                        </label>
                        <input type="number" id="guests" className="form-input" placeholder="10" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Дополнительная информация
                      </label>
                      <textarea
                        id="message"
                        className="form-textarea"
                        placeholder="Расскажите подробнее о вашем мероприятии..."
                        rows="4"
                      ></textarea>
                    </div>
                    <Button className="booking-submit">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking Conditions */}
        <section className="conditions-section">
          <div className="container">
            <div className="conditions-container">
              <div className="conditions-header">
                <h2 className="section-title">Условия бронирования</h2>
              </div>
              <Card className="conditions-card">
                <CardContent>
                  <div className="conditions-content">
                    <p>
                      Для гарантированного бронирования даты мы рекомендуем обращаться не менее чем за 2 месяца до
                      планируемого мероприятия.
                    </p>
                    <ul className="conditions-list">
                      <li className="conditions-item">
                        <span className="check-icon"></span>
                        <span>Предоплата 50% для фиксации даты</span>
                      </li>
                      <li className="conditions-item">
                        <span className="check-icon"></span>
                        <span>Полная оплата не позднее 3 дней до мероприятия</span>
                      </li>
                      <li className="conditions-item">
                        <span className="check-icon"></span>
                        <span>Возможность переноса даты при уведомлении не менее чем за 7 дней</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="container">
            <div className="features-header">
              <h2 className="section-title">Фишки K.O.D.</h2>
              <p className="section-description">Что делает наши мероприятия особенными</p>
            </div>
            <div className="features-grid">
              {[
                {
                  title: "Уникальные сценарии",
                  description: "Индивидуальный подход к каждому мероприятию с учетом всех пожеланий",
                },
                {
                  title: "Профессиональные ведущие",
                  description: "Опытные аниматоры и ведущие, умеющие работать с любой аудиторией",
                },
                {
                  title: "Современное оборудование",
                  description: "Качественный звук, свет и спецэффекты для создания нужной атмосферы",
                },
                {
                  title: "Тематическое оформление",
                  description: "Полное преображение пространства в соответствии с выбранной темой",
                },
                {
                  title: "Фото и видеосъемка",
                  description: "Профессиональная съемка для сохранения воспоминаний о мероприятии",
                },
                {
                  title: "Кейтеринг",
                  description: "Организация питания любой сложности от фуршета до банкета",
                },
              ].map((feature, index) => (
                <Card key={index} className="feature-card">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default PersonalPartiesPage

