import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Button from "../components/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/Card"
// Обновляем импорт CSS
import "../styles/pages/DancePage.css"

const DancePage = () => {
  // Пример данных для танцевальных направлений
  const danceStyles = [
    {
      id: 1,
      title: "Современные танцы",
      description:
        "Современные танцевальные стили, включающие элементы хип-хопа, контемпорари и джаз-фанка. Подходит для начинающих и продолжающих.",
      schedule: "Вторник, Четверг: 19:00-20:30",
      instructor: "Анна Петрова",
      level: "Начинающий / Средний",
      image: "/placeholder.svg?height=400&width=600&text=Современные танцы",
    },
    {
      id: 2,
      title: "Латиноамериканские танцы",
      description:
        "Зажигательные ритмы сальсы, бачаты и меренге. Танцуем в парах и соло, развиваем пластику и чувство ритма.",
      schedule: "Понедельник, Среда: 20:00-21:30",
      instructor: "Михаил Соколов",
      level: "Все уровни",
      image: "/placeholder.svg?height=400&width=600&text=Латиноамериканские танцы",
    },
    {
      id: 3,
      title: "Брейк-данс",
      description: "Динамичный уличный стиль с акробатическими элементами. Развивает силу, координацию и выносливость.",
      schedule: "Вторник, Пятница: 18:00-19:30",
      instructor: "Алексей Волков",
      level: "Начинающий / Средний",
      image: "/placeholder.svg?height=400&width=600&text=Брейк-данс",
    },
    {
      id: 4,
      title: "Танцы для детей",
      description:
        "Специальная программа для детей от 5 до 12 лет. Развитие координации, музыкальности и творческого потенциала.",
      schedule: "Суббота: 12:00-13:30, 14:00-15:30",
      instructor: "Екатерина Смирнова",
      level: "Дети 5-12 лет",
      image: "/placeholder.svg?height=400&width=600&text=Танцы для детей",
    },
  ]

  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        {/* Hero Section */}
        <section className="dance-hero-section">
          <div className="container">
            <div className="dance-hero-content">
              <h1 className="dance-hero-title">Танцевальные направления</h1>
              <p className="dance-hero-description">
                Раскройте свой потенциал в движении с нашими профессиональными преподавателями
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="dance-video-section">
          <div className="container">
            <div className="dance-video-grid">
              <div className="dance-video-placeholder">
                <div className="dance-video-placeholder-text">Видео с танцевальных занятий</div>
              </div>
              <div className="dance-video-content">
                <h2 className="section-title">Танцы в K.O.D.</h2>
                <p className="section-description">
                  Мы предлагаем разнообразные танцевальные направления для всех возрастов и уровней подготовки. Наши
                  профессиональные преподаватели помогут вам освоить новые движения, развить пластику и чувство ритма, а
                  также получить заряд положительных эмоций.
                </p>
                <p className="section-description">
                  Занятия проходят в просторном зале с профессиональным покрытием, зеркалами и качественным звуковым
                  оборудованием. Мы создаем комфортную атмосферу для обучения и творческого самовыражения.
                </p>
                <div className="dance-cta">
                  <Button asChild size="large">
                    <a href="#dance-styles">Выбрать направление</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dance Styles Section */}
        <section id="dance-styles" className="dance-styles-section">
          <div className="container">
            <div className="dance-styles-header">
              <h2 className="section-title">Танцевальные направления</h2>
              <p className="section-description">Выберите направление, которое вам по душе</p>
            </div>
            <div className="dance-styles-grid">
              {danceStyles.map((style) => (
                <Card key={style.id} className="dance-style-card">
                  <div className="dance-style-image-container">
                    <img src={style.image || "/placeholder.svg"} alt={style.title} className="dance-style-image" />
                  </div>
                  <CardHeader>
                    <CardTitle>{style.title}</CardTitle>
                    <CardDescription>
                      <div className="dance-style-detail">
                        <span className="dance-style-icon calendar-icon"></span>
                        <span>{style.schedule}</span>
                      </div>
                      <div className="dance-style-detail">
                        <span className="dance-style-icon people-icon"></span>
                        <span>Преподаватель: {style.instructor}</span>
                      </div>
                      <div className="dance-style-detail">
                        <span className="dance-style-icon clock-icon"></span>
                        <span>Уровень: {style.level}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="dance-style-description">{style.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="dance-style-button">Записаться на пробное занятие</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="container">
            <div className="pricing-header">
              <h2 className="section-title">Стоимость занятий</h2>
              <p className="section-description">Выберите подходящий вам формат</p>
            </div>
            <div className="pricing-grid">
              <Card className="pricing-card">
                <CardHeader>
                  <CardTitle>Разовое посещение</CardTitle>
                  <CardDescription>Для тех, кто хочет попробовать</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pricing-price">800 ₽</div>
                  <ul className="pricing-features">
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Одно занятие любого направления</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Длительность 90 минут</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Без обязательств</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="pricing-button">Записаться</Button>
                </CardFooter>
              </Card>

              <Card className="pricing-card pricing-card-featured">
                <CardHeader className="pricing-card-featured-header">
                  <CardTitle>Абонемент на месяц</CardTitle>
                  <CardDescription>Самый популярный вариант</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pricing-price">3500 ₽</div>
                  <ul className="pricing-features">
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>8 занятий в месяц</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Любое направление</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Заморозка на 7 дней</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Экономия 30%</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="pricing-button">Оформить абонемент</Button>
                </CardFooter>
              </Card>

              <Card className="pricing-card">
                <CardHeader>
                  <CardTitle>Абонемент на 3 месяца</CardTitle>
                  <CardDescription>Для постоянных клиентов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pricing-price">9000 ₽</div>
                  <ul className="pricing-features">
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>24 занятия (8 в месяц)</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Любое направление</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Заморозка на 14 дней</span>
                    </li>
                    <li className="pricing-feature">
                      <span className="check-icon"></span>
                      <span>Экономия 40%</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="pricing-button">Оформить абонемент</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="instructors-section">
          <div className="container">
            <div className="instructors-header">
              <h2 className="section-title">Наши преподаватели</h2>
              <p className="section-description">Профессионалы своего дела с многолетним опытом</p>
            </div>
            <div className="instructors-grid">
              {[
                {
                  name: "Анна Петрова",
                  role: "Современные танцы",
                  bio: "Профессиональная танцовщица с 10-летним опытом. Победитель международных соревнований.",
                  image: "/placeholder.svg?height=400&width=400&text=Анна",
                },
                {
                  name: "Михаил Соколов",
                  role: "Латиноамериканские танцы",
                  bio: "Мастер спорта по бальным танцам. Преподает латину более 8 лет.",
                  image: "/placeholder.svg?height=400&width=400&text=Михаил",
                },
                {
                  name: "Алексей Волков",
                  role: "Брейк-данс",
                  bio: "Участник известной брейк-данс команды. Опыт выступлений на международных фестивалях.",
                  image: "/placeholder.svg?height=400&width=400&text=Алексей",
                },
                {
                  name: "Екатерина Смирнова",
                  role: "Детские танцы",
                  bio: "Хореограф с педагогическим образованием. Специализируется на работе с детьми.",
                  image: "/placeholder.svg?height=400&width=400&text=Екатерина",
                },
              ].map((instructor, index) => (
                <Card key={index} className="instructor-card">
                  <div className="instructor-image-container">
                    <img
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="instructor-image"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{instructor.name}</CardTitle>
                    <CardDescription>{instructor.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="instructor-bio">{instructor.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="faq-container">
              <div className="faq-header">
                <h2 className="section-title">Часто задаваемые вопросы</h2>
              </div>
              <div className="faq-list">
                {[
                  {
                    question: "Нужна ли специальная подготовка для занятий?",
                    answer:
                      "Нет, мы набираем группы разных уровней подготовки, включая начинающих. Наши преподаватели помогут освоить базовые движения и постепенно перейти к более сложным элементам.",
                  },
                  {
                    question: "Какая одежда нужна для занятий?",
                    answer:
                      "Рекомендуем удобную спортивную одежду, не стесняющую движений, и сменную обувь (кроссовки с чистой подошвой или специальную танцевальную обувь в зависимости от направления).",
                  },
                  {
                    question: "Можно ли заниматься в группе, если пропустил начало курса?",
                    answer:
                      "Да, вы можете присоединиться к группе в любой момент. Преподаватель поможет освоить пропущенный материал и влиться в коллектив.",
                  },
                  {
                    question: "Есть ли возрастные ограничения?",
                    answer:
                      "У нас есть группы для разных возрастов, включая детские (от 5 лет) и взрослые. Верхних возрастных ограничений нет, главное — желание танцевать!",
                  },
                  {
                    question: "Как записаться на пробное занятие?",
                    answer:
                      "Вы можете записаться через форму на сайте, позвонив по телефону или написав нам в социальных сетях. Пробное занятие лучше бронировать за 2-3 дня.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="faq-card">
                    <CardHeader>
                      <CardTitle className="faq-question">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="faq-answer">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default DancePage

