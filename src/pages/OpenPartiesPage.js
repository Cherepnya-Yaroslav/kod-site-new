import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Button from "../components/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"
// Обновляем импорт CSS
import "../styles/pages/OpenPartiesPage.css"

const OpenPartiesPage = () => {
  // Пример данных для мероприятий
  const events = [
    {
      id: 1,
      title: "Ретро-вечеринка 80-х",
      date: "15 июня 2025",
      time: "19:00",
      location: "K.O.D. Главный зал",
      capacity: "до 50 человек",
      price: "1500 ₽",
      description:
        "Окунитесь в атмосферу 80-х с музыкой, играми и костюмами той эпохи. Танцы, конкурсы и призы для самых активных участников!",
      image: "/placeholder.svg?height=400&width=600&text=Ретро-вечеринка",
    },
    {
      id: 2,
      title: "Квиз-ночь",
      date: "22 июня 2025",
      time: "20:00",
      location: "K.O.D. Малый зал",
      capacity: "до 30 человек",
      price: "1200 ₽",
      description:
        "Интеллектуальная битва команд в формате популярной викторины. Проверьте свои знания в разных областях и выиграйте ценные призы!",
      image: "/placeholder.svg?height=400&width=600&text=Квиз-ночь",
    },
    {
      id: 3,
      title: "Мафия: Классическая игра",
      date: "29 июня 2025",
      time: "19:30",
      location: "K.O.D. Игровая комната",
      capacity: "до 20 человек",
      price: "1000 ₽",
      description:
        "Классическая психологическая игра с профессиональным ведущим. Сможете ли вы вычислить мафию или успешно скрыть свою роль?",
      image: "/placeholder.svg?height=400&width=600&text=Мафия",
    },
    {
      id: 4,
      title: "Караоке-батл",
      date: "6 июля 2025",
      time: "20:00",
      location: "K.O.D. Главный зал",
      capacity: "до 40 человек",
      price: "1300 ₽",
      description:
        "Соревнование вокалистов всех уровней подготовки. Профессиональное оборудование, более 10000 песен и призы для победителей!",
      image: "/placeholder.svg?height=400&width=600&text=Караоке-батл",
    },
    {
      id: 5,
      title: "Настольные игры: Открытый вечер",
      date: "13 июля 2025",
      time: "18:00",
      location: "K.O.D. Игровая комната",
      capacity: "до 30 человек",
      price: "800 ₽",
      description:
        "Более 100 настольных игр на выбор: от классики до новинок. Опытные игротехники помогут освоить правила и подобрать игру по вкусу.",
      image: "/placeholder.svg?height=400&width=600&text=Настольные игры",
    },
    {
      id: 6,
      title: "Кинопросмотр: Марафон классики",
      date: "20 июля 2025",
      time: "17:00",
      location: "K.O.D. Кинозал",
      capacity: "до 25 человек",
      price: "1000 ₽",
      description:
        "Просмотр культовых фильмов на большом экране с обсуждением после каждого сеанса. В стоимость входит попкорн и напитки.",
      image: "/placeholder.svg?height=400&width=600&text=Кинопросмотр",
    },
  ]

  const months = ["Июнь 2025", "Июль 2025", "Август 2025"]

  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        {/* Hero Section */}
        <section className="open-parties-hero-section">
          <div className="container">
            <div className="open-parties-hero-content">
              <h1 className="open-parties-hero-title">Открытые вечеринки</h1>
              <p className="open-parties-hero-description">
                Регулярные мероприятия для всех желающих. Присоединяйтесь!
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="schedule-section">
          <div className="container">
            <div className="schedule-header">
              <h2 className="section-title">Расписание мероприятий</h2>
              <p className="section-description">
                Выберите интересующий вас месяц и ознакомьтесь с предстоящими событиями
              </p>
            </div>

            <Tabs defaultValue={months[0]} className="schedule-tabs">
              <TabsList className="months-tabs-list">
                {months.map((month) => (
                  <TabsTrigger key={month} value={month}>
                    {month}
                  </TabsTrigger>
                ))}
              </TabsList>

              {months.map((month, monthIndex) => (
                <TabsContent key={month} value={month} className="month-content">
                  <div className="events-grid">
                    {events
                      .filter((_, index) => {
                        // Фильтруем события по месяцам (для примера)
                        if (monthIndex === 0) return index < 3
                        if (monthIndex === 1) return index >= 3 && index < 6
                        return index >= 6
                      })
                      .map((event) => (
                        <Card key={event.id} className="event-card">
                          <div className="event-image-container">
                            <img src={event.image || "/placeholder.svg"} alt={event.title} className="event-image" />
                          </div>
                          <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>
                              <div className="event-detail">
                                <span className="event-icon calendar-icon"></span>
                                <span>{event.date}</span>
                              </div>
                              <div className="event-detail">
                                <span className="event-icon clock-icon"></span>
                                <span>{event.time}</span>
                              </div>
                              <div className="event-detail">
                                <span className="event-icon location-icon"></span>
                                <span>{event.location}</span>
                              </div>
                              <div className="event-detail">
                                <span className="event-icon people-icon"></span>
                                <span>{event.capacity}</span>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="event-description">{event.description}</p>
                          </CardContent>
                          <CardFooter className="event-footer">
                            <p className="event-price">{event.price}</p>
                            <Button>Забронировать</Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Photo Collage */}
        <section className="photo-collage-section">
          <div className="container">
            <div className="photo-collage-header">
              <h2 className="section-title">Фотогалерея прошедших мероприятий</h2>
              <p className="section-description">Атмосфера наших вечеринок в фотографиях</p>
            </div>
            <div className="photo-collage-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`photo-collage-item ${i === 1 || i === 6 ? "photo-collage-item-large" : ""}`}>
                  <div className="photo-collage-image-container">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=Фото ${i}`}
                      alt={`Мероприятие фото ${i}`}
                      className="photo-collage-image"
                    />
                  </div>
                </div>
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
                    question: "Нужна ли предварительная регистрация на открытые мероприятия?",
                    answer:
                      "Да, для участия в открытых мероприятиях необходима предварительная регистрация и оплата. Количество мест ограничено, поэтому рекомендуем бронировать заранее.",
                  },
                  {
                    question: "Можно ли прийти на мероприятие одному?",
                    answer:
                      "Конечно! Наши открытые мероприятия отлично подходят для тех, кто хочет познакомиться с новыми людьми. Ведущие помогут вам влиться в компанию.",
                  },
                  {
                    question: "Есть ли возрастные ограничения?",
                    answer:
                      "Для каждого мероприятия установлены свои возрастные ограничения. Эта информация указана в описании конкретного события.",
                  },
                  {
                    question: "Что включено в стоимость билета?",
                    answer:
                      "В стоимость входит участие в мероприятии, легкие закуски и напитки (вода, чай, кофе). Дополнительное меню оплачивается отдельно.",
                  },
                  {
                    question: "Можно ли вернуть билет?",
                    answer:
                      "Возврат билета возможен не позднее чем за 48 часов до начала мероприятия. При более позднем отказе стоимость не возвращается.",
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

export default OpenPartiesPage

