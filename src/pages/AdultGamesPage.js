import React from 'react';
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Button from "../components/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"
import Label from "../components/Label"
import { RadioGroup, RadioGroupItem } from "../components/RadioGroup"
import EventCalendar from "../components/EventCalendar"
// Обновляем импорт CSS
import "../styles/pages/AdultGamesPage.css"

const AdultGamesPage = () => {
  // Пример данных для игр
  const games = [
    {
      id: 1,
      title: "Мафия: Классическая игра",
      duration: "2 часа",
      capacity: "8-16 человек",
      date: "15 июня 2025",
      time: "19:00",
      description:
        "Классическая психологическая игра с профессиональным ведущим. Сможете ли вы вычислить мафию или успешно скрыть свою роль?",
      image: "/placeholder.svg?height=400&width=600&text=Мафия",
    },
    {
      id: 2,
      title: "Квиз 'Что? Где? Когда?'",
      duration: "2.5 часа",
      capacity: "до 30 человек",
      date: "22 июня 2025",
      time: "20:00",
      description:
        "Интеллектуальная игра в формате популярной телепередачи. Соберите команду и проверьте свои знания в разных областях.",
      image: "/placeholder.svg?height=400&width=600&text=Квиз",
    },
    {
      id: 3,
      title: "Настольные игры: Стратегии",
      duration: "3 часа",
      capacity: "до 20 человек",
      date: "29 июня 2025",
      time: "19:30",
      description:
        "Вечер стратегических настольных игр. В программе: Каркассон, Колонизаторы, Билет на поезд и другие популярные игры.",
      image: "/placeholder.svg?height=400&width=600&text=Настольные игры",
    },
    {
      id: 4,
      title: "Ролевая игра D&D",
      duration: "4 часа",
      capacity: "4-6 человек",
      date: "6 июля 2025",
      time: "18:00",
      description:
        "Погружение в мир Dungeons & Dragons с опытным мастером. Подходит как для новичков, так и для опытных игроков.",
      image: "/placeholder.svg?height=400&width=600&text=D&D",
    },
    {
      id: 5,
      title: "Покерный турнир",
      duration: "3 часа",
      capacity: "до 16 человек",
      date: "13 июля 2025",
      time: "20:00",
      description:
        "Турнир по покеру с символическими ставками. Проверьте свои навыки блефа и стратегического мышления.",
      image: "/placeholder.svg?height=400&width=600&text=Покер",
    },
    {
      id: 6,
      title: "Игры-детективы",
      duration: "2.5 часа",
      capacity: "8-12 человек",
      date: "20 июля 2025",
      time: "19:00",
      description:
        "Расследование запутанного дела в формате иммерсивной игры. Участники становятся детективами и ищут улики, опрашивают свидетелей.",
      image: "/placeholder.svg?height=400&width=600&text=Детектив",
    },
  ]

  const months = ["Июнь 2025", "Июль 2025", "Август 2025"]
  const categories = ["Все игры", "Стратегии", "Психологические игры"]

  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        {/* Hero Section */}
        <section className="adult-hero-section">
          <div className="container">
            <div className="adult-hero-content">
              <h1 className="adult-hero-title">Игры для взрослых</h1>
              <p className="adult-hero-description">
                Интеллектуальные, психологические и стратегические игры для компаний
              </p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="adult-schedule-section">
          <div className="container">
            <EventCalendar eventType="adults" />
          </div>
        </section>

        {/* Quiz Section */}
        <section className="adult-quiz-section">
          <div className="container">
            <div className="adult-quiz-container">
              <div className="adult-quiz-header">
                <h2 className="section-title">Подберем игру для вашей компании</h2>
                <p className="section-description">
                  Ответьте на несколько вопросов, и мы предложим подходящие варианты
                </p>
              </div>
              <Card className="adult-quiz-card">
                <CardContent>
                  <form className="adult-quiz-form">
                    <div className="form-group">
                      <Label>Предпочтительный тип игр</Label>
                      <div className="checkbox-grid">
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-strategy" className="checkbox-input" />
                          <Label htmlFor="type-strategy">Стратегические</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-psychological" className="checkbox-input" />
                          <Label htmlFor="type-psychological">Психологические</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-quiz" className="checkbox-input" />
                          <Label htmlFor="type-quiz">Интеллектуальные</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-roleplay" className="checkbox-input" />
                          <Label htmlFor="type-roleplay">Ролевые</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-card" className="checkbox-input" />
                          <Label htmlFor="type-card">Карточные</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="type-active" className="checkbox-input" />
                          <Label htmlFor="type-active">Активные</Label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <Label>Опыт в настольных играх</Label>
                      <RadioGroup defaultValue="beginner">
                        <div className="radio-item">
                          <RadioGroupItem value="beginner" id="exp-beginner" />
                          <Label htmlFor="exp-beginner">Новички</Label>
                        </div>
                        <div className="radio-item">
                          <RadioGroupItem value="mixed" id="exp-mixed" />
                          <Label htmlFor="exp-mixed">Смешанный уровень</Label>
                        </div>
                        <div className="radio-item">
                          <RadioGroupItem value="experienced" id="exp-experienced" />
                          <Label htmlFor="exp-experienced">Опытные игроки</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="adult-quiz-submit">
                      Подобрать игры
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Collage */}
        <section className="adult-photo-section">
          <div className="container">
            <div className="adult-photo-header">
              <h2 className="section-title">Фотогалерея</h2>
              <p className="section-description">Атмосфера наших игровых вечеров</p>
            </div>
            <div className="adult-photo-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`adult-photo-item ${i === 3 || i === 6 ? "adult-photo-item-large" : ""}`}>
                  <div className="adult-photo-image-container">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=Игры ${i}`}
                      alt={`Игры для взрослых фото ${i}`}
                      className="adult-photo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="adult-testimonials-section">
          <div className="container">
            <div className="adult-testimonials-header">
              <h2 className="section-title">Отзывы участников</h2>
            </div>
            <div className="adult-testimonials-grid">
              {[
                {
                  text: "Отличное место для интеллектуального отдыха! Регулярно посещаем квизы с друзьями. Всегда интересные вопросы и дружеская атмосфера.",
                  author: "Дмитрий, 34 года",
                },
                {
                  text: "Впервые играла в D&D именно здесь. Мастер отлично ввел в игру, объяснил все правила. Теперь это наше любимое хобби с друзьями!",
                  author: "Анна, 29 лет",
                },
                {
                  text: "Провели корпоратив в формате детективной игры. Коллеги в восторге! Отличная организация, продуманный сценарий и внимание к деталям.",
                  author: "Сергей, 42 года",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="adult-testimonial-card">
                  <CardContent>
                    <p className="adult-testimonial-text">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter>
                    <p className="adult-testimonial-author">— {testimonial.author}</p>
                  </CardFooter>
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

export default AdultGamesPage

