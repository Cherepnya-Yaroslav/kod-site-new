import React from "react"
import { Link } from "react-router-dom"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import Button from "../components/Button"
import { Card, CardContent } from "../components/Card"
import StrapiContent from "../components/StrapiContent"
// Обновляем импорт CSS
import "../styles/pages/HomePage.css"

const HomePage = () => {
  // Пример рендеринга данных из Strapi
  const renderHomePageData = (data, getMediaUrl) => {
    // Отладочная информация
    console.log('Raw Strapi data:', data);
    
    // Получаем первый элемент из массива данных
    const homePageData = data.data?.[0] || {};
    
    // Отладочная информация
    console.log('Processed homepage data:', homePageData);
    
    return (
      <>
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-container">
            <h1 className="hero-title">{homePageData.Title || "Добро пожаловать"}</h1>
            <p className="hero-description">{homePageData.Description || "Описание сайта"}</p>
            <div className="hero-buttons">
              <Link to="/personal-parties" className="btn btn-primary">Личные вечеринки</Link>
              <Link to="/open-parties" className="btn hero-secondary-button">Открытые вечеринки</Link>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <section className="video-section">
          <div className="container">
            <div className="video-grid">
              <div className="video-placeholder">
                {homePageData.Video_URL && (
                  <iframe
                    src={homePageData.Video_URL}
                    title="Презентационное видео"
                    className="video-frame"
                    allowFullScreen
                  />
                )}
                {!homePageData.Video_URL && (
                  <span className="video-placeholder-text">Видео</span>
                )}
              </div>
              <div className="video-content">
                <h2 className="section-title">О нас</h2>
                <p className="section-description">
                  {homePageData.About_Description || "Мы предлагаем широкий выбор развлечений для всех возрастов."}
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Телефон:</span>
                    <a href={`tel:${homePageData.Contact_Phone}`} className="contact-link">
                      {homePageData.Contact_Phone || "+1 (234) 567-890"}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href={`mailto:${homePageData.Contact_Email}`} className="contact-link">
                      {homePageData.Contact_Email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-header">
              <h2 className="section-title">{homePageData.About_Title || "О проекте K.O.D."}</h2>
              <p className="section-description">
                {homePageData.About_Full_Description || 
                  "Мы создали пространство, где каждый может найти развлечение по душе, будь то тематическая вечеринка, настольные игры или танцевальный мастер-класс."}
              </p>
            </div>
            <div className="photo-grid">
              {homePageData.Gallery_Images?.data?.map((image, index) => (
                <div key={index} className="photo-item">
                  <img
                    src={getMediaUrl(image)}
                    alt={`K.O.D. фото ${index + 1}`}
                    className="photo-image"
                  />
                </div>
              )) || (
                // Fallback для отсутствующих изображений
                [...Array(3)].map((_, index) => (
                  <div key={index} className="photo-item">
                    <img
                      src={`/placeholder.svg?height=600&width=600&text=Фото ${index + 1}`}
                      alt={`K.O.D. фото ${index + 1}`}
                      className="photo-image"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="founder-section">
          <div className="container">
            <div className="founder-grid">
              <div className="founder-quote">
                <div className="quote-icon">❝</div>
                <blockquote className="quote-text">
                  {homePageData.Founder_Quote || 
                    "Мы создали K.O.D. как место, где люди могут отдохнуть от повседневной рутины, погрузиться в мир игр и развлечений, и просто хорошо провести время в компании друзей или семьи."}
                </blockquote>
                <p className="quote-author">— {homePageData.Founder_Name || "Основатель K.O.D."}</p>
              </div>
              <div className="founder-photos">
                {homePageData.Founder_Images?.data?.map((image, index) => (
                  <div key={index} className="founder-photo">
                    <img
                      src={getMediaUrl(image)}
                      alt={`Основатель K.O.D. ${index + 1}`}
                      className="photo-image"
                    />
                  </div>
                )) || (
                  // Fallback для отсутствующих изображений основателя
                  [...Array(2)].map((_, index) => (
                    <div key={index} className="founder-photo">
                      <img
                        src={`/placeholder.svg?height=400&width=400&text=Фото основателя ${index + 1}`}
                        alt={`Основатель K.O.D. ${index + 1}`}
                        className="photo-image"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="page-container">
      <SiteHeader />
      <main className="main-content">
        <StrapiContent 
          endpoint="home-pages" 
          render={renderHomePageData} 
        />
      </main>
      <SiteFooter />
    </div>
  )
}

export default HomePage

