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
import "../styles/pages/KidsGamesPage.css"

const KidsGamesPage = () => {
  console.log('Rendering KidsGamesPage');

  // Пример данных для игр
  const games = [
    {
      id: 1,
      title: "Квест 'Поиск сокровищ'",
      ageGroup: "6-9 лет",
      duration: "1.5 часа",
      capacity: "6-12 детей",
      date: "15 июня 2025",
      time: "12:00",
      description:
        "Увлекательный квест с поиском подсказок и решением загадок. Дети отправятся на поиски спрятанных сокровищ, следуя карте и выполняя интересные задания.",
      image: "/placeholder.svg?height=400&width=600&text=Квест",
    },
    {
      id: 2,
      title: "Научное шоу 'Эксперименты'",
      ageGroup: "7-12 лет",
      duration: "1 час",
      capacity: "до 15 детей",
      date: "22 июня 2025",
      time: "14:00",
      description:
        "Интерактивное шоу с безопасными химическими экспериментами. Дети узнают о науке в игровой форме и сами поучаствуют в проведении опытов.",
      image: "/placeholder.svg?height=400&width=600&text=Научное шоу",
    },
    {
      id: 3,
      title: "Мастер-класс 'Юный кондитер'",
      ageGroup: "5-12 лет",
      duration: "2 часа",
      capacity: "до 10 детей",
      date: "29 июня 2025",
      time: "11:00",
      description:
        "Кулинарный мастер-класс, на котором дети научатся готовить и украшать десерты. Все необходимые ингредиенты и инструменты предоставляются.",
      image: "/placeholder.svg?height=400&width=600&text=Мастер-класс",
    },
    {
      id: 4,
      title: "Игротека 'Настольные игры'",
      ageGroup: "6-14 лет",
      duration: "2 часа",
      capacity: "до 20 детей",
      date: "6 июля 2025",
      time: "15:00",
      description:
        "Большая коллекция настольных игр для детей разного возраста. Опытные ведущие помогут освоить правила и организуют мини-турниры.",
      image: "/placeholder.svg?height=400&width=600&text=Игротека",
    },
    {
      id: 5,
      title: "Творческая мастерская 'Лепка'",
      ageGroup: "4-10 лет",
      duration: "1.5 часа",
      capacity: "до 12 детей",
      date: "13 июля 2025",
      time: "12:30",
      description:
        "Занятие по лепке из полимерной глины. Дети создадут красивые фигурки и сувениры, которые смогут забрать с собой.",
      image: "/placeholder.svg?height=400&width=600&text=Творческая мастерская",
    },
    {
      id: 6,
      title: "Робототехника для детей",
      ageGroup: "8-14 лет",
      duration: "2 часа",
      capacity: "до 8 детей",
      date: "20 июля 2025",
      time: "13:00",
      description:
        "Вводное занятие по робототехнике. Дети познакомятся с основами конструирования и программирования роботов.",
      image: "/placeholder.svg?height=400&width=600&text=Робототехника",
    },
  ]

  const months = ["Июнь 2025", "Июль 2025", "Август 2025"]
  const ageGroups = ["4-6 лет", "7-9 лет", "10-14 лет"]

  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        {/* Hero Section */}
        <section className="kids-hero-section">
          <div className="container">
            <div className="kids-hero-content">
              <h1 className="kids-hero-title">Игры для детей</h1>
              <p className="kids-hero-description">Развивающие и увлекательные игры для детей разных возрастов</p>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="kids-schedule-section">
          <div className="container">
            <EventCalendar eventType="kids" />
          </div>
        </section>

        {/* Quiz Section */}
        <section className="kids-quiz-section">
          <div className="container">
            <div className="kids-quiz-container">
              <div className="kids-quiz-header">
                <h2 className="section-title">Подберем игру для вашего ребенка</h2>
                <p className="section-description">
                  Ответьте на несколько вопросов, и мы предложим подходящие варианты
                </p>
              </div>
              <Card className="kids-quiz-card">
                <CardContent>
                  <form className="kids-quiz-form">
                    <div className="form-group">
                      <Label>Возраст ребенка</Label>
                      <RadioGroup defaultValue="4-6">
                        <div className="radio-item">
                          <RadioGroupItem value="4-6" id="age-4-6" />
                          <Label htmlFor="age-4-6">4-6 лет</Label>
                        </div>
                        <div className="radio-item">
                          <RadioGroupItem value="7-9" id="age-7-9" />
                          <Label htmlFor="age-7-9">7-9 лет</Label>
                        </div>
                        <div className="radio-item">
                          <RadioGroupItem value="10-14" id="age-10-14" />
                          <Label htmlFor="age-10-14">10-14 лет</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="form-group">
                      <Label>Интересы ребенка</Label>
                      <div className="checkbox-grid">
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-creative" className="checkbox-input" />
                          <Label htmlFor="interest-creative">Творчество</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-science" className="checkbox-input" />
                          <Label htmlFor="interest-science">Наука</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-sports" className="checkbox-input" />
                          <Label htmlFor="interest-sports">Спорт</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-music" className="checkbox-input" />
                          <Label htmlFor="interest-music">Музыка</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-tech" className="checkbox-input" />
                          <Label htmlFor="interest-tech">Технологии</Label>
                        </div>
                        <div className="checkbox-item">
                          <input type="checkbox" id="interest-nature" className="checkbox-input" />
                          <Label htmlFor="interest-nature">Природа</Label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="kids-quiz-submit">
                      Подобрать игры
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Photo Section */}
        <section className="kids-photo-section">
          <div className="container">
            <div className="kids-photo-header">
              <h2 className="section-title">Фотогалерея</h2>
              <p className="section-description">Моменты радости и увлеченности на наших детских мероприятиях</p>
            </div>
            <div className="kids-photo-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`kids-photo-item ${i === 2 || i === 5 ? "kids-photo-item-large" : ""}`}>
                  <div className="kids-photo-image-container">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=Детские игры ${i}`}
                      alt={`Детские игры фото ${i}`}
                      className="kids-photo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="kids-testimonials-section">
          <div className="container">
            <div className="kids-testimonials-header">
              <h2 className="section-title">Отзывы родителей</h2>
            </div>
            <div className="kids-testimonials-grid">
              {[
                {
                  text: "Мой сын в восторге от квестов! Каждый раз с нетерпением ждет новых приключений. Организаторы отлично работают с детьми и создают безопасную, но увлекательную атмосферу.",
                  author: "Елена, мама Миши (8 лет)",
                },
                {
                  text: "Научное шоу превзошло все ожидания! Дочка не только весело провела время, но и узнала много нового. Теперь дома постоянно проводит 'эксперименты' и интересуется наукой.",
                  author: "Андрей, папа Алисы (10 лет)",
                },
                {
                  text: "Отличное место для детского досуга. Профессиональные ведущие, интересные программы и внимательное отношение к каждому ребенку. Рекомендую всем родителям!",
                  author: "Мария, мама Димы (6 лет) и Кати (9 лет)",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="kids-testimonial-card">
                  <CardContent>
                    <p className="kids-testimonial-text">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter>
                    <p className="kids-testimonial-author">— {testimonial.author}</p>
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

export default KidsGamesPage

